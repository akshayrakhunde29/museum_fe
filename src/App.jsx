import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import VisitRegistrationPage from './pages/VisitRegistrationPage'
import FeelTheJail from './pages/FeelTheJail'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/VisitRegistrationPage" element={<VisitRegistrationPage />} />
          <Route path="/feelthejail" element={<FeelTheJail />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
