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

function App() {
  return (
    
    <BrowserRouter>
<Nav />
<Routes>
 <Route path="/" exact element={<Home />}></Route>
 <Route  path="*" element={<Error />}></Route>
 <Route  path="/aboutus" element={<Aboutus />}></Route>
 <Route  path="/products" element={<Products />}></Route>
 <Route  path="/contactus" element={<Contactus />}></Route>

 </Routes>
 <Footer />
 <Copyright />
</BrowserRouter>
  );
}

export default App;
