import {Provider} from 'react-redux'
import './App.css'
import store from './redux/store/store'
import NavBar from './Components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Package from './pages/Package'
import About from './pages/About'
import Pages from './pages/Pages'
import News from './pages/News'
import Contact from './pages/Contact'
import Details from './Components/Details'
import Hotels from './pages/Hotels'
import HotelsDetails from './Components/HotelDetails'
import Booking from './pages/Booking'
import PayPal from './pages/PayPal'
import MasterCardForm from './pages/MasterCardForm'
import VisaForm from './pages/VisaForm'
import Invoice from './pages/Invoice'

function App() {

  return (
    <>
     <Provider store={store}>
    <BrowserRouter>
         <NavBar/>
      <Routes>
        <Route path='/TravelApp' element={<Home/>}>Home</Route>
        <Route path='/package' element={<Package/>}>Package</Route>
        <Route path='/hotels' element={<Hotels/>}>Shop</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/pages' element={<Pages/>}>Pages</Route>
        <Route path='/news' element={<News/>}>News</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='/details/:name' element={<Details/>}>Details</Route>
        <Route path='/hotel/details/:city' element={<HotelsDetails/>}>Hotel Details</Route>
        <Route path='/book/:city' element={<Booking/>}>Booking</Route>
        <Route path='/paypal/:city' element={<PayPal/>}>PayPal</Route>
        <Route path='/mastercard/:city' element={<MasterCardForm/>}>Master Card</Route>
        <Route path='/visa/:city' element={<VisaForm/>}>Visa</Route>
        <Route path='/invoice/:city' element={<Invoice/>}>Visa</Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
