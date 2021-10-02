import React from "react";
import '../src/styles/App.css'
import {BrowserRouter, Link, Redirect, Route} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Posts from "./pages/Posts";

function App() {
    return (
        <BrowserRouter>
            <header className="header">
                <div className="container">
                    <div className="header_inner">
                        <div className="user">
                            <img className="user_avatar" src="/images/avatar_photo.png"/>
                            <div className="user_content">
                                <div className="user_name">Vladimir Dudin</div>
                                <div className="user_prof">Director of RV-tech</div>
                            </div>
                        </div>

                        <div className="nav">
                            <Link className="nav_link" to="/posts">Posts</Link>
                            <Link className="nav_link" to="/about">About me</Link>
                        </div>
                    </div>
                </div>
            </header>
            <Route path="/posts">
                <Posts/>
            </Route>
            <Route path="/about">
                <AboutMe/>
            </Route>
            <Redirect to="/posts"/>
        </BrowserRouter>
    )
}

export default App;
