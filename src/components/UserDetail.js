import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="container">
            <h2>{user.name}</h2>

            <h3>Basic Info :</h3>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>

            <h3>Address :</h3>
            <p><strong>Street:</strong> {user.address.street}</p>
            <p><strong>Suite:</strong> {user.address.suite}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Zipcode:</strong> {user.address.zipcode}</p>

            <h4>Geo Location :</h4>
            <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
            <p><strong>Longitude:</strong> {user.address.geo.lng}</p>

            <h3>Company :</h3>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Business:</strong> {user.company.bs}</p>

            <button onClick={() => window.history.back()}>
                ← Back
            </button>
        </div>
    );
};

export default UserDetail;