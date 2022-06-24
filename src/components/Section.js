import React, { Component } from 'react'
import Home from './section/Home'
import About from './section/About'
import Details from './section/Details'
import {Switch, Route} from "react-router-dom"
import Cart from './Cart/Cart'

export class Section extends Component {
    render() {
        return (
        <section>
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={Details} />
            <Route path="/about" component={About} />
            <Route path="/Cart" component={Cart} />
            </Switch>
          </section>
        )
    }
}

export default Section 