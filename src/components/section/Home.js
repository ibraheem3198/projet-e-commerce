import React, { Component } from 'react'
import Image_1 from '../svg/Image_1.jpg'
import Image_2 from '../svg/Image_2.jpg'
import Image_3 from '../svg/Image_3.jpg'
import {Link} from 'react-router-dom'
import '../css/Home.css'

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      products : null,
      page : 1
    }
  }

  
  componentDidMount() {
    fetch('https://otakod.es/hetic/ecommerce-api/products?category=vetement&limit=12&page='+this.state.page)
    .then((response) => response.json())
    .then((json) => { 
      this.setState({products : json.products })
      console.log(this.state.products);
    });
  }

  render() {
    return (
     <>
       <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src= {Image_1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Image_2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Image_3} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

<div className='container'>
        <div className='row justify-content-center' >
        { this.state.products &&
          this.state.products.map((product) => {
            return (
              <div className="card col-md-3 col-sm-6" key={product.id}>
                <div className='card_image'>
                { <img width='100%' src={product.images.photos[0]}/> }
               
                </div>
                <p className='card_text'>{product.title}</p>
                <span className='card_price'>{product.price}</span>
                <button className='card_button'><Link to={`Product/${product.id}`}>Product Details</Link></button>
              </div>
              
            )
          })
        }
        
        </div>
        
      </div>
      
      <footer>
<div class="footer">
<div class="row">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms et Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div class="row2">
                  JAYMA Copyright © 2022 JAYMA - All rights reserved || Designed By: JAYMA
</div>
</div>
</footer>



v
      
     </>

     
    )
  }
}

export default Home