import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    natureOfInquiry: '',
    message: '',
  })

  const inquiryOptions = [
    'General Inquiry',
    'Group Booking',
    'School Tour',
    'Research Access',
    'Feedback',
    'Other',
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      fullName: '',
      mobileNumber: '',
      emailAddress: '',
      natureOfInquiry: '',
      message: '',
    })
  }

  return (
    <section className="page">
      <div className="hero-banner" style={{ minHeight: '280px' }}>
        <div className="hero-overlay">
          <p className="eyebrow">Get In Touch</p>
          <h2>Contact Us</h2>
          <p>For inquiries, group bookings, and research access requests, get in touch with our team.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>We&apos;re Here to Help</h3>
          <p>Our visitor services team is available during museum hours. For online queries, we respond within 1–2 working days.</p>

          <div className="contact-detail">
            <h4>Address</h4>
            <p>Chanchalguda Central Prison Museum<br />Chanchalguda, Hyderabad<br />Telangana - 500 024</p>
          </div>

          <div className="contact-detail">
            <h4>Phone</h4>
            <p>+91-40 2345 6789<br />Visitor Helpline: +91-40 2345 6780</p>
          </div>

          <div className="contact-detail">
            <h4>Email</h4>
            <p>info@jailmuseum.telangana.gov.in<br />bookings@jailmuseum.telangana.gov.in</p>
          </div>

          <div className="contact-detail">
            <h4>Office Hours</h4>
            <p>Tuesday - Sunday: 9:00 AM - 5:30 PM<br />Closed Monday & Public Holidays</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <p>We&apos;ll respond to your query within 1–2 working days.</p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="+91 XXXXX XXXXX"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email Address *</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="you@example.com"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="natureOfInquiry">Nature of Inquiry *</label>
            <select
              id="natureOfInquiry"
              name="natureOfInquiry"
              value={formData.natureOfInquiry}
              onChange={handleInputChange}
              required
            >
              <option value="">Select topic</option>
              {inquiryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your inquiry in detail..."
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactPage