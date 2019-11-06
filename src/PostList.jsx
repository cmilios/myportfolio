import React from 'react';
import Post from "./Post"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    list: {
        display: "inline-flex",
        flexWrap: "wrap",
        flexGrow: 1,
        width: "100%",
        bottom:0,
        position: "absolute",
        "align-items": "flex-end"
        
    },
    
});

const PostList = ({posts}) =>{
    const classes = useStyles();
    const postComponent = posts.map(x=>{
        if(x.id<4){
            x.title = x.title[0].toUpperCase()+ x.title.substring(1).toLowerCase()
            return <Post title={x.title} body={x.body} userId={x.userId} id={x.id} key = {x.id} />;
        }
    })
    return(
        <div className={classes.list}>
            {postComponent}
        </div>
    )

}
export default PostList