import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { SectionInvoice, ContainerInvoice, HeadingSection, WrapperInvoice, ItemInvoice, ItemDetailInvoice, TrashButtonItem, ContainerButtons, CleanButton, BuyButton, NameProduct, NumberProducts, PriceProduct, TotalPrice } from './Cart.elements'
import { FaTrash } from 'react-icons/fa';
const Cart = () => {


    const { carrito, totalCompra, limpiarCarrito, eliminarProducto } = useContext(CartContext)


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


    // <div>
    //   <h1>Detalle de tu compra</h1>
    //   <hr />
    //   {
    //     carrito.map((item) => (
    //         <div key={item.id}>
    //             <h4>{item.nombre}</h4>
    //             <p>Cantidad: {item.cantidad} </p>
    //             <p>Precio: ${item.cantidad * item.precio}</p>
    //         </div>
    //     ))
    //   }
    //   <hr />
    //   <h2>Total: ${totalCompra()}</h2>  
    // </div>
  )
}

export default Cart
