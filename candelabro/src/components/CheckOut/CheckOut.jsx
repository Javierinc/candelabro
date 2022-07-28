import { useContext, useState } from 'react'
import { Timestamp } from 'firebase/firestore'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { CartContext } from '../context/CartContext'
import './checkout.css'
import PurchaseCompleted from './PurchaseCompleted';
import { generateOrder } from '../../firebase/fetchFirestore'

const CheckOut = () => {

    const { cart, totalPurchase, cleanCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    if(orderId){
        return <PurchaseCompleted orderId={orderId}/>  
    }

  return (
    <div className='checkOut'>
      <div>
        <h2 className='headingCheckout'>FORMULARIO DE COMPRA</h2>
      </div>
      <div>
        <Formik 
            initialValues={
                {
                    buyer: '',
                    email: '',
                    tel: '',
                    address: '',
                    items: cart.map((prod)=>{ 
                        const id = prod.id
                        const price = prod.price
                        const quantity = prod.quantity
                        const product = prod.name
                        return { id, price, quantity, product } 
                    }),
                    total: totalPurchase(),
                    date: Timestamp.fromDate(new Date)
                }
            } 
            validate={(values)=>{
                let error = {};
                if(!values.buyer){
                    error.buyer = 'Por favor ingresa el nombre del comprador'

                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                    error.buyer = 'El nombre solo puede contener letras y espacios'
                }
                if(!values.email){
                    error.email = 'Por favor ingresa un correo'
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                    error.email = 'El correo no es valido, intenta nuevamente'
                }
                if(!values.tel){
                    error.tel = 'Debes ingresar un número de teléfono'
                }else if(!/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(values.tel)){
                    error.tel = 'Ingresa un número de teléfono valido'
                }
                if(!values.address){
                    error.address = 'Ingresa una dirección de envío'
                }
                return error

            }}
            onSubmit={(values, {resetForm})=>{
                // generateOrder(values)
                generateOrder(values, setOrderId, cleanCart)
                resetForm()        
            }}
        
        >
            {({ errors })=>(
                <div className='containerForm'>
                    <Form className='buyForm'>
                        <div className='inputContainer'>
                            <label htmlFor='buyer'>Nombre</label>
                            <Field 
                                type='text' 
                                id='buyer' 
                                name='buyer' 
                                placeholder='Meryl Streep'
                            />
                            <ErrorMessage name="buyer" component={()=>(
                               <div className='error'>{errors.buyer}</div> 
                            )}/>    
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor='email'>Correo Electrónico</label>
                            <Field 
                                type='email' 
                                name='email' 
                                id='email' 
                                placeholder='merylstreep@hollywood.com'
                            />
                            <ErrorMessage name='email' component={()=>(
                               <div className='error'>{errors.email}</div>
                            )}/> 
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="tel">Teléfono</label>
                            <Field 
                                type='tel' 
                                name='tel' 
                                id='tel' 
                                placeholder='+569XXXXXXXX'
                            />
                           <ErrorMessage name='tel' component={()=>(
                               <div className='error'>{errors.tel}</div>
                            )}/>   
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="address">Dirección de envío</label>
                            <Field 
                                type='text' 
                                name='address' 
                                id='address' 
                                placeholder='London SW1A 1AA, United Kingdom'
                            />
                            <ErrorMessage name='address' component={()=>(
                               <div className='error'>{errors.address}</div>
                            )}/>
                           
                        </div>
                        <button className='submitButton' type='submit'>Comprar</button>
                    </Form>
                </div>
            )}

        </Formik>
      </div>
    </div>
  )
}

export default CheckOut
