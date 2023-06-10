import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Players = ({tab}) => {
  return (
    <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={tab.url} />
    <Card.Body>
      <Card.Title>{tab.name}</Card.Title>
      <Card.Text>
      {tab.age}, {tab.nationality}, {tab.jersynumber}, {tab.team}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  </div>
  )
}

export default Players