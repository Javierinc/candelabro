import styled from "styled-components";
import { Link } from "react-router-dom";
export const SectionInvoice = styled.section`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const HeadingSection = styled.h1`
    font-size: 1.4rem;
    font-weight: bold;
`

export const ContainerInvoice = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #efefef;
    gap: 3rem;
    padding: 2rem;
    border: 1px solid #7a7979;
    border-radius: 5px;
`
export const WrapperInvoice = styled.div`
  
    width: 20rem;
    display: flex;
    flex-direction: column;
`
export const ItemInvoice = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    
    padding: 1rem;
    line-height: 1.4rem;
    
`
export const ItemDetailInvoice = styled.div`

`
export const NameProduct = styled.h4`
    font-size: 1.3rem;
`
export const NumberProducts = styled.p`
    font-size: 1.2rem;
`
export const PriceProduct = styled.p`
    font-size: 1.2rem;
`
export const TotalPrice = styled.p`
    text-align: center;
    font-size: 1.4rem;
`
export const TrashButtonItem = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    background-color: #de4a47;
    border-radius: 5px;
    cursor: pointer;
`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-end;

`

export const CleanButton = styled.button`
    background-color: #de4a47;
    border: none;
    padding: .5rem;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
`
export const BuyButton = styled(Link)`
    background-color: #2f7d6c;
    border: none;
    padding: .5rem;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    min-width: 10rem;
`

export const ButtonProducts = styled(Link)`
    text-decoration: none;
    width: auto;
    padding: 0.5rem 1rem;
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