import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Metrial from "./component/Mertial"
import Product from "./component/Product";
import Dtails from "./component/Details";
import About from "./component/About";
import Star from "./component/Star";
import Contact from "./component/Contact";
import Order from "./component/Order"


function App() {
 
  




  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Metrial />} />
          <Route path="Details" element={<Dtails />} />
          <Route path="product" element={<Product/>} />
          <Route path="star" element={<Star />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;