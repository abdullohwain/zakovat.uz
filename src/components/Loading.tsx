import { PulseLoader } from 'react-spinners'

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <PulseLoader color={document.body.classList.contains("dark") ? "white" : "black"} />
    </div>
  )
}

export default Loading;