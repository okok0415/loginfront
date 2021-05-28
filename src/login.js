import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();


        await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        })
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/check" />
    }

    return (
        <form onSubmit={submit}>
            <h3> Please login </h3>

            <div className="form-group">
                <label>username</label>
                <input type="username" className="form-control" placeholder="username"
                    onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"
                    onChange={e => setPassword(e.target.value)} />

            </div>

            <button className="btn btn-primary btn-block">Sign up</button>

        </form>
    )
}

export default Login;