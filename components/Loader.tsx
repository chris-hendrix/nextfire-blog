interface Props {
  show?: boolean
}

export default function Loader({ show = true }: Props) {
  return show ? <div className="loader"></div> : null
}
