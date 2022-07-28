import { Link } from "react-router-dom"
const PurchaseCompleted = ({orderId}) => {
  return (
    <div className='finishContainer'>
        <div className='containerInfo'>
            <h2 id='headingInfo'>Genial 😁🎉 hemos recibido tu orden de compra </h2>
            <p id='orderId'>El código de tu orden es: {orderId}</p>
            <Link className='returnButton' to='/'>Volver a la tienda</Link>
        </div>
    </div>
  )
}

export default PurchaseCompleted
