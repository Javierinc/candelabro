import styled from 'styled-components'
import { Link } from "react-router-dom";
export const CardContainer = styled(Link)`
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #EFF4F8;
    border-radius: 5px;
    // box-shadow: 0 0 3px 3px rgba(224, 224, 224, 0.7);
    &:link, &:visited,  &:hover, &:active
    {
        color: #000000;
        text-decoration: none;
    }
    &:hover {
        box-shadow: 0 0 20px 10px rgba(224, 224, 224, 0.9);
        transition: 0.2s ease-in;
        background-color: #EFF1F8;
    }

`
export const ProductImage = styled.img`
    border-radius: 5px;
`

export const ProductPrice = styled.span`
    display: block;
    margin-top: 20px;
    font-size: 1.4rem;
    font-weight: bold;
    color: #0891B2;
`
export const ProductName = styled.h3`
    margin: 10px 0 0;
`
export const ProductDesc = styled.p`
    margin: 10px 0 0;
    line-height: 1.4;
    color: #666;

`
export const ProductButton = styled.button`
    margin-top 10px;
    background-color: #8097A5;
    color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #486373;
        transition: 0.3s all ease-in;
    }
    

`