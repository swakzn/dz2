import { useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const MainPage =()=>{
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const getPost = async ()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(response.data)
        }
        getPost()

    },[])

    return(
        <div className='cards'>
            <h1>Main Page with Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h4>{post.id}</h4>
                    <hr/>
                    <Link to={`/posts/${post.id}/`}>{post.title}</Link>
                    <hr/>
                    <i>{post.body}</i>
                </div>
            ))}
        </div>
    )
}

export default MainPage