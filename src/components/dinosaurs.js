import React from "react";
import Dinosaur from "./dinosaur";
import Grid from '@mui/material/Grid';
const Dinosaurs = ({selectedDinosaurs}) =>{
    return (
        <div className="dinosaurs">
            <Grid container spacing={2}>
        
        {selectedDinosaurs.map(element=>{
            return <Dinosaur dinosaur={element}/>
})}
</Grid>
        </div>
    );
};

export default Dinosaurs ;