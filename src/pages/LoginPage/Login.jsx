import React, { useState } from 'react';
import "./login.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import userServices from '../../services/userServices';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [myUser, setMyUser] = useState("")

    const authUser = (e) => {

        e.preventDefault()

        const user = {
            email,
            password
        }

        userServices.authUser(user)
            .then(res => {
                setMyUser(res.data.user)
            })

    }


    return (
        <div className='Login'>
            <h2>Вы зашли как: {myUser.login}</h2>
            <div className="form_wrap">
                <form onSubmit={authUser}>
                    <h1 style={{marginBottom: "15px"}}>Вход</h1>
                    <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    type='email'
                    style={{marginBottom: "25px"}}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    type='password'
                    style={{paddingBottom: "20px"}}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <p>Нету аккаунта? <Link to="/register">Зарегистрируйся</Link></p>

                    <Button variant="contained" type='submit'>Войти</Button>

                </form>
            </div>
        </div>
    );
};

export default Login;