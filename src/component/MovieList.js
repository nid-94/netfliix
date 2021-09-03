import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import { MovieData } from './../MovieData';

export const MovieList = ({MovieData}) => {
    const useStyles = makeStyles({
        root: {
          maxWidth: 230,
        },
        media: {
          height: 300,
        },
      });
      
    const classes = useStyles();
    
    return (
        <div >
          
<Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={MovieData.posterURL}
          title={MovieData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {MovieData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {MovieData.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {MovieData.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <ShareIcon/>
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    
        </div>
    )
    }
