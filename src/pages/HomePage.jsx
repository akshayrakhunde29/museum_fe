import { Link } from 'react-router-dom'

const HomePage = () => {
  const featuredCards = [
    {
      title: 'Chola Bronze of Nataraja',
      period: '12th Century CE',
      description:
        'A temple-processional bronze representing cosmic dance and sacred metallurgy traditions of South India.',
      image:
        'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Mughal Court Miniature',
      period: '17th Century CE',
      description:
        'An intricate painting on wasli paper documenting courtly life, diplomacy, and artistic exchange.',
      image:
        'https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Indus Valley Seals',
      period: 'c. 2500 BCE',
      description:
        'Steatite seals engraved with script and motifs used in trade administration across urban settlements.',
      image:
        'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?auto=format&fit=crop&w=900&q=80',
    },
  ]

  const events = [
    {
      name: 'Curator Walkthrough: Echoes of Civilization',
      time: 'Saturday, 4:00 PM',
      detail: 'Gallery Hall A',
    },
    {
      name: 'Hands-on Workshop: Ancient Scripts',
      time: 'Sunday, 11:30 AM',
      detail: 'Learning Studio 2',
    },
    {
      name: 'Evening Lecture: Trade Routes and Empires',
      time: 'Wednesday, 6:15 PM',
      detail: 'Auditorium',
    },
  ]

  return (
    <section className="page">
      <div className="hero-banner">
        <div className="hero-overlay">
          <p className="eyebrow">Welcome to the Museum</p>
          <h2>Journey Through 5,000 Years of Human Creativity</h2>
          <p>
            Explore immersive galleries, rotating exhibitions, and digital storytelling that
            connect objects with the people and cultures behind them.
          </p>
          <div className="hero-actions">
            <Link to="/visit" className="btn-primary">
              Plan Your Visit
            </Link>
            <Link to="/exhibitions" className="btn-secondary">
              View Exhibitions
            </Link>
          </div>
        </div>
      </div>

      <div className="section-head">
        <h3>Highlighted Artifacts</h3>
        <p>Real collection highlights currently discussed in docent-led tours.</p>
      </div>
      <div className="grid cards-grid">
        {featuredCards.map((item) => (
          <article className="museum-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="museum-card-body">
              <p className="chip">{item.period}</p>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="section-head">
        <h3>Upcoming Programs</h3>
      </div>
      <div className="grid two-col">
        {events.map((event) => (
          <article className="info-card event-card" key={event.name}>
            <h4>{event.name}</h4>
            <p className="event-time">{event.time}</p>
            <p>{event.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HomePage
