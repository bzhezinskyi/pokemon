import { Button, Card } from 'react-bootstrap';

export default function PokemoneCard({ pokemon }) {
  return (
    <li>
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={pokemon.other.front_default} /> */}
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </li>
  );
}
