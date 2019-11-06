import React from 'react';
import PostList from "./PostList"
import { posts } from "./dummy-posts";
import { makeStyles } from '@material-ui/core/styles';
import './index.css';


const useStyles = makeStyles({
    home:{
        
        backgroundImage:'url("https://source.unsplash.com/random/1520x720")',
    }

})

const Home = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.home}>
            
            <PostList posts={posts} className={classes.list}/>


        </div>
        
    )
}
export default Home;