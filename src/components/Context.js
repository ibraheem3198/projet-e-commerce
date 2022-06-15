import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "7ecd1064018e2",
                "title": "T-Shirt Dragon Ball Goku JUST SAIYAN",
                "src": "https://cdn.shopify.com//s//files//1//2365//2477//products//tee-shirt-sangoku_1024x1024.jpg?v=1576802775",
                "description": "Dans une période de doute, rappelle",
                "price": "66",
                "colors":"#000",
                "count": "1",
            },
            /*
            
            {
                "_id": "2",
                "title": "",
                "src": "",
                "description": "",
                "content": "",
                "price": ,
                "colors":,
                "count":
            },
            {
                "_id": "3",
                "title": "",
                "src": "",
                "description": "",
                "content": "",
                "price": ,
                "colors":,
                "count": 
            },
            {
                "_id": "4",
                "title": "",
                "src": "",
                "description": "",
                "content": ,
                "price": ,
                "colors":,
                "count":
            },
            {
                "_id": "5",
                "title": "",
                "src": ,
                "description": ,
                "content": ,
                "price": ,
                "colors":,
                "count": 
            },
            {
                "_id": "6",
                "title": ,
                "src": ,
                "description": ,
                "content": ,
                "price": ,
                "colors":,
                "count": 
            
            }*/
        ]
    }






    render() {
        const {products} = this.state;
        return (
        <DataContext.Provider value={{products}}>
            {this.props.children}
        </DataContext.Provider>
            
        )
    }
}

