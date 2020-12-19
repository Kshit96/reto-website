import React from 'react';
import {ReactComponent as Background} from './assets/image.svg';
import './App.css';
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container className="App mx-0 my-0" fluid>
     <Background className={'background'}/>
     {/*viewBox={'0 0 3840 2180'}*/}
    </Container>
  );
}

export default App;
