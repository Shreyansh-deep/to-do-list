import { useState } from 'react';
import App from './App';
import {Routes, Route } from "react-router-dom";
import LoginPage from "./loginpage";
import SignUp from "./SignUp"


export default function Todo() {
  const [signLetter, setSignLetter] = useState("")
  console.log(signLetter)
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="create" element={<App firstLetter={signLetter}/>} />
        <Route path="signup" element={<SignUp getSignLetter={(value) => setSignLetter(value)}/>} />
      </Routes>
    </div>
  );
}
