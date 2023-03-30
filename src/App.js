import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/Friendslist';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoutes from './components/PrivateRoutes';


function App() {
  return (
    <div className='App'>
      <header>
        <h2>Friends Database</h2>
        <Link className='link' to="login">Login</Link>
        <Link className='link' to="friends">Friends List</Link>
        <Link className='link' to="friends/add">Add Friends</Link>
        <Link className='link' to="/logout">Logout</Link>
      </header>

      <Routes>
        <Route element={< PrivateRoutes />}>
          <Route exact path="/friends" element={<FriendsList />} />
          <Route exact path='/friends/add' element={<AddFriend />} />
        </Route>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
    </div >
  );
}

export default App;
