import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Cart/Cart.css' 

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {  
          cart : null,
        } 
    }    
    
    componentDidMount(){
        let cart = JSON.parse(localStorage.getItem('cart'));
        this.setState({cart : cart})
    }

    

    render(){
        return (
            this.state.cart && (
                this.state.cart.map((product) => {
                    return(
                      
                        <div className='cart_payment'>
                            <img className='cart_img' src={product.images.photos[0]}/>
                            <div className='cart_payment_details'>
                                <h4 className='cart_payment_details_title'> {product.title} </h4>
                                <div className='cart_payment_details_price'> {product.price} </div>
                            </div>
                            <div className='button'>
                            <button className='cart_button'>PAIEMENT</button>
                            </div>
                        </div>


                      
                   
                     
                       
                
                     
                       
                  
                        
                        

                    )
                })
            )
        )
    }

}
