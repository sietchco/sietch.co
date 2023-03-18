import { useEffect } from "react"

const Work = () => {
  useEffect(() => {
    document.title = "Our Work | Sietch"
  }, [])

  return <div>Work</div>
}

export default Work
