import React,{useState,useEffect} from 'react'
import {  Container, Grid } from '@mui/material';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts';


export default function Home() {
const [currentId, setCurrentId] = useState(0);
const API=process.env.REACT_APP_BACKEND;

console.log(API,'API')

console.log(currentId,"currentid")

const dispatch = useDispatch();
useEffect(()=>{
dispatch(getPosts());
}, [currentId, dispatch]);

  return (
    <div> <Container>
    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
      <Grid item xs={12} sm={7}>
      <Posts setCurrentId={setCurrentId} />
      </Grid>
      <Grid item xs={12} sm={4}>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Grid>
    </Grid>
  </Container></div>
  )
}
