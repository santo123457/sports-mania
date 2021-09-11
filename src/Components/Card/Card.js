import { CardMedia, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const useStyles = makeStyles({
    
    media: {
      height: 10,
    },
   
});
const Card = () => {
    const classes = useStyles();
    const[league,setLeague]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res=> res.json())
        .then(data=>setLeague(data.leagues.slice(0,15)))

    },[])
    
    return (
        <div className="row">
           
          {
              league.map((league)=><SingleCard league={league}></SingleCard>)
          }
            
        </div>
    );
};

export default Card;