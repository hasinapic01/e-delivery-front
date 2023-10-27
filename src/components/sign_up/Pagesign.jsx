import React from "react";
import { Box, CssBaseline, Grid, Typography,Link } from '@mui/material';
import Signup from "./Signup";
import Picture from './Picture3.jpg'
import styled from "styled-components";

export default function Pagesign(){
return(
    <>
        <Grid  container justifyContent="center" direction="row"
        sx={{
            padding:3,
           }}
        >
            <Signup/>
        </Grid>
    </>
)
}


function Image(){
    return <img src={Picture} width="580px" height="580px" style={{
        borderRadius:2}}/>
  }