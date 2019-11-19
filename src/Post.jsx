import React from 'react';
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
      display: "flex",
      "background-color": "whitesmoke",
      flexGrow: 1,
      flexWrap: "wrap",
      justifyContent: "space-between"


    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
      marginBottom: 10
    },
    pos: {
      marginBottom: 12,
    },
    buttons:{
      alignSelf: "flex-end",
    }
  });

const Post = ({title, body,userId, id, mailUri}) =>{
    const classes = useStyles();
    const mail = "mailto:"+mailUri+"?subject=Get details for "+
    title+"&body=Hello, I request to get details about "+title+
    " could I have more info%3F";

    return (
        <Card className={classes.card} raised = {true}>
        <CardContent>
            <Typography className={classes.title} variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="inherit" component="p" color="textSecondary">
            {body}
            </Typography>
        </CardContent>
        <CardActions>
            <Button className={classes.buttons} href={mail} size="small">Learn More</Button>
        </CardActions>
        </Card>
    );

}
export default Post;