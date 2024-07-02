import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import '../css/form.css';

const baseUrl = "http://localhost/api"

const UpdateUser = () => {
    const {id} = useParams();

    const [state,setState] = useState(false);
    const [message,setMessage] = useState('');

    const [formData,setFormData] = useState({
        email: "",
        name: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        axios.get(baseUrl + '/user/' + id).then((res)=>{
            // console.log(res.data);
            setFormData({
                email: res.data.user.email,
                name: res.data.user.name,
                password: res.data.user.password,
            })
        }).catch((err)=>{
            console.log(err);
        });
    })

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        await axios.post(baseUrl + '/user/update/' + id,formData).then((res)=>{
            console.log(res.data);
            setMessage(res.data.message);
            setState(res.data.status);
            setTimeout(() => {
                setMessage('');
            }, 1500);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className='container'>
                <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Email" value={formData.email} onChange={handleChange}></input>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange}></input>
                <input name="password" placeholder="Password" value={formData.password} onChange={handleChange}></input>
                <div className='buttonContainer'>
                    <NavLink className='button1' to="/users">Cancle</NavLink>
                    <button className='button2' type='submit'>Update</button>
                </div>
            </form>
            <div className='message' style={{background: state ? 'green' : 'red', display: message=='' ? 'none' : 'block'}}>
                <h3>{message}</h3>
            </div>
        </div>
       
    );
}

export {UpdateUser};