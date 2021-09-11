import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import logo from '../../images/LeaugeLogo/image1.png'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 150,
  },
  center: {
    
  }
});
const SingleCard = (props) => {
    const classes = useStyles();
  
  const {idLeague,strLeague}=props.league;
    return (
        <div className='col-md-4 mb-3'>
         
            <Card className={classes.root}>
      <CardContent>
      
        <CardMedia
        className={classes.media}
        image={logo}
        title="Contemplative Reptile"
      />
      
        <Typography variant="h5" component="h2">
         
        </Typography>
        <Typography className='text-center' color="textSecondary">
         {idLeague}
        </Typography>
        <Typography variant="body2" component="p" className='text-center' >
          {strLeague}
          <br/>
        </Typography>
      </CardContent>
      <CardActions> 
        <Link to={`/leagueDetails/${idLeague}`} className='d-block m-auto' style={{textDecoration:'none'}}><Button variant="contained" color="primary" >Learn More</Button></Link>
      </CardActions>
    </Card>
    
        </div>
    );
};

export default SingleCard;