import { ItemInvoice, ItemDetailInvoice, TrashButtonItem,  NameProduct, NumberProducts, PriceProduct } from './Cart.elements'
import { FaTrash } from 'react-icons/fa';
const Invoice = ({cart, deleteProduct}) => {
  return (
    cart.map((item) =>(
        <ItemInvoice key={item.id}>
            <ItemDetailInvoice>
                <NameProduct>{item.name}</NameProduct>
                <NumberProducts>Cantidad: {item.quantity}</NumberProducts>
                <PriceProduct>Precio: ${item.quantity * item.price}</PriceProduct>
            </ItemDetailInvoice>
            <TrashButtonItem>
                <FaTrash size={"1.5em"} color={"#fff"} onClick={()=> deleteProduct(item.id)}/>
            </TrashButtonItem>
        </ItemInvoice>
        ))
  )
}

export default Invoice
