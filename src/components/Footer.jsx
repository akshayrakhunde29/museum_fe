import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-col">
        <p className="footer-title">Chanchalguda Jail Museum</p>
        <p className="footer-text">
          Preserving prison heritage, historical records, and stories of reform through immersive exhibitions, guided experiences, and educational programs for future generations.
        </p>
      </div>
      <div className="footer-col footer-meta">
        <p>Open Tuesday – Sunday, 9:00 AM – 5:30 PM</p>
        <p>Chanchalguda Central Prison Museum
Hyderabad, Telangana – 500 024</p>
        <p>info@jailmuseum.telangana.gov.in</p>
      </div>
      <div className="footer-col footer-links">
        <Link to="/museumvisit">Book Museum Visit</Link>
        <Link to="/feelthejail">Feel The Jail Experience</Link>
      </div>
    </footer>
  )
}

export default Footer
