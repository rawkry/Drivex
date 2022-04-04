import React, { useState } from 'react'
import {AppBar,Box,Toolbar, Tabs, Tab,useMediaQuery,useTheme, Container} from '@mui/material';

import Drawercomp from './Drawercomp';

const PAGES =["DriveX for learners","DriveX for Instructor"]





const Header = () => {
  const[value,setValue]= useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)
  return (

   
      <Container>


     
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" style={{background:"white"}}>
      <Toolbar >
        
        <img src='./images/logo.png' className='logo' style={{marginLeft:"15px"}} />

        {

isMatch ? (
  <>
   
  <Drawercomp/>
  
  </>
) : (
<>
<Tabs sx={{marginLeft:"auto", color:"green" }} value ={value} onChange={(e,value)=>setValue(value)}  indicatorColor="primary">
                       
                     {
                        PAGES.map((page,index)=>(

                          <Tab key ={index} label ={page}/>
                        ))
                     }  
                       
                       
                       
                       
                      
               </Tabs>


</>

)


        }
            
               
       
       
      </Toolbar>
      
    </AppBar>
  </Box>
  </Container>
  )
}

export default Header