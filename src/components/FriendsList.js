import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosAuth/axiosAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:9000/api/friends")
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>Friendslist</h2>
            <ul>
                {
                    friends.map(friend => {
                        return (<li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>)
                    })
                }
            </ul>
        </div>
    );
}

export default FriendsList;