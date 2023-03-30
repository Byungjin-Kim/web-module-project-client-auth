import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../axiosAuth/axiosAuth";


const AddFriend = () => {
    const navigate = useNavigate();
    const [addForm, setAddForm] = useState({
        name: '',
        email: "",
        age: ""
    });

    const handleChange = (e) => {
        setAddForm({
            ...addForm,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:9000/api/friends", addForm)
            .then(
                navigate('/friends')
            )
            .catch(err => {
                console.log(err);
            });

        setAddForm({ name: "", email: "", age: "" });
    }

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Friend Name:</label>
                    <input onChange={handleChange} name="name" id="name" type='text' />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input onChange={handleChange} name="age" id="age" type='text' />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} name="email" id="email" type='email' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;