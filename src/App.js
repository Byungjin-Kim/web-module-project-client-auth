import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Login = () => {
  return (<h2>Login page</h2>)
}

const Friendslist = () => {
  return (<h1>Friendslist</h1>)
}

const AddFriend = () => {
  return (<h1>Add friends</h1>)
}

function App() {
  return (
    <div className='App'>
      <header>
        <h2>Here is your Friends</h2>
      </header>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/friends' element={<Friendslist />} />
        <Route exact path='/friends/add' element={<AddFriend />} />
      </Routes>
    </div >
  );
}

export default App;
