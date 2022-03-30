import React from "react";
import { Grid, Typography, Card,CardContent} from "@mui/material";

const SecondSection = ({dat}) => {
  return (
    <Grid item xs={4} >
       <Card sx={{ maxWidth: 345 }} style={{
           display:"flex",
           justifyContent:"center",
           alignItems:"center",
           textAlign:"center",
           flexDirection:"column",
           background: "#F1F7F6",
           
           }} >
      <img src={dat.image}/>
      <CardContent>
        <Typography style={{fontWeight:"bolder"}}>
          {dat.name}
        </Typography>
        <Typography  color="text.secondary" style={{width:"13rem"}}>
          {dat.description}
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
  );
};

export default SecondSection;
