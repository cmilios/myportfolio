import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PostList from "./PostList"
import Post from "./Post";
import { posts } from "./dummy-posts";

ReactDOM.render(<PostList posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
