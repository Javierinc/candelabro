import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { SectionInvoice, ContainerInvoice, HeadingSection, WrapperInvoice, ItemInvoice, ItemDetailInvoice, TrashButtonItem, ContainerButtons, CleanButton, BuyButton, NameProduct, NumberProducts, PriceProduct, TotalPrice, ButtonProducts } from './Cart.elements'
import { FaTrash } from 'react-icons/fa';


const Cart = () => {


    const { carrito, totalCompra, limpiarCarrito, eliminarProducto, cantidad, setCantidad } = useContext(CartContext)
    
    if(carrito.length === 0){
        return <SectionInvoice>
                    <HeadingSection>No hay productos en tu carrito</HeadingSection>
                    <ButtonProducts to='/'>Ver productos</ButtonProducts>
               </SectionInvoice>
    }
  return (

    <SectionInvoice>
        <HeadingSection>Detalle de tu compra</HeadingSection>
        <ContainerInvoice>
            <WrapperInvoice>


                {

                    carrito.map((item) =>(

                    <ItemInvoice key={item.id}>
                        <ItemDetailInvoice>
                            <NameProduct>{item.nombre}</NameProduct>
                            <NumberProducts>Cantidad: {item.cantidad}</NumberProducts>
                            <PriceProduct>Precio: ${item.cantidad * item.precio}</PriceProduct>
                        </ItemDetailInvoice>
                        <TrashButtonItem>
                            <FaTrash size={"1.5em"} color={"#fff"} onClick={()=> eliminarProducto(item.id)}/>
                        </TrashButtonItem>
                    </ItemInvoice>
                    ))
                }
                <hr />
                <TotalPrice>Total compra: ${totalCompra()}</TotalPrice>
            </WrapperInvoice>
            <ContainerButtons>
                <CleanButton onClick={limpiarCarrito}>Vaciar Carrito</CleanButton>
                <BuyButton>Finalizar Compra</BuyButton>
            </ContainerButtons>
        </ContainerInvoice>
    </SectionInvoice>

  )
}

export default Cart
