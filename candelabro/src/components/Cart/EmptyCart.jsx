import { SectionInvoice, HeadingSection, ButtonProducts } from './Cart.elements'

const EmptyCart = () => {
  return (
        <SectionInvoice>
            <HeadingSection>No hay productos en tu carrito</HeadingSection>
            <ButtonProducts to='/'>Ver productos</ButtonProducts>
        </SectionInvoice>
  )
}

export default EmptyCart
