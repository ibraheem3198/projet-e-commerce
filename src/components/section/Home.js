import React, { Component } from 'react'
import Pagination from '@mui/material/Pagination';
import Image_1 from '../svg/Image_1.jpg'
import Image_2 from '../svg/Image_2.jpg'
import Image_3 from '../svg/Image_3.jpg'
import social_medias from '../svg/social_medias.png'
import Logo_white from '../svg/Logo_white.png'
import {Link} from 'react-router-dom'
import '../css/Home.css'




export class Home extends Component {
  constructor() {
    super();
    this.state = {
      products : null,
      totalPage : 1,
      page : 1,
    }
  }

 getProducts = (page) => {
  fetch('https://otakod.es/hetic/ecommerce-api/products?category=vetement&limit=12&page='+page)
  .then((response) => response.json())
  .then((json) => { 
    console.log(json)
    this.setState({
      products : json.products,
      totalPage : json.total_pages,
      page : json.page,
    })
    console.log(this.state.products);
  });
 }

 handleChange = (event, value) => {
  this.getProducts(value)
 
 }
  
  componentDidMount() {
   this.getProducts(this.state.page)
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
                { <img width='100%' src={product.images.photos[0]} alt=""/>}
               
                </div>
                <p className='card_text'>{product.title}</p>
                <span className='card_price'>{product.price}</span>
                <button className='card_button'><Link to={`Product/${product.id}`} className='lien'>DETAILS DU PRODUIT</Link></button>
              </div>
              
            )
          })
          
        }
        <div className='pagination'>
        <Pagination
            count={this.state.totalPage}
            page={this.state.page}
            onChange={this.handleChange}
            color="primary"
          />
          </div>
        </div>
        
      </div>
      
      <footer>
<div className="footer">


<div className='logo_footer'>
       <img src={Logo_white} alt="" width="10%"/>
       </div>
<div className="social_media_footer">
<img src={social_medias} alt="" width="20%"/>
</div>

<div className="row">
<ul>
<li><a>Contact us</a></li>
<li><a>Our Services</a></li>
<li><a>Privacy Policy</a></li>
<li><a>Terms et Conditions</a></li>
<li><a>Career</a></li>
</ul>
</div>

<div className="row2">
   JAYMA Copyright © 2022 JAYMA - All rights reserved || Designed By: JAYMA 
</div>
</div>
</footer>




      
     </>

     
    )
  }
}

export default Home