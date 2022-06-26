import React, { Component } from 'react'
/*import { Link } from 'react-router-dom'*/
/*import { withRouter } from "react-router-dom"*/
import '../css/Details.css'

class Details extends Component {
    constructor() {
        super();
        this.state = {  
          product : null,
        } 
    }

    componentDidMount(){
        let id =  this.props.match.params.id;
        fetch('https://otakod.es/hetic/ecommerce-api/products/'+id)
        .then((response) => response.json())
        .then((json) => { 
        this.setState({product : json })
        console.log(json);
        });
    }

    addToCart = (product) => {
        let cart = localStorage.getItem('cart');
        if (cart == null) {
            let products = [];
            products.push(product);
            localStorage.setItem('cart',JSON.stringify(products));
        }
        else{
            let oldCart = JSON.parse(localStorage.getItem('cart'))
            oldCart.push(product)
            localStorage.setItem('cart',JSON.stringify(oldCart));
            console.log(oldCart);
        }
        alert('le produit a été ajouté au panier !')
    }

    
    render() {
        /*let id =  this.props.match.params.id;*/
    
        return (
            this.state.product && (
                <div className='product'>
                <p className='product_photos'>{<img width='50%' src={this.state.product.images.photos[0]} alt="" />}</p>
                <div className='product_details'>
                    <div className='product_details_suit'>
                    <h2 className='product_title'>{this.state.product.title}</h2>
                    <span className='product_price'>{this.state.product.price}</span>
                    </div>
                <p className='product_description'>{this.state.product.description}</p>
                <button onClick={() => {this.addToCart(this.state.product)}} className='product_button_cart'>
                    AJOUTER AU PANIER  
                </button>
                
                </div> 
       
              </div>
            )
          
        )
    }
}

export default Details ;