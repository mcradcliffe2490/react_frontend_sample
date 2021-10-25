import './App.css';
import {Blogs} from "./Blogs.js";
import {Router} from "@reach/router";
import {AuthorPage} from "./AuthorPage.js";

export default function App() {
  return (
    <div className="App">
        <Router>
            <Blogs path="/"/>
            <AuthorPage path="/author-page"/>
        </Router>
    </div>
  );
}

