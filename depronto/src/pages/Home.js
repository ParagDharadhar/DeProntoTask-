import "../App.css";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Banner from "../components/Banner";


function Home() {
  return <div className="App">
    <Navbar />
    <Banner/>
    <Products/>
    <Footer />
  </div>;
}

export default Home;
