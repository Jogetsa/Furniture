import React, { useState, useEffect } from 'react';
import "./shop.css"
import shopServices from '../../services/shopServices';
import Card from '../../components/Card/Card';

const Shop = () => {

    const [shop, setShop] = useState([])

    useEffect(() => {
        shopServices.getData()
            .then(res => setShop(res.data))
    }, [])

    return (
        <>
            <section className='s-shop'>
                <div className="catalog">
                    <a>Sofas</a>
                    <a>Chairs</a>
                    <a>Beds</a>
                    <a>Tables</a>
                    <a>Dining furniture</a>
                </div>
            </section>
        </>
    );
};

export default Shop;