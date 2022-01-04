import React, { useState } from 'react'
import styled from "styled-components";
import RightNav from './RightNav';
function Burger() {
    const [open, setOpen] = useState(false);
    console.log(open)
    return (
        <>
       <StyledBurger open={open} onClick={()=>setOpen(!open)}>
           <div />
           <div />
           <div />
       </StyledBurger>
        <RightNav open={open}/>
        </>
    )
}

export default Burger

const StyledBurger=styled.ul`
    width:2rem;
    height:2rem;
    position:fixed;
    top:15px;
    right:20px;
    z-index:20;
    display:none;

    @media(max-width:768px){
        display:flex;
        flex-flow: column nowrap;
        justify-content: space-between;
    }
    div{
        width:2rem;
        height:0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius:10px;
        transform-origin:1px;
        transition: all 0.3s linear;

        &:nth-child(1){
           transform:  ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
        }

        &:nth-child(2){
            transform: ${({open}) => open ? 'translate(100%)' : 'translate(0)'};
            opacity: ${({open}) => open ? 0 : 1}
        }

        &:nth-child(3){
            transform:  ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
         }
    }
`