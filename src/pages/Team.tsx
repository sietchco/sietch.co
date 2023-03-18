import { useEffect } from "react"

const Team = () => {
  useEffect(() => {
    document.title = "Our Team | Sietch"
  }, [])
  
  return (
    <div>Team</div>
  )
}

export default Team
