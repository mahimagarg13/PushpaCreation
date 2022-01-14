import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';

function App() {
  return (
    
    <BrowserRouter>
<Nav />
<Routes>
 <Route path="/" exact element={<Home />}></Route>
 </Routes>
</BrowserRouter>
  );
}

export default App;
