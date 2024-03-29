import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Gdpr from '../pages/Gdpr'
import Privacy from '../pages/Privacy'
import Policy from '../pages/Policy'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import SignIn from '../pages/SignIn'
import CareManager from '../pages/Dashboard/CareManager'
import AdultDomCare from '../pages/Dashboard/AdultDomCare'
import CypDomCare from '../pages/Dashboard/CypDomCare'
import ResidentialHomes from '../pages/Dashboard/ResidentialHomes'
import NursingHomes from '../pages/Dashboard/NursingHomes'
import HospiceAdult from '../pages/Dashboard/HospiceAdult'
import HospiceCyp from '../pages/Dashboard/HospiceCyp'
import ResidentialNursingHomes from '../pages/Dashboard/ResidentialNursingHomes'
import Poc from '../pages/Dashboard/Poc'
import Timesheets from '../pages/Dashboard/Timesheets'
import VisitTracking from '../pages/Dashboard/VisitTracking'
import RateCards from '../pages/Dashboard/RateCards'
import SchedulingAssistance from '../pages/Dashboard/SchedulingAssistance'
import AgencyBusinessDoc from '../pages/Dashboard/AgencyBusinessDoc'
import VisitLogReports from '../pages/Dashboard/VisitLogReports'
import CarePackagePortfolio from '../pages/Dashboard/CarePackagePortfolio'
import StaffDoc from '../pages/Dashboard/StaffDoc'
import SignUp from '../pages/SignUp'
import Footer from '../components/Footer'
import ProductFeatures from '../pages/ProductFeatures'
import EmailNotification from '../pages/EmailNotification'
import VerifyEmail from '../pages/VerifyEmail'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import About from '../pages/About'
import ProtectedRoutes from '../utils/ProtectedRoutes'

const Index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/gdpr-policy' element={ <Gdpr /> } />
        <Route path='/privacy' element={ <Privacy /> } />
        <Route path='/policy' element={ <Policy /> } />
        <Route path='/features' element={ <ProductFeatures /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/faq' element={ <Faq /> } />
        <Route path='/sign-in' element={ <SignIn /> } />
        <Route path='/sign-up' element={ <SignUp /> } />
        <Route path='/email-notification' element={ <EmailNotification /> } />
        <Route path='/verify-email' element={ <VerifyEmail /> } />
        <Route path='/forgot-password' element={ <ForgotPassword /> } />
        <Route path='/forgotten-password' element={ <ResetPassword /> } />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/provider/dashboard' element={ <Dashboard /> } />
          <Route path='/provider/poc' element={ <Poc /> } />
          <Route path='/provider/staff-doc' element={ <StaffDoc /> } />
          <Route path='/provider/care-package-portfolio' element={ <CarePackagePortfolio /> } />
          <Route path='/provider/rota/scheduling-assistance' element={ <SchedulingAssistance /> } />
          <Route path='/provider/rota/timesheet' element={ <Timesheets /> } />
          <Route path='/provider/rota/visit-tracking' element={ <VisitTracking /> } />
          <Route path='/provider/rota/visit-log-reports' element={ <VisitLogReports /> } />
          <Route path='/provider/admin/agency-business-doc' element={ <AgencyBusinessDoc /> } />
          <Route path='/provider/admin/ratecards' element={ <RateCards /> } />
          <Route path='/provider/care-manager' element={ <CareManager /> } />
          <Route path='/provider/adult-domiciliary-care' element={ <AdultDomCare /> } />
          <Route path='/provider/cyp-domiciliary-care' element={ <CypDomCare /> } />
          <Route path='/provider/residential-homes' element={ <ResidentialHomes /> } />
          <Route path='/provider/nursing-homes' element={ <NursingHomes /> } />
          <Route path='/provider/hospice-adult' element={ <HospiceAdult /> } />
          <Route path='/provider/hospice-cyp' element={ <HospiceCyp /> } />
          <Route path='/provider/residential-nursing-homes' element={ <ResidentialNursingHomes /> } />
        </Route>
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default Index