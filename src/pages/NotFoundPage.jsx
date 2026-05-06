import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="page">
      <h2>Page Not Found</h2>
      <p className="lead">
        The page you are looking for does not exist, or it may have moved to a new gallery.
      </p>
      <Link className="home-link" to="/">
        Return to Home
      </Link>
    </section>
  )
}

export default NotFoundPage
