import React from 'react'
import '../App.css'

import Carousel from 'react-bootstrap/Carousel'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>



const Banner = () => {
  return (
    <div className='Banner'>
        <Carousel>
        <Carousel.Item>
            <img 
            src='https://img.freepik.com/free-psd/headphone-brand-product-sale-facebook-cover-banner_161103-93.jpg?w=2000'
            alt="lol" 
            className="banner">
            </img>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="banner"
            src="https://img.freepik.com/free-psd/headphone-brand-product-sale-facebook-cover-banner_161103-93.jpg?w=2000"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="banner"
            src="https://img.freepik.com/free-psd/headphone-brand-product-sale-facebook-cover-banner_161103-93.jpg?w=2000"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        
    </div>
  )
}

export default Banner