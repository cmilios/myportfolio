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
            <div className="tt">
                <Typography className="tc mwebfont " variant="h1" component="h1" noWrap>Welcome </Typography>
                <Typography className="tc mwebfont" variant="subtitle1" component="p">This is an interactive representation of my skills</Typography>
            </div>
            <PostList posts={posts} className={classes.list}/>


        </div>
        
    )
}
export default Home;