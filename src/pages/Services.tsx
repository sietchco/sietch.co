import { useEffect } from "react"

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | Sietch"
  }, [])

  return <div>Services</div>
}

export default Services
