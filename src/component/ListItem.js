import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const baseUrl = "http://localhost/api"

const ListItem = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get(baseUrl + '/getUser').then((res)=>{
            // console.log(res.data);
            setUsers(res.data.users);
        }).catch((err)=>{
            console.log(err);
        })
    })

    const handleDelete = (id)=>{
        axios.delete(baseUrl + '/user/' + id).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <>
            {users.map((user)=>(
                <div className="listname" key={user.id}>
                    <div className="user">
                        <h2>{ user.name}</h2>
                        <NavLink className="navlink1" to={`update/${user.id}`}>Update</NavLink>
                    </div>
                    <div className="user">
                        <p>{user.email}</p>
                        <p onClick={() => handleDelete(user.id)} className="navlink2">Delete</p>
                    </div>
                </div>  
            ))}
        </>
    )
}

export {ListItem}