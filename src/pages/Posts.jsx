import React, {useEffect, useState} from "react";
import PostList from "../components/PostList";
import PostService from "../API/PostService";

function Posts() {
    const [posts, setPosts] = useState([])


    async function fetchPosts() {
        const posts = await PostService.getAll()
        setPosts(posts)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="App">
            <PostList posts={posts} title="Posts"/>
        </div>
    );
}

export default Posts;