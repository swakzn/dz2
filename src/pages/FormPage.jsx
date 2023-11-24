import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const FormPage =()=>{
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: title ,
                body: body,
                userId: 1,})
            console.log( response.data)
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div>
            <h1>NEW POST</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br/>
                <div>
                    <label>Body:</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit">CREATE POST</button>
            </form>
        </div>
    );
};

export default FormPage;