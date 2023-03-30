import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../axiosAuth/axiosAuth";


const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axiosWithAuth().post('http://localhost:9000/api/logout')
            .then(res => {
                localStorage.removeItem('token');
                navigate('/login');
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
        </div>
    )
}

export default Logout;