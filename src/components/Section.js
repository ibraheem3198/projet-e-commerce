import React, { Component } from 'react'
import Home from './section/Home'
import Details from './section/Details'
import {Switch, Route} from "react-router-dom"
import Cart from './Cart/Cart'
import Aboutjs from './section/About'
import Contact from './section/Contact'


export class Section extends Component {
    render() {
        return (
        <section>
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={Details} />
            <Route path="/about" component={Aboutjs} />
            <Route path="/contact" component={Contact} />

            <Route path="/Cart" component={Cart} />
            </Switch>
          </section>
        )
    }
}

export default Section 