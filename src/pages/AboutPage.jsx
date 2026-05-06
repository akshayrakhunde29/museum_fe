const AboutPage = () => {
  return (
    <section className="page">
      <h2>About the Museum</h2>
      <p className="lead">
        Founded in 1958, the museum is dedicated to preserving and sharing cultural heritage.
      </p>
      <article className="info-card">
        <h3>Our Mission</h3>
        <p>
          We collect, conserve, and interpret artifacts that reflect diverse communities and
          histories, making knowledge accessible through education and public programming.
        </p>
      </article>
      <div className="grid two-col">
        <article className="info-card">
          <h3>Conservation Lab</h3>
          <p>
            Specialists in paper, metal, and textile conservation restore fragile objects for
            long-term preservation and public display.
          </p>
        </article>
        <article className="info-card">
          <h3>Education and Outreach</h3>
          <p>
            The museum runs school partnerships, language-inclusive tours, and weekend family
            activities to make heritage accessible for all visitors.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutPage
