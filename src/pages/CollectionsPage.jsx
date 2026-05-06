const CollectionsPage = () => {
  const collections = [
    {
      title: 'Archaeology',
      text: 'Stone tools, inscriptions, and ceremonial objects from regional excavations.',
      count: '1,820 Objects Catalogued',
    },
    {
      title: 'Fine Arts',
      text: 'Paintings, sculptures, and mixed-media works spanning five centuries.',
      count: '640 Works Restored',
    },
    {
      title: 'Textiles',
      text: 'Traditional weaving, ceremonial garments, and restoration case studies.',
      count: '2,100 Textile Records',
    },
    {
      title: 'Numismatics',
      text: 'Coins and currency that trace political and economic transitions over time.',
      count: '12,400 Coins and Medals',
    },
  ]

  return (
    <section className="page">
      <h2>Collections</h2>
      <p className="lead">
        Browse key collection categories preserved by our research and conservation teams.
      </p>
      <div className="grid two-col">
        {collections.map((item) => (
          <article className="info-card collection-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <p className="chip">{item.count}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CollectionsPage
