import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import image from "./image.avif"
import { Button } from "@mui/material";
import logo from "./logo.webp"
import { Link } from "react-router-dom";

const SignUp = ({getSignLetter}) => {
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [subValid, setSubValid] = useState(false)
    
   //const jsonData = JSON.parse(data);
   
    const userDataArray = {
        users : []
    }
    const appendUserDataArray = (mail, pass) => {
        userDataArray.users.push({mail: mail, pass: pass})
    }
    useEffect(() => {
        if(mail.length>0 && pass.length>0){
            setSubValid(true)
        }else{
                setSubValid(false)
        }
    },[mail,pass])

    const handleChange1 = (e) => {
        setMail(e.target.value)
    }
    const handleChange2 = (e) => {
        setPass(e.target.value)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <div>
            <nav className="signUpNav">
                <img src={logo} width="70px" />
                <h1>To-Do List</h1>
            </nav>
            <div className="signup">
                <div className="signupDetailWithPhoto">
                    <div>
                        <h1>Sign Up</h1>
                        <div className="signup-detail">
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                defaultValue="...@gamil.com"
                                onChange={handleChange1}
                                value={mail}
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange2}
                                    value={pass}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div> 
                        <Link to={subValid ? "/create" : null}>
                            <Button variant="contained" color="secondary" onClick={() => {
                                appendUserDataArray(mail,pass); 
                                getSignLetter(mail.charAt(0));
                            }}
                            > Submit
                            </Button>
                        </Link>
                    </div>
                    <img src = {image} width="400px" className="signUpBackground"/>
                </div>
            </div>
        </div>
    )
    console.log(mail, pass)
}
export default SignUp;