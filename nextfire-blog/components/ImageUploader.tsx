import { useState } from 'react'
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage'
import { auth, storage } from '../lib/firebase'
import Loader from './Loader'

// Uploads images to Firebase Storage
export default function ImageUploader() {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState<string>('0')
  const [downloadURL, setDownloadURL] = useState<string | null>(null)

  // Creates a Firebase Upload Task
  const uploadFile = async (e: React.ChangeEvent) => {
    // Get the file
    const target = e.target as HTMLInputElement
    const file = target.files && target.files[0]
    if (!file) return

    const extension = file.type.split('/')[1]

    // Makes reference to the storage bucket location
    const uid = auth.currentUser?.uid
    const storageRef = ref(storage, `uploads/${uid}/${Date.now()}.${extension}`)
    setUploading(true)

    // Starts the upload
    const task = uploadBytesResumable(storageRef, file)
    // Listen to updates to upload task
    task.on('state_changed', (snapshot) => {
      const pct = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0)
      setProgress(pct)

      // Get downloadURL AFTER task resolves (Note: this is not a native Promise)
      task
        .then((_d) => getDownloadURL(storageRef))
        .then((url) => {
          setDownloadURL(String(url))
          setUploading(false)
        })
    })
  }

  return (
    <div className="box">
      <Loader show={uploading} />
      {uploading && <h3>{progress}%</h3>}

      {!uploading && (
        <>
          <label className="btn">
            📸 Upload Img
            <input type="file" onChange={uploadFile} accept="image/x-png,image/gif,image/jpeg" />
          </label>
        </>
      )}

      {downloadURL && <code className="upload-snippet">{`![alt](${downloadURL})`}</code>}
    </div>
  )
}