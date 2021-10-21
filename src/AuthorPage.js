import {Container, Row} from "shards-react";
import {Link, useLocation} from "@reach/router";
import './App.css';
import React from "react";
import home from "./images/Home.png";

const PostFormat = (props) => {
    const posts = props.posts;
    const postList = posts.map((post)=>{
        return(
            <div>
            <Container className = "post">
                <h1 className="title">{post.title}</h1>
                <h1 className="preview">{post.preview}...(see more)</h1>
            </Container>
            <Row className="separator"> </Row>
            </div>
        )
    })
    return(postList)
}

export const AuthorPage = () => {
    const location = useLocation();
    const posts = location.state?.userPost
    return(
        <div>
            <Row className="App-header">
                BlogsForDays
                <Link to="/">
                <img className="home" src={home}/>
                </Link>
            </Row>
            {posts && <PostFormat posts={posts}/>}
        </div>
    )
}
