import { Link } from 'react-router-dom'

const HomePage = () => {
  const featuredCards = [
    {
      title: 'Barrack Daily-Life Objects',
      period: '20th Century Prison Life',
      description:
        'Original utensils, bedding materials, lanterns, uniforms, and ration tools showcasing the everyday conditions inside historic prison barracks.',
      image:
        'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Prisoner-Created Artwork',
      period: 'Reform & Rehabilitation Exhibit',
      description:
        'Sketches, handwritten poetry, crafts, and paintings created by inmates, reflecting personal expression, reform initiatives, and emotional resilience.',
      image:
        'https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Execution Chamber Artifacts',
      period: 'Historic Judicial Collection',
      description:
        'Preserved objects and historical documentation connected to the prison gallows, judicial procedures, and capital punishment practices of the era.',
      image:
        'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?auto=format&fit=crop&w=900&q=80',
    },
  ]


  return (
    <section className="page">
      <div className="hero-banner">
        <div className="hero-overlay">
          <p className="eyebrow">EST. 1906 • HYDERABAD, TELANGANA</p>
          <h2>Experience the History of Chanchalguda Jail</h2>
          <p>
            Walk through the corridors of one of Hyderabad’s oldest colonial-era prisons. Now preserved as a heritage museum, Chanchalguda offers visitors an immersive journey through prison history, reform stories, and historical archives.

          </p>
          <div className="hero-actions">
            <Link to="/visit" className="btn-primary">
              Book Museum Visit
            </Link>
            <Link to="/VisitRegistrationPage" className="btn-secondary">
              Feel The Jail Experience
            </Link>
          </div>
        </div>
      </div>

      <div className="section-head">
        <h3>Highlighted Artifacts</h3>
        <p>Curated collection highlights featured in guided heritage tours and historical interpretation sessions.</p>
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

    </section>
  )
}

export default HomePage
