import React from 'react'; 
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import "./ButtonHeader.css"; 

function ButtonHeader()  {

  return (
    <div className="button-header-container">
      <ListGroup horizontal>
        <Button  variant="secondary" className="custom-button-item">Prev</Button>
        <ListGroup.Item className="custom-list-item">Score: 89</ListGroup.Item>
        <Button  variant="secondary" className="custom-button-item">Next</Button>
      </ListGroup>
    </div>
  )


}


export default ButtonHeader; 