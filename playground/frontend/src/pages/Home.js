import {Redirect} from 'react-router-dom';

const Home = (props) => {


    
    const triggerLogout = async () => {
        await fetch('http://localhost:8080/api/logout', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include'
        });
        props.setName("");
        return <Redirect to="/"/>
    }
    

    if(props.type === 'admin')
    {
        return (
            <div>
                This is the admin view!
                Hello, {props.name}!
                <button onClick={triggerLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            Hi, {props.name}!
            <button onClick={triggerLogout}>Logout</button>
        </div>
    );
}

export default Home