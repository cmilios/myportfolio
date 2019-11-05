import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      width: 200,
      height: 200,
      padding:2,
      margin:10,
      display: "inline-table",
      "background-color": "whitesmoke"

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Post = ({title, body,userId, id}) =>{
    const classes = useStyles();
   

    return (
        <Card className={classes.card} raised = {true}>
        <CardContent>
            <Typography className={classes.title} /*variant="h5" component="h2"*/>
            {title}
            </Typography>
            <Typography variant="body2" component="p">
            {body}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    );

}
export default Post;