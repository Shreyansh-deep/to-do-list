import React, { useState } from "react"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logo from "./logo.webp"
import background from "./background.jpg"
import { Link } from "react-router-dom";

const LoginPage = () => {
 
    return(
        <div className="main-page">
            <div className="app-bar">
                <div className="logo">
                    <img src={logo} width="40px" />
                    <h2>To-Do List</h2>
                </div>
                <Stack spacing={2} direction="row">
                    <Link to="/SignUp">
                        <Button variant="contained" color="secondary">Create an account</Button>
                    </Link>
                    <Button variant="outlined" color="secondary">Sign in</Button>
                </Stack>
            </div>
            <section className="hero">
                <div>
                    <h1 >Seize the Day. Tackle the List.</h1>
                    <h3>Become focused, organized, and calm with To do List.</h3>
                    <Link to="/SignUp" >
                        <Button variant="contained" color="secondary" >Start For Free</Button>
                    </Link>
                </div>
                <img src={background} className="background"></img>
            </section>
        </div>
        
    )
}

export default LoginPage;