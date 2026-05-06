const currentExhibitions = [
  {
    title: 'Echoes of Civilization',
    timeline: '1500 BCE - 1600 CE',
    summary: 'Trade goods, ceramics, seals, and ports that shaped trans-regional cultures.',
  },
  {
    title: 'The Age of Maritime Discovery',
    timeline: '1400 - 1800 CE',
    summary: 'Navigational tools, ship models, and journals from Indian Ocean routes.',
  },
  {
    title: 'Voices Through Portraits',
    timeline: '1750 - 1950 CE',
    summary: 'Portraits and photography tracing identity, fashion, and social transformation.',
  },
]

const ExhibitionsPage = () => {
  return (
    <section className="page">
      <h2>Exhibitions</h2>
      <p className="lead">
        Our exhibitions combine rare objects, digital narratives, and immersive spaces.
      </p>
      <div className="grid cards-grid">
        {currentExhibitions.map((item) => (
          <article className="info-card exhibition-card" key={item.title}>
            <p className="chip">{item.timeline}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <p className="event-time">Guided tours daily at 12:00 PM and 3:30 PM</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExhibitionsPage
