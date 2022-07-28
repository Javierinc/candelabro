import { ButtonAdd, ButtonSubtrac, ContainerCounter, CounterSpan } from './ItemCount.elements'

const ItemCount = ({ max, min=1, counter, setCounter }) => {


  const handleSum = () => {
    counter < max && setCounter(counter + 1)
  }
  const handleSubtraction = () => {
    counter > min && setCounter(counter - 1)
  }


  return (
    <ContainerCounter>
        <ButtonSubtrac onClick={handleSubtraction}>-</ButtonSubtrac>
        <CounterSpan>{counter}</CounterSpan>
        <ButtonAdd onClick={handleSum}>+</ButtonAdd>
    </ContainerCounter>
  )
}

export default ItemCount