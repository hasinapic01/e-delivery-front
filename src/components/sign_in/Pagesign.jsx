import React from "react";
import { Box, CssBaseline, Grid, Typography,Link } from '@mui/material';
import Sign_in from "./Sign_in";
import styled from "styled-components";

export default function Pagesign(){
return(
    <>
        <Box sx={{ marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', }} > 
            <Sign_in/>
        </Box>
        {/*<Grid  container justifyContent="center" direction="row"
        sx={{
            padding:3,
           }}
        >
            <Sign_in/>
        </Grid>*/}
    </>
)
}


/*function Image(){
    return <img src={logo} width="580px" height="580px" style={{
        borderRadius:2}}/>
  }*/