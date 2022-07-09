import { Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, shortDesc, img}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                Precio: ${precio}
            </Card.Text>
            <Card.Text>
              {shortDesc}
            </Card.Text>
            <Link to={`/detalle/${id}`}>
              <Button variant="primary">Ver más</Button>
            </Link>
        </Card.Body>
    </Card>
    
  )
}

export default Item