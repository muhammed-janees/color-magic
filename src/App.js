import { useState } from 'react';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './bootstrap.min.css'

function App() {
  const [color, setColor] = useState("")

  const generateRandomColor = (e) => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(color);
    e.preventDefault()
  };

  const toRed = (e) => {
    setColor('red');
    e.preventDefault()
  }

  const toBlue = (e) => {
    setColor('blue');
    e.preventDefault()
  }

  const toGreen = (e) => {
    setColor('green');
    e.preventDefault()
  }

  const toPurple = (e) => {
    setColor('purple');
    e.preventDefault()
  }

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: color, transition: 'background-color 0.5s ease' }}>
        <Row>
          <Col className='border shadow p-5' style={{ borderRadius: '30px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
            <h1 className='mb-4 fw-bolder text-center'>COLOR MAGIC</h1>

            <Form className="d-flex align-items-center justify-content-center flex-column">
              <Form.Group controlId="formBasicEmail">
                <Form.Control style={{ border: '3px solid' }} type="text" placeholder="Enter your Color" value={color} onChange={(e) => setColor(e.target.value)} />
              </Form.Group>
              <hr />
              <Button className='bg-warning' variant="primary" type="submit" value={color} style={{ backgroundColor: color }}
                onClick={generateRandomColor}>
                Random Color
              </Button>
            </Form>
            <div className='d-flex mt-4 justify-content-center'>
              <Button className='me-3'
                style={{ borderRadius: '50%', backgroundColor: 'red', width: '50px', height: '50px', border: '3px solid black' }} variant="primary" type="submit" value={color} onClick={toRed}></Button>
              <Button className='me-3'
                style={{ borderRadius: '50%', backgroundColor: 'blue', width: '50px', height: '50px', border: '3px solid black' }} variant="primary" type="submit" value={color} onClick={toBlue}></Button>
              <Button className='me-3'
                style={{ borderRadius: '50%', backgroundColor: 'green', width: '50px', height: '50px', border: '3px solid black' }} variant="primary" type="submit" value={color} onClick={toGreen}></Button>
              <Button
                style={{ borderRadius: '50%', backgroundColor: 'purple', width: '50px', height: '50px', border: '3px solid black' }} variant="primary" type="submit" value={color} onClick={toPurple}></Button>
            </div>
          </Col>
        </Row>


      </Container>
    </>
  );
}

export default App;

