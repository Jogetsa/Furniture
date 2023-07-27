import React, { useState } from 'react';
import "./register.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import userServices from '../../services/userServices';

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')

    const addUser = (e) => {

        e.preventDefault()

        const newUser = {
            email,
            password,
            login
        }
        userServices.addUser(newUser)
            .then(res => console.log(res.data))
            .catch(error => console.error(error.data))
    }

    return (
        <div className='Register'>
            <div className="form_wrap">
                <form onSubmit={addUser}>
                    <h1 style={{marginBottom: "15px"}}>Регистрация</h1>
                    <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    type='email'
                    style={{marginBottom: "25px"}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    type='password'
                    style={{paddingBottom: "20px"}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    style={{marginBottom: 20}}
                    value={login}
                    type='text'
                    onChange={(e) => setLogin(e.target.value)}
                />

                    <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>

                    <Button variant="contained" type='submit'>Зарегистрироваться</Button>

                </form>
            </div>
        </div>
    );
};

export default Register;