import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.header`
    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #B9CBC7;
`
export const NavbarWrapper = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1300px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

`
export const IconLogo = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: #6b696b;
    text-decoration: none;
    &:hover {
        color: #ffffff;
        transition: 0.4s ease-in;
        
    }
    @media screen and (max-width: 960px){
        padding-left: 1rem;
    }

`

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => click ? 0 : "-100%"};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #B9CBC7;
    }
`
export  const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    
    @media screen and (max-width: 960px){
        width: 100%;
        height: 70px;

    }
`
export const MenuItemLink = styled(Link)`
    text-decoration: none;
    color: #6b696b;
    font-weight: bold;
    &:hover{
        color: #ffffff;
        transition: 0.4s ease-in;
    }


`

export const IconLogoMobile = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        font-size: 2rem;
        color: #6b696b;
        padding-right: 1rem;
    }

`