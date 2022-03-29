import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import {Button} from 'react-bootstrap';
import {Link } from 'react-router-dom'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";


class SingleProduct2 extends React.Component { 

    constructor(props) {
    super(props);
    console.log(this.props.id);
    //It will run once when the app load
    axios({
    method: "GET",
    url: "https://dummyjson.com/products/"+props,
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((e) => console.log(e))
        
    }

    render() {
      return (
        <>
        
            hi
        
        </>
      );
    }
  }
  
  export default SingleProduct2;
