import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import {Link, useParams } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




const SingleProduct = () => {

  
  const {id} = useParams(); //ID of the product to fetch
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  //It will run once when the app load
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/"+id,
    })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    
    <div className="App">
    <Navbar />
    <div className="products-container">
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
          <div key={product.id} className="card">
           <div><img src={product.image} alt="#"/></div>
           <div className="card-description">
               <h6>{product.title}</h6>
               <h6>{`Price: ${product.price}`}</h6>
               <h6>{`Category: ${product.category}`}</h6>
           </div>
          </div>
    </div>
    <Footer />
    </div>
  );
};

export default SingleProduct;
