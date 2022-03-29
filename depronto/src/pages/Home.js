import "../App.css";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";


function Home() {
  return <div className="App">
    <Navbar />
    <Products/>
    <Footer />
  </div>;
}

export default Home;
