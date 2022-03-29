import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import {Button, Row, Col, Card} from 'react-bootstrap';
import {Link } from 'react-router-dom'

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  //It will run once when the app load
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-container">
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}

      {/* {data.map((product)=> ( 
        <div className="grid-container">
          <Link to={`/product/${product.id}`}>
          <div key={product.id} className="card">
           <div><img src={product.image} alt="#"/></div>
           <div className="card-description">
               <h6>{product.title}</h6>
               <h6>{`Price: ${product.price}`}</h6>
               <h6>{`Category: ${product.category}`}</h6>
           </div>
          </div>
          </Link>
          </div>
      ))} */}

      <Row xs={1} md={2} className="g-4">
        {Array.from(data).map((product) => (
          <Col>
            <Link to={`/product/${product.id}`}>
              <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              {`Price: ${product.price}`}
              </Card.Text>
              </Card.Body>
              </Card>
            </Link>
          </Col>
          ))}
      </Row>
    </div>
  );
};

export default Products;
