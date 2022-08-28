import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function Register() {
  const [title,setTitle]= useState("")
  const [console,setConsole]= useState("")
  const [year,setYear]= useState("")
  const [price,setPrice]= useState("")
  
// new game register from form
  const handleSubmit=(e)=> {
    e.preventDefault();
     
    axios.post("http://localhost:3000/games",{title,
      console,
      year,
      price,
    }).then(alert("game added"))
    setTitle("")
    setConsole("")
    setYear("")
    setPrice("")
  };

  return (
    <Form onSubmit={handleSubmit} className='container-lg'>
    <Form.Group className="mb-3" controlId="formBasictext">
      <Form.Label>Game name</Form.Label>
      <Form.Control type="text" value={title} name="title" placeholder="Enter the game name" onChange={(e)=>setTitle(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasictext">
      <Form.Label>Console type</Form.Label>
      <Form.Control type="text" value={console} name="console" placeholder="ps5/pc/xbox" onChange={(e)=>setConsole(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasictext">
      <Form.Label>Year of release</Form.Label>
      <Form.Control type="text" value={year} name="year" placeholder="Input the game year" onChange={(e)=>setYear(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasictext">
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" value={price} name="price" placeholder="Put the sugested price" onChange={(e)=>setPrice(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Register