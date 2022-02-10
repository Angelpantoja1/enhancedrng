import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import {getLS, setLS, setLSARR} from './service/dataService';
//We are creating an app that allows the user to create a list of names and get a random name from this list. We also need to be able to remove names from the list. As well as save this list into our local storage.

//Set up html file
//Adding names to array.
//use said array to display our list items onto our page.
//Remove Items from screen / list.
//Save to LS.

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    setNames(getLS());
  }, [])

  const handleSetName = ({ target: { value } }) => {
    setName(value)
  }

  const handleSetNames = () => {
    setNames([...names, name])
    setLS(name);
    setName("");
  }

  const handleRemove = ({ target: { textContent } }) => {
    let test = names.filter(name => name != textContent)
    setNames(test)
    setLSARR(test)
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Form>
            <Form.Group className="mb-3" controlId="names">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a Name"
                onChange={handleSetName}
                value={name}
              />
            </Form.Group>
            <Button onClick={handleSetNames}>Add name</Button>
          </Form>
        </Col>

        <Col md={12}>
          <ListGroup>
            {
              names.map((name, idx) => {
                return (
                  <ListGroup.Item
                    key={idx}
                    onClick={handleRemove}
                  >{name}</ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
