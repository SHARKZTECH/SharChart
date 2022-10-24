import React, {  useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {FiUsers,FiSend} from "react-icons/fi"
import {FaHouseUser} from "react-icons/fa"
import { useEffect } from 'react';

const ChartRoom = ({socket}) => {
     
    const [msg,setMsg]=useState("");
    const [text,setText]=useState([]);

    socket.on("message",(message)=>{
        setText([...text,message]);
    })
  
    const handleSend=()=>{
        if(msg){
            socket.emit("chatMsg",msg);
            setMsg("");
        }
    }
    
   

    return (
     <Container>
        <div className='d-flex justify-content-center'>
        <Card style={{width:"600px"}}>
            <Card.Header className='d-flex justify-content-between'>
                <h4 style={{color:"aqua"}}>SharChart</h4>
                <Button>Leave Room</Button>
            </Card.Header>
            <Card.Body className='py-0'>
                <Row>
                    <Col sm={3} className="p-1">
                    <h6 className='ic'>
                     <FaHouseUser/>
                        Room Name
                    </h6>
                    <p>JavaScript</p>
                    <h6 className='ic'>
                        <FiUsers/>
                        Users
                    </h6>
                    <div className='users'>
                    <p>Sharks</p>
                    <p>Reigns</p>
                    </div>
                    </Col>
                    <Col 
                    sm={9}
                    style={{
                        background:"white",
                        height:"300px",
                        overflowY:"scroll"
                    }}
                
                    className="p-3"
                    >
                     {text && text.map((txt)=>(
                       <Card bg='dark' className='p-1 mb-1'>
                          <div className='text-h'>Sharkz 19.00am</div>
                            <p>{txt}</p>
                       </Card>
                      ))}
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
                <Form.Group
                style={{width:"100%"}}
                >
                    <Form.Control
                    type="text"
                    value={msg}
                    onChange={(e)=>setMsg(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <div>
                    <Button onClick={handleSend} className="send-btn"><FiSend/>Send</Button>
                </div>
            </Card.Footer>
        </Card>
        </div>
     </Container>
    );
}

export default ChartRoom;
