import React, { Fragment } from 'react';
import { Container } from '@chakra-ui/react';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Videos from './Components/Videos';
import Upload from './Components/Upload';
import Footer from './Components/Footer';
function App() {
  return (
    <Fragment>
    <Router>
      <Header></Header>
        <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/Login' element={<Login/>}  />
        <Route path='/Signup' element={<Signup/>}  />
        <Route path='/Video' element={<Videos/>}  />
        <Route path='/Upload' element={<Upload/>}  />

        <Route path='*' element={<Container style={{color:"red"}}> <p>Sorry Page Not avalable</p> </Container>}  />
        </Routes>
        <Footer></Footer>
    </Router>
    </Fragment>
  );
}

export default App;
