import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailSection = styled.section`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DetailHeading = styled.h1`
    font-size: 1.6rem;
    text-align: center;
    color: #8097A5;
`
export const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    background-color: #EFF4F8;
    padding: 2rem;
    border-radius: 5px;
    gap: 2rem;
    margin-top: 2rem;
`
export const DetailContainer = styled.div`
    display: flex;
    align-items: center;
 

    @media screen and (max-width: 960px){
        flex-direction: column;
        padding: 1rem;
        justify-content: center;
        max-width: 400px;
    }
`

export const DetailImgWrap = styled.div`

`
export const DetailImg = styled.img`
    margin-right: 1rem;
    border-radius: 5px;
    
`
export const DetailDescWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const DetailProductHeading = styled.h2`
    font-size: 1.2;

`

export const DetailPrice = styled.span`
    font-size: 1.7rem;
`
export const DetailDesc = styled.p`
    font-size: 1.2rem;
    line-height: 1.4rem;
    padding-top 0.2rem;
`
export const DetailStock = styled.p`
    font-size: 0.8rem;
`
export const ButtonAddCart = styled.button`
    width: auto;
    height: 2.5rem;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    background-color: #B9CBC7;
    border-radius: 5px;
    &:hover{
        background-color: #91b5ad;
        transition: 0.3s all ease-out;
    }


`
export const ButtonBuy = styled(Link)`
    text-decoration: none;
    width: auto;
    height: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #4b9c8a;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    &:hover{
        background-color: #2f7d6c;
        transition: 0.3s all ease-in;
    }
`

export const ButtonContinue = styled(Link)`
    text-decoration: none;
    width: auto;
    height: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #d1b771;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    &:hover{
        background-color: #b0954d;
        transition: 0.3s all ease-in;
    }
`