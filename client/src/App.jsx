import './App.css'
import { Container} from "react-bootstrap"
import ChartRoom from './ChartRoom'
import Home from "./Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import io from "socket.io-client";
const socket=io("http://127.0.0.1:5000");

function App() {

  return (
    <Container className='d-flex justify-content-center mt-5'>
       <Router>
          <Routes>
             <Route path="/" exact element={<Home socket={socket}/>}/>
             <Route path='/room' element={<ChartRoom socket={socket}/>}/>
          </Routes>
       </Router>
      
    </Container>
  )
}

export default App
