import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8080/api/register', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name, email, type, password
            })
        });
        setRedirect(true);
    }

    if (redirect)
    {
        return <Redirect to="/login"/>
    }
    

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Register</h1>

                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                    onChange={e => setName(e.target.value)}
                />
                <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Type"
                    onChange={e => setType(e.target.value)}
                />
                <label for="floatingInput">Type</label>
                </div>

                <div class="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register