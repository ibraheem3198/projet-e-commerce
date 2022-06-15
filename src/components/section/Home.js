import React, { Component } from 'react'
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
      /* Mettre ici Carrousel */
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
                <button className='card_button'>ADD TO CARD</button>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default Home