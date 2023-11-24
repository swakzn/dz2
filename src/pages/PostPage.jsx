import { useEffect, useState } from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import axios from "axios";

const PostPage = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getPost();
    }, [id]);


    return (
        <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button onClick={() => navigate('/')}>Назад</button>
            <Link to={`/posts/${post.id}/delete`}>Delete</Link>
        </div>
    );
};
export default PostPage;