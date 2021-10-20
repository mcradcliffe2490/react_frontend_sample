import './App.css';
import home from './images/Home.png';
import {Container, Row, Col} from "shards-react";
import React from 'react';
import useFetch from "./useFetch";
import {Link, Router} from "@reach/router";

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
export const Blogs = () => {
    const {data, loading, error} = useFetch("https://my-json-server.typicode.com/mcradcliffe2490/fake_blog_db/db")
    return(
        <header>
            <Container>
                <Row className="App-header">
                    BlogsForDays
                    <img className="home" src={home}/>
                </Row>
                <Row className="Blog">
                    {loading && <p>{loading}</p>}
                    {data && <nav><Link
                        to="/author-page"
                        state={data.authors[0].posts}
                        >
                        {data.authors[0].name}</Link></nav>}
                    <Container className = "post">
                        {data && <h1 className="title">{topPost(data.authors[0].posts).title}</h1>}
                        {data && <h1 className="preview">{topPost(data.authors[0].posts).preview}...(click author to see more)</h1>}
                    </Container>
                    {error && <p>{error}</p>}
                </Row>
                <Row className="Blog">
                    {loading && <p>{loading}</p>}
                    {data && <nav><Link
                        to="/author-page"
                        state={data.authors[1].posts}
                    >
                        {data.authors[1].name}</Link></nav>}
                    <Container className = "post">
                        {data && <h1 className="title">{topPost(data.authors[1].posts).title}</h1>}
                        {data && <h1 className="preview">{topPost(data.authors[1].posts).preview}...(click author to see more)</h1>}
                    </Container>
                    {error && <p>{error}</p>}
                </Row>
                <Row className="Blog">
                    {loading && <p>{loading}</p>}
                    {data && <nav><Link
                        to="/author-page"
                        state={data.authors[2].posts}
                    >
                        {data.authors[2].name}</Link></nav>}
                    <Container className = "post">
                        {data && <h1 className="title">{topPost(data.authors[2].posts).title}</h1>}
                        {data && <h1 className="preview">{topPost(data.authors[2].posts).preview}...(click author to see more)</h1>}
                    </Container>
                    {error && <p>{error}</p>}
                </Row>
                <Row className="Blog">
                    {loading && <p>{loading}</p>}
                    {data && <nav><Link
                        to="/author-page"
                        state={data.authors[3].posts}
                    >
                        {data.authors[3].name}</Link></nav>}
                    <Container className = "post">
                        {data && <h1 className="title">{topPost(data.authors[3].posts).title}</h1>}
                        {data && <h1 className="preview">{topPost(data.authors[3].posts).preview}...(click author to see more)</h1>}
                    </Container>
                    {error && <p>{error}</p>}
                </Row>
            </Container>
        </header>
    );
};
