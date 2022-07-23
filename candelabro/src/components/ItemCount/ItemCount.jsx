
import { ButtonAdd, ButtonSubtrac, ContainerCounter, CounterSpan } from './ItemCount.elements'

const ItemCount = ({ max, min=1, counter, setCounter }) => {


  const handleSuma = () => {
    counter < max && setCounter(counter + 1)
  }
  const handleResta = () => {
    counter > min && setCounter(counter - 1)
  }


  return (
    <ContainerCounter>
        <ButtonSubtrac onClick={handleResta}>-</ButtonSubtrac>
        <CounterSpan>{counter}</CounterSpan>
        <ButtonAdd onClick={handleSuma}>+</ButtonAdd>
    </ContainerCounter>
  )
}

export default ItemCount