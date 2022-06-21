import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import '../css/Details.css'

export class Details extends Component {
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

    render() {
        let id =  this.props.match.params.id;
        return (
            this.state.product && (
                <div className='product'>
                <p className='product_photos'>{<img width='50%' src={this.state.product.images.photos[0]}/> }</p>
                <div className='product_details'>
                    <div className='product_details_suit'>
                    <h2 className='product_title'>{this.state.product.title}</h2>
                    <span className='product_price'>{this.state.product.price}</span>
                    </div>
                <p className='product_description'>{this.state.product.description}</p>
                <Link to="/cart" className="cart">
                    ADD TO CART
                </Link>
                
                </div> 
              
                
              </div>
            )
          
        )
    }
}

export default Details 