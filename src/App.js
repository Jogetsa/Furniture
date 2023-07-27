import './App.css';
import Header from './components/Header/Header';
import Home from './pages/HomePage/Home';
import Shop from './pages/ShopPage/Shop';
import About from './pages/AboutPage/About';
import Login from './pages/LoginPage/Login';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Register from './pages/RegisterPage/Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
