import './App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import Nav from './components/nav'
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./pages/Home"
import React, {useEffect, useState} from 'react';

function App() {

  const [name, setName] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
      (
          async () => {
              const response = await fetch('http://localhost:8080/api/user', {
                  headers: {'Content-Type':'application/json'},
                  credentials:'include'
              });
              const content = await response.json();
              setName(content.name);
              setType(content.type);
          }
      )();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <main className='form-signin'>
          <Route path="/" exact component={() => <Home name={name} type={type} setName={setName}/>}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
