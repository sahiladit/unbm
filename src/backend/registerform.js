import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const RegisterForm = () => {
    const { user } = useUser();
    const [name, setName] = useState(user?.fullName || "");
    const [email, setEmail] = useState(user?.primaryEmailAddress?.emailAddress || "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/register", { name, email });
            alert(res.data.message);
        } catch (err) {
            alert("Error: " + err.response.data.error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegisterForm;
