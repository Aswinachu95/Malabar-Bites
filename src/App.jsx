// import { useState } from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Card from "./Card/Card.jsx";
import Banner from "./Banner/Banner.jsx";
import Button from "./Button/Button.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Card />
      <Banner />
      <Button />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;