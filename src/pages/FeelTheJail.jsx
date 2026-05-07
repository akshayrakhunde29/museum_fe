import { useState } from 'react'

const FeelTheJail = () => {
  const barracks = [
    {
      title: 'Barrack A — Colonial Wing',
      capacity: 'Capacity: 2',
      tags: ['Original 1906 Structure', 'Iron Bunk', 'Stone Floor'],
      description:
        'Experience the original colonial-era prison conditions in this authentic preserved barrack.',
      restrictions:
        'No personal bedding. Prison-issued blanket and ration meal provided.',
      dark: true,
    },
    {
      title: 'Barrack B — Solitary Cell',
      capacity: 'Capacity: 1',
      tags: ['Single Occupancy', 'Isolation Experience', 'Historical Cell'],
      description:
        'A solitary confinement cell preserved as it was with a guided reflection session.',
      restrictions:
        'Psychiatric clearance recommended. Emergency assistance available.',
      dark: true,
    },
    {
      title: 'Barrack C — General Ward',
      capacity: 'Capacity: 2',
      tags: ['Dormitory Style', '1980s Era', 'Community Experience'],
      description:
        'Representative 1980s general ward conditions with structured daily schedule.',
      restrictions:
        'No personal belongings beyond ID and approved medical supplies.',
      dark: true,
    },
    {
      title: 'Barrack D — Heritage Suite',
      capacity: 'Capacity: 2',
      tags: ['Restored Heritage', 'Curated Interior', 'Documentation'],
      description:
        'A thoughtfully restored heritage barrack experience with guided storytelling.',
      restrictions:
        'Priority given to researchers and educational visitors.',
      dark: false,
    },
  ]

  const [selectedPurpose, setSelectedPurpose] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    mobile: '',
    email: '',
    governmentId: '',
    barrack: '',
    date: '',
    emergency: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const {
      fullName,
      age,
      mobile,
      email,
      governmentId,
      barrack,
      date,
      emergency,
    } = formData

    if (
      !fullName ||
      !age ||
      !mobile ||
      !email ||
      !governmentId ||
      !barrack ||
      !date ||
      !emergency ||
      !selectedPurpose
    ) {
      alert('Please fill all required fields.')
      return
    }

    if (age < 18) {
      alert('Participant must be 18+')
      return
    }

    if (mobile.length < 10) {
      alert('Enter valid mobile number')
      return
    }

    setSubmitted(true)
  }

  return (
    <section className="feel-jail-page">
      <section className="feel-jail-hero">
        <p className="breadcrumb">Home • Feel The Jail Experience</p>

        <h1>Feel The Jail Experience</h1>

        <p>
          A supervised overnight immersive experience in the historic barracks
          of Chanchalguda. Limited registrations per week.
        </p>
      </section>

      <section className="rules-card">
        <div>
          <h3>Eligibility & Rules</h3>

          <ul>
            <li>Participants must be 18 years or above</li>
            <li>No alcohol, tobacco, or prohibited items</li>
            <li>Participants must be in good physical health</li>
            <li>Experience runs from 8:00 PM to 6:00 AM</li>
            <li>Full payment required at booking time</li>
          </ul>
        </div>

        <div>
          <ul className="rules-list">
            <li>Valid government-issued photo ID mandatory</li>
            <li>No mobile phones inside the barrack area</li>
            <li>Prior written consent form must be submitted</li>
            <li>Maximum 2 persons per barrack booking</li>
            <li>No refunds within 48 hours of experience date</li>
          </ul>
        </div>
      </section>

      <section className="barracks-section">
        <p className="section-tag">AVAILABLE BARRACKS</p>

        <div className="barracks-grid">
          {barracks.map((item) => (
            <article className="barrack-card" key={item.title}>
              <div
                className={`barrack-header ${
                  item.dark ? 'dark-header' : 'green-header'
                }`}
              >
                <h3>{item.title}</h3>

                <span>{item.capacity}</span>
              </div>

              <div className="barrack-body">
                <div className="barrack-tags">
                  {item.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </div>

                <p className="barrack-description">{item.description}</p>

                <div className="restriction-box">
                  <strong>Restrictions:</strong> {item.restrictions}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="registration-section">
        <p className="section-tag">EXPERIENCE REGISTRATION</p>

        <div className="registration-card">
          <h2>Register for Feel The Jail</h2>

          <p className="registration-text">
            Submit your application for the overnight experience.
            Applications are reviewed within 2 working days.
          </p>

          {submitted && (
            <div className="success-message">
              <h3>Application Submitted Successfully 🎉</h3>

              <p>
                Thank you for registering for the Feel The Jail experience.
                Our team will review your application and contact you shortly.
              </p>
            </div>
          )}

          <form className="jail-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="As per government ID"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Age *</label>

                <input
                  type="number"
                  name="age"
                  placeholder="Must be 18+"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>

                <input
                  type="text"
                  name="mobile"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Government ID *</label>

              <input
                type="text"
                name="governmentId"
                placeholder="Aadhaar / Passport / DL"
                value={formData.governmentId}
                onChange={handleChange}
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Select Barrack *</label>

                <select
                  name="barrack"
                  value={formData.barrack}
                  onChange={handleChange}
                >
                  <option value="">Choose a barrack</option>
                  <option>Barrack A</option>
                  <option>Barrack B</option>
                  <option>Barrack C</option>
                  <option>Barrack D</option>
                </select>
              </div>

              <div className="form-group">
                <label>Preferred Date *</label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Purpose of Visit</label>

              <div className="purpose-grid">
                {[
                  'Personal Interest',
                  'Research',
                  'Media',
                  'Educational',
                ].map((purpose) => (
                  <button
                    type="button"
                    key={purpose}
                    className={
                      selectedPurpose === purpose
                        ? 'purpose-btn active-purpose'
                        : 'purpose-btn'
                    }
                    onClick={() => setSelectedPurpose(purpose)}
                  >
                    {purpose}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group full-width">
              <label>Emergency Contact *</label>

              <input
                type="text"
                name="emergency"
                placeholder="Full Name +91 XXXXX XXXXX"
                value={formData.emergency}
                onChange={handleChange}
              />
            </div>

            <div className="agreement-box">
              By submitting this form, I confirm that I have read and agree to
              all eligibility criteria and regulations for the Feel The Jail
              experience.
            </div>

            <div className="form-actions">
              <button type="button" className="draft-btn">
                Save Draft
              </button>

              <button type="submit" className="submit-btn">
                Submit Application →
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  )
}

export default FeelTheJail