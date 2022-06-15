import React, { Component } from 'react'
import Menu from './svg/menu.svg'
import Close from './svg/close.svg'
import CartIcon from './svg/CartIcon.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import Logo from './svg/logo projet.png'


export class Header extends Component {

state = {
    toggle: false
}

menuToggle = () =>{
    this.setState({toggle: !this.state.toggle})
}

    render() {
        const {toggle} = this.state;
        return (
          <header>
            <div className="menu" onClick={this.menuToggle}>
            <img src={Menu} alt="" width="20"/>
            </div>
            <div className='Logo'>
                <img src={Logo} alt="" width="120"/>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="close" onClick={this.menuToggle}> 
                    <img src={Close} alt="" width="20"/>
                    </li>
                </ul>
                <div className='nav-cart'>
                    <span>0</span>
                    <Link to="/cart">
                    <img src={CartIcon} alt="" width="20"/>
                    </Link>
                </div>
            </nav>
          </header>
        )
    }
}

export default Header