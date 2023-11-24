import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeletePostPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            navigate(`/`)
        } catch (error) {
            console.error(error)
        }
    };

    const handleCancel = () => {
        navigate(`/posts/${id}`)
    };

    return (
        <div>
            <h1>DELETE POST PAGE</h1>
            <button onClick={handleDelete}>YES</button>
            <button onClick={handleCancel}>NO</button>
        </div>
    );
};

export default DeletePostPage;