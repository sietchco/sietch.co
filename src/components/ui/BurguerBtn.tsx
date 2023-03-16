
const BurguerBtn = ({ toggleNavbar, navbar }) => {
  return (
    <div
      onClick={toggleNavbar}
      className={`nav-icon ${navbar ? 'open' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurguerBtn
