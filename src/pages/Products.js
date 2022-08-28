
import  Card  from 'react-bootstrap/Card';
import './Products.css'
import Button from 'react-bootstrap/Button';
import useFetch from '../hooks/useFetch';
import axios from 'axios';



const Products =()=>{
  const {data:item,loading,error}= useFetch("http://localhost:3000/games");
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>

  const handleClick =(id)=>{
    
    axios.delete(`http://localhost:3000/games/${id}`).then(alert("game deleted")).finally(window.location.reload(true))
  }

    return(
    <div className='container'>
      {item && item.map((game)=>(
      <Card key={game.id} style={{ width: '25vw', margin:'0.2rem 0.5rem'}}>
      <Card.Header as="h3">{game.console}</Card.Header>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>Release year {game.year}</Card.Text>
        <Card.Text>${game.price}</Card.Text>
        <Button variant="primary">Details</Button>
        <Button variant="danger" type="delete" style={{margin:'0 0 0 11vw'}} onClick={()=>{handleClick(game.id)}}> Delete</Button>
      </Card.Body>
      </Card>))}
      </div>
)
}
      

export default Products

