import React, { Component } from 'react';
import Post from "./Post"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    list: {
        display: "inline-flex",
        "flex-wrap": "wrap",
        
    }
});

const PostList = ({posts}) =>{
    const postComponent = posts.map(x=>{
        return <Post title={x.title} body={x.body} userId={x.userId} id={x.id} key = {x.id} />;
    })
    const classes = useStyles();
    return(
        <div className={classes.list}>
            {postComponent}
        </div>
    )

}
export default PostList