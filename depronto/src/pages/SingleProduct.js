import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import {Button, Row, Col, Card} from 'react-bootstrap';
import {Link, useParams } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




const SingleProduct = () => {

  
  const {id} = useParams(); //ID of the product to fetch
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  var [l, setL] = useState([]);

  //It will run once when the app load
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://dummyjson.com/products/"+id,
    })
      .then((res) => {
        console.log(res.data);
        setL(res.data.images[0])
        console.log(l);
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
          <Card>
              <Card.Img variant="top" src = {l} />
              <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              {`Price: ${product.price}`}
              </Card.Text>
              </Card.Body>
          </Card>
          </div>
    </div>
    <Footer />
    </div>
  );
};

export default SingleProduct;
