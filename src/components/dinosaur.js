import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Dinosaur = ({ dinosaur }) => {
  const {
    image,
    name,
    birth,
  
    sizeandWeight,
    diet,
    distinguishingCharacteristics,
    habitat,
    link,
    
  } = dinosaur;

  return (
    <Grid item xs={8} md={4} key={dinosaur.id}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          className="img_dinosaur"
          sx={{ height: 250 }}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p>{name}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            <p>Habitat : {habitat}</p>
            <p>6 Historical Period : {birth} million years ago</p>
           <p> Size and Weight : {sizeandWeight}</p>
            <p>Diet : {diet}</p>
            <p>Distinguishing Characteristics : {distinguishingCharacteristics}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Dinosaur;