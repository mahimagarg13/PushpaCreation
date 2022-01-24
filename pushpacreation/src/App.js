import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import Error from './Pages/Error';
import Aboutus from './Components/Aboutus';
import Products from './Components/Products';
import Contactus from './Components/Contactus';
import Jwellery from './Pages/Products/Jwellery';
import Carpet from './Pages/Products/Carpet';
import Doormat from './Pages/Products/Doormat';
import Wooddecoration from './Pages/Products/Wooddecoration';
import Clock from './Pages/Products/Clock';
import Bags from './Pages/Products/Bags';
import Potery from './Pages/Products/Potery';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/Jwellery" element={<Jwellery />}></Route>
        <Route path="/carpet" element={<Carpet />}></Route>
        <Route path="/doormat" element={<Doormat />}></Route>
        <Route path="/wooddecoration" element={<Wooddecoration />}></Route>
        <Route path="/clock" element={<Clock />}></Route>
        <Route path="/bags" element={<Bags />}></Route>
        <Route path="/potery" element={<Potery />}></Route>
      </Routes>
      <Footer />
      <Copyright />
    </BrowserRouter>
  );
}

export default App;
