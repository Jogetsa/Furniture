import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="f-end">
                        <div className="contacts">
                            <div className="contact">
                                <h2>Свяжитесь с нами</h2>
                                <div className="phone"><a href='tel:+996554123321'>+996 (554) 123 321</a></div>
                                <div className='gmail'><a href="gmail:qwerty45037678@gmail.com">qwerty45037678@gmail.com</a></div>
                            </div>
                            <div className="follow">
                                <h2>Подпишитесь на нас</h2>
                                <a href='https://www.instagram.com/night__finding/'><img src="/images/HomePage/icons/instagram.png" alt="" /></a>
                                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src="/images/HomePage/icons/youtube.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="f-img">

                            <div className="i94">
                                <img src="./images/footer/image 94.png" alt="" />
                            </div>
                            <div className="i95">
                                <img src="./images/footer/image 95.png" alt="" />
                            </div>
                            <div className="i96">
                                <img src="./images/footer/image 96.png" alt="" />
                            </div>
                            <div className="i98">
                                <img src="./images/footer/image 98.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="rights">
                        <p>©2023 Marat. Все права защищены.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;