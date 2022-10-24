import React, { useState } from 'react';
import {Button, Card, Container,Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"


const Home = () => {
  const [name,setName]=useState("");
  const [room,setRoom]=useState("Javascript");
  const navigate=useNavigate()

  const handleJoin=()=>{
    if(name && room){
      console.log(name,room);
      navigate("/room")
    }
  }
    return (
        <div>
         <Card style={{width:"300px"}}> 
            <Card.Header className='text-center'>
              SharChart
            </Card.Header>
            <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control 
              type="text" placeholder="Enter UserName" 
              onChange={(e)=>setName(e.target.value)}
              value={name}
              />        
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Room</Form.Label>
              <Form.Select
              onChange={(e)=>setRoom(e.target.value)}
              value={room}
              defaultValue="Javascript"
              >
              <option value="Javascript">Javascript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
             </Form.Select>        
            </Form.Group>
            <div className='d-grid'>
            <Button onClick={handleJoin}>Join Chart</Button>
            </div>
            </Card.Body>
          </Card>
        </div>
    );
}

export default Home;
