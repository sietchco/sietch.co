import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Sietch"
  }, [])
  
  return <div>Contact</div>
}

export default Contact
