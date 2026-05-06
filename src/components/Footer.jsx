import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-col">
        <p className="footer-title">Museum of Living History</p>
        <p className="footer-text">
          Preserving stories, objects, and culture for future generations through inclusive
          exhibitions, education programs, and conservation.
        </p>
      </div>
      <div className="footer-col footer-meta">
        <p>Open Tue-Sun, 10:00 AM - 6:00 PM</p>
        <p>123 Heritage Avenue, Old Town District</p>
        <p>info@museumlivinghistory.org</p>
      </div>
      <div className="footer-col footer-links">
        <Link to="/visit">Plan Visit</Link>
        <Link to="/exhibitions">Current Shows</Link>
        <Link to="/collections">Collections Archive</Link>
      </div>
    </footer>
  )
}

export default Footer
