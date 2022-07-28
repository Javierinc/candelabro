import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { SectionInvoice, ContainerInvoice, HeadingSection, WrapperInvoice, ContainerButtons, CleanButton, BuyButton,  TotalPrice } from './Cart.elements'
import EmptyCart from './EmptyCart';
import Invoice from './Invoice';


const Cart = () => {
    const { cart, totalPurchase, cleanCart, deleteProduct} = useContext(CartContext)   
    if(cart.length === 0){
        return <EmptyCart/>
    }
  return (
    <SectionInvoice>
        <HeadingSection>DETALLE DE TU COMPRA</HeadingSection>
        <ContainerInvoice>
            <WrapperInvoice>
                <Invoice cart={cart} deleteProduct={deleteProduct}/>
                <hr />
                <TotalPrice>Total compra: ${totalPurchase()}</TotalPrice>
            </WrapperInvoice>
            <ContainerButtons>
                <CleanButton onClick={cleanCart}>Vaciar Carrito</CleanButton>
                <BuyButton to='/checkout'>Finalizar Compra</BuyButton>
            </ContainerButtons>
        </ContainerInvoice>
    </SectionInvoice>
  )
}

export default Cart
