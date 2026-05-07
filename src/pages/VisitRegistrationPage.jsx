import { useState } from 'react'

const VisitRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    gender: '',
    residentialAddress: '',
    aadhaarNumber: '',
    preferredVisitDate: '',
    numberOfVisitors: '1',
    visitType: 'individual',
    emergencyContactName: '',
    emergencyContactNumber: '',
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required'
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile Number is required'
    if (!formData.emailAddress.trim()) newErrors.emailAddress = 'Email Address is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.residentialAddress.trim()) newErrors.residentialAddress = 'Residential Address is required'
    if (!formData.aadhaarNumber.trim()) newErrors.aadhaarNumber = 'Aadhaar/Government ID is required'
    if (!formData.preferredVisitDate) newErrors.preferredVisitDate = 'Preferred Visit Date is required'
    if (!formData.numberOfVisitors) newErrors.numberOfVisitors = 'Number of Visitors is required'
    if (!formData.emergencyContactName.trim()) newErrors.emergencyContactName = 'Emergency Contact Name is required'
    if (!formData.emergencyContactNumber.trim()) newErrors.emergencyContactNumber = 'Emergency Contact Number is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Registration submitted:', formData)
      // Reset form after successful submission
      setFormData({
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
        gender: '',
        residentialAddress: '',
        aadhaarNumber: '',
        preferredVisitDate: '',
        numberOfVisitors: '1',
        visitType: 'individual',
        emergencyContactName: '',
        emergencyContactNumber: '',
      })
    }
  }

  const handleCancel = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      emailAddress: '',
      gender: '',
      residentialAddress: '',
      aadhaarNumber: '',
      preferredVisitDate: '',
      numberOfVisitors: '1',
      visitType: 'individual',
      emergencyContactName: '',
      emergencyContactNumber: '',
    })
    setErrors({})
  }

  return (
    <section className="page">
      <div className="hero-banner" style={{ minHeight: '280px' }}>
        <div className="hero-overlay">
          <p className="eyebrow">Registration</p>
          <h2>Museum Visit Registration</h2>
          <p>Register your visit online and skip the queue. Confirmation will be sent to your email and mobile number.</p>
        </div>
      </div>

      <div className="registration-container">
        <div className="info-banner">
          <p>
            <strong>Pre-registration is mandatory for groups of 10 or more.</strong> Book in working hours are weekdays (2-5 pm). Entry tickets can run transferred.
          </p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          {/* Visitor Details Section */}
          <fieldset className="form-section">
            <legend>Visitor Details</legend>
            <p className="form-section-desc">Fill in the form below. All fields marked * are required.</p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="As per government ID"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className={errors.mobileNumber ? 'error' : ''}
                />
                {errors.mobileNumber && <span className="error-text">{errors.mobileNumber}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address *</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="you@example.com"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className={errors.emailAddress ? 'error' : ''}
                />
                {errors.emailAddress && <span className="error-text">{errors.emailAddress}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={errors.gender ? 'error' : ''}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span className="error-text">{errors.gender}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="residentialAddress">Residential Address *</label>
              <textarea
                id="residentialAddress"
                name="residentialAddress"
                placeholder="Door No., Street, City, State, PIN Code"
                rows="3"
                value={formData.residentialAddress}
                onChange={handleInputChange}
                className={errors.residentialAddress ? 'error' : ''}
              />
              {errors.residentialAddress && <span className="error-text">{errors.residentialAddress}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="aadhaarNumber">Aadhaar / Government ID Number *</label>
              <input
                type="text"
                id="aadhaarNumber"
                name="aadhaarNumber"
                placeholder="XXXX XXXX XXXX"
                value={formData.aadhaarNumber}
                onChange={handleInputChange}
                className={errors.aadhaarNumber ? 'error' : ''}
              />
              {errors.aadhaarNumber && <span className="error-text">{errors.aadhaarNumber}</span>}
            </div>
          </fieldset>

          {/* Visit Details Section */}
          <fieldset className="form-section">
            <legend>Visit Details</legend>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredVisitDate">Preferred Visit Date *</label>
                <input
                  type="date"
                  id="preferredVisitDate"
                  name="preferredVisitDate"
                  value={formData.preferredVisitDate}
                  onChange={handleInputChange}
                  className={errors.preferredVisitDate ? 'error' : ''}
                />
                {errors.preferredVisitDate && <span className="error-text">{errors.preferredVisitDate}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="numberOfVisitors">Number of Visitors *</label>
                <input
                  type="number"
                  id="numberOfVisitors"
                  name="numberOfVisitors"
                  min="1"
                  value={formData.numberOfVisitors}
                  onChange={handleInputChange}
                  className={errors.numberOfVisitors ? 'error' : ''}
                />
                {errors.numberOfVisitors && <span className="error-text">{errors.numberOfVisitors}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Visit Type *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="visitType"
                    value="individual"
                    checked={formData.visitType === 'individual'}
                    onChange={handleInputChange}
                  />
                  Individual Visit
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="visitType"
                    value="group"
                    checked={formData.visitType === 'group'}
                    onChange={handleInputChange}
                  />
                  Group Visit
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="visitType"
                    value="school"
                    checked={formData.visitType === 'school'}
                    onChange={handleInputChange}
                  />
                  School / Educational
                </label>
              </div>
            </div>
          </fieldset>

          {/* Emergency Contact Section */}
          <fieldset className="form-section">
            <legend>Emergency Contact</legend>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="emergencyContactName">Emergency Contact Name *</label>
                <input
                  type="text"
                  id="emergencyContactName"
                  name="emergencyContactName"
                  placeholder="Full name"
                  value={formData.emergencyContactName}
                  onChange={handleInputChange}
                  className={errors.emergencyContactName ? 'error' : ''}
                />
                {errors.emergencyContactName && <span className="error-text">{errors.emergencyContactName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="emergencyContactNumber">Emergency Contact Number *</label>
                <input
                  type="tel"
                  id="emergencyContactNumber"
                  name="emergencyContactNumber"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.emergencyContactNumber}
                  onChange={handleInputChange}
                  className={errors.emergencyContactNumber ? 'error' : ''}
                />
                {errors.emergencyContactNumber && <span className="error-text">{errors.emergencyContactNumber}</span>}
              </div>
            </div>
          </fieldset>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default VisitRegistrationPage