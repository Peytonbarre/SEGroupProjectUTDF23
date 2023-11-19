import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Friends } from './pages/Friends';
import { UpdateProfile } from './pages/UpdateProfile';
import { Posts } from './pages/Posts';
import { Login } from './pages/Login';
import { SignUp } from './pages/Signup';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Classes } from './pages/Classes';
import { Profile } from './pages/Profile';
import { Class } from './pages/Class';
import { Messages } from './pages/Messages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/updateprofile" element={<UpdateProfile/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/class" element={<Class/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
