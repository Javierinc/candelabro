import { Link } from 'react-router-dom'
import styled from "styled-components";

export const CartWidgetLink = styled(Link)`
    font-size: 2em;
    color: #6b696b;
    margin-right: 1rem;

    @media screen and (max-width: 960px){
        position: fixed;
        top: 23px;
        right: 20px;
    }
`

export const CartWidgetTotal = styled.span`
    font-size: 1.4rem;
    color: #6b696b;
    font-weight: bold
`
