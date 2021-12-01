import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Order from './components/Order';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
      <Route path='/'  element={<Body/>} exact />
      <Route path='/Order/:id'  element={<Order/>} exact />
      {/* <Body/> */}
      <Route path='/Contact'  element={<Contact/>} exact />
      <Route path='/Services'  element={<Services/>} exact />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
