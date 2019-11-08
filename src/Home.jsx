import React from 'react';
import PostList from "./PostList"
import { posts } from "./dummy-posts";
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
import { Typography } from '@material-ui/core';
import 'tachyons'
import NavigationBar from "./NavigationBar";
import Typist from 'react-typist';


const useStyles = makeStyles({
    

})

const Home = ()=>{
    const classes = useStyles();
    return(
        <div className="home">
            <NavigationBar></NavigationBar>
            <div className="tt">
                <Typist avgTypingDelay={130}>
                    <Typist.Delay ms={1000}/>
                    <Typography className="tc mwebfont" variant="h1" component="h1" noWrap>Welcome </Typography>
                    <Typography className="tc mwebfont" variant="subtitle1" component="p">This is an interactive representation of my skills</Typography>
                </Typist>
            </div>
            <PostList posts={posts} className={classes.list}/>


        </div>
        
    )
}
export default Home;