import React from 'react';
import PostList from "./PostList"
import { posts } from "./dummy-posts";
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
import { Typography } from '@material-ui/core';
import 'tachyons'


const useStyles = makeStyles({
    

})

const Home = ()=>{
    const classes = useStyles();
    return(
        <div className="home">

            <Typography className="tc mwebfont " variant="h1" component="h1">Welcome</Typography>
            <PostList posts={posts} className={classes.list}/>


        </div>
        
    )
}
export default Home;