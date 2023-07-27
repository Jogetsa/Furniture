import React, { useState, useEffect } from 'react';
import "./shop.css"
import shopServices from '../../services/shopServices';
import Card from '../../components/Card/Card';

const Shop = () => {

    const [shop, setShop] = useState([]);

    useEffect(() => {
        shopServices.getData()
            .then(res => setShop(res.data))
    }, [])

    return (
        <>
            <section className='s-shop'>
                <div className="container">
                    <div className="catalog">
                        <a>Sofas & sectionals</a>
                        <a>TV & media</a>
                        <a>Dressers & storage drawers</a>
                        <a>Tables & desks</a>
                        <a>Dining furniture</a>
                    </div>
                    <div className="catalog-2">
                        <a>Beds</a>
                        <a>Chairs</a>
                        <a>Storage</a>
                        <a>Kids</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;