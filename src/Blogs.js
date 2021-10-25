import './App.css';
import home from './images/Home.png';
import {Container, Row} from "shards-react";
import React from 'react';
import useFetch from "./useFetch";
import {Link} from "@reach/router";

const topPost = (posts) => {
    let highestViews = posts[0].views
    let highestPost = posts[0]
    posts.forEach((post) => {
        if (post.views > highestViews) {
            highestViews = post.views
            highestPost = post
        }
    })
    return highestPost
}

const AuthorFormat = (props) => {
    const authors = props.authors;
    const authorsList = authors.map((author) => {
        return(
            <Row className="Blog">
                <nav><Link
                    to="/author-page"
                    state={{userPost: author.posts}}
                >
                    {author.name}</Link></nav>
                <Container className = "post">
                    <h1 className="title">{topPost(author.posts).title}</h1>
                    <h1 className="preview">{topPost(author.posts).preview}...(click author to see more)</h1>
                </Container>
                <Row className="separator"> </Row>
            </Row>
        )
    })
    return(authorsList)


}
export const Blogs = () => {
    const {data, loading, error} = useFetch("https://my-json-server.typicode.com/mcradcliffe2490/fake_blog_db/db")
    return(
        <div>
            {loading && <p>{loading}</p>}
            {error && <p>{error}</p>}
            <Container>
                <Row className="App-header">
                    BlogsForDays
                    <Link to="/">
                        <img className="home" src={home}/>
                    </Link>
                </Row>
                {data && <AuthorFormat authors={data.authors}/>}
            </Container>

        </div>
    );
};

