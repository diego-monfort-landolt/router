import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import es from '../images/es.jpg'
import '../stylesheet/cards.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


const Cards = () => {
  return (
    <>
    
    <h2 className='bootstrap'>Bootrstrap</h2>
      <div className="containerCard"> 
        <div className="cardBody">
          <Card className='card'
            color="white"
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src={es}
            />
            <CardBody>
              <CardTitle tag="h5">
                Card 1
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button color="primary">
                Button
              </Button>
            </CardBody>
          </Card>

          <Card
            color="white"
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src={es}
            />
            <CardBody>
              <CardTitle tag="h5">
                Card 2
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button color="primary">
                Button
              </Button>
            </CardBody>
          </Card>

          <Card
            color="white"
            
            style={{
              width: '18rem',
             
            }}
          >
            <img
              alt="Sample"
              src={es}
            />
            <CardBody>
              <CardTitle tag="h5">
                Card 3
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <Button color="primary">
                Button
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>

      


    </>
  )
}

export default Cards