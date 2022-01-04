import React from 'react'
import styled from "styled-components";
import Burger from './Burger';
function Navbar() {
    return (
       <Nav>
           <div className="logo">navlogo</div>
           <Burger />
       </Nav>
    )
}

export default Navbar

const Nav=styled.div`
    width:100%;
    height:55px;
    background-color: whitesmoke;
    display:flex;
    align-items: center;
    justify-content:space-between;
    // padding:0 20px;
    .logo{
        padding: 15px;
    }
`