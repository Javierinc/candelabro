import { Card, Button} from 'react-bootstrap'

const Item = ({ id, nombre, precio, desc, img}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                Precio: {precio}
            </Card.Text>
            <Card.Text>
                Descripción: {desc}
            </Card.Text>
            <Button variant="primary">Ver más</Button>
        </Card.Body>
    </Card>
    
  )
}

export default Item