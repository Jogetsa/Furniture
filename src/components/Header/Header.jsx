import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <Link to="/" className='logo'>Мебель</Link>
                <Link to="/">Домой</Link>
                <Link to="/shop">Магазин</Link>
                <Link to="/about">О нас</Link>
                <Link to="/login">Войти</Link>
            </header>
        </>
    );
};

export default Header;