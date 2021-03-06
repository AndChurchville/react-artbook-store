import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';



export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
            { /* 
            https://www.iconfinder.com/icons/118726/book_icon
            Attribution-NonCommercial 3.0 Netherlands (CC BY-NC 3.0 NL);
            https://www.iconfinder.com/iconsets/iconic-1 */ }  
            <Link to='/'>
                <img src={logo} alt='store' className='navbar-brand' />
            </Link>
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                        <Link to='/about' className='nav-link'>
                            About Us
                        </Link>
                </li>
                <li className='nav-item ml-5'>
                    <Link to='/' className='nav-link'>
                        Art Books
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className="mr-2">
                        <i className='fas fa-cart-plus' />
                    </span>
                    My Cart
                </ButtonContainer>
            </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);

.nav-link{
    color:var(main-white) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}

`;