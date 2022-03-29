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
            src='https://i.pinimg.com/originals/cd/1c/7c/cd1c7cbd61e5f596d2d59ae2ea7b3d9c.jpg'
            alt="lol" 
            className="banner">
            </img>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="banner"
            src="https://i.pinimg.com/736x/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="banner"
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Rakshabandhan/D11399736_Rakshabandhan_Fest_Desktop-Header._CB1198675309_.jpg'
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        
    </div>
  )
}

export default Banner