const VisitPage = () => {
  const visitInfo = [
    {
      title: 'Hours',
      text: 'Tuesday to Sunday: 10:00 AM - 6:00 PM. Last entry at 5:15 PM.',
    },
    {
      title: 'Tickets',
      text: 'Adults $12, Students $6, Children under 10 free. Family passes available.',
    },
    {
      title: 'Accessibility',
      text: 'Wheelchair access, elevators, tactile maps, and audio guides are provided.',
    },
    {
      title: 'Directions',
      text: 'Located near Central Station with public parking on Heritage Avenue.',
    },
  ]

  return (
    <section className="page">
      <h2>Plan Your Visit</h2>
      <p className="lead">
        Everything you need for a comfortable and memorable visit to the museum.
      </p>
      <div className="grid two-col">
        {visitInfo.map((item) => (
          <article className="info-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default VisitPage
