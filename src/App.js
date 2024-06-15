import React,{useEffect,useState} from 'react';
import { styled } from '@mui/system';
import { AppBar, Container, Grid, Typography } from '@mui/material';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
const StyledContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));



const App = () => {
  

return (
  <BrowserRouter>
  <StyledContainer maxWidth="lg">

     <Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/auth" element={<Auth/>} />


</Routes>
    </StyledContainer>

  </BrowserRouter>
)
};

export default App;
