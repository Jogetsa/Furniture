import React from 'react';
import "./home.css"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='HomePage'>
            <section className='Home'>
                <div className="container">
                    <div className="prologue">
                        <h1><span>Сделайте</span> ваш <span>комфорт</span> <br />нашим <span>счастьем</span></h1>
                        <p>Мебель играет важную роль в формировании образа вашего дома.</p>
                        <Link to="/shop">Закупиться</Link>
                    </div>
                </div>
            </section>

            <section className='s2-h'>
                <div className="container">
                    <div className="icons">
                        <div className="icon">
                            <img src="/images/HomePage/icons/gryzovik.png" alt="" />
                            <h5>Бесплатная доставка</h5>
                            <p>Доставка по всему городу</p>
                        </div>
                        <div className="icon">
                            <img src="/images/HomePage/icons/24.png" alt="" />
                            <h5>Поддержка 24/7</h5>
                            <p>Всегда онлайн и готовы помочь</p>
                        </div>
                        <div className="icon">
                            <img src="/images/HomePage/icons/shield.png" alt="" />
                            <h5>100% Достоверно</h5>
                            <p>Длительный срок службы и гарантия</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='s3-h'>
                <div className="container">
                    <div className="logo">
                        <h1>Коллекция вдохновения</h1>
                        <p>Попробуйте не вдохновиться.</p>
                    </div>
                    <div className="media">
                        <img className='left-media' src="/images/HomePage/media/vdoh1.png" alt="" />
                        <img className='center-media' src="/images/HomePage/media/vdoh2.png" alt="" />
                        <img className='right-media' src="/images/HomePage/media/vdoh3.png" alt="" />
                    </div>
                </div>
            </section>

            <section className='s4-h'>
                <div className="container">
                    <div className="left">
                        <h1>Украсьте свое пространство</h1>
                        <p>Украшение дома - это не только способ сделать его более привлекательным визуально, но и создать атмосферу, которая отражает нашу индивидуальность и влияет на наше настроение и эмоциональное состояние.</p>
                        <Link to="/shop">Магазин</Link>
                    </div>
                    <div className="right">
                        <img src="/images/HomePage/media/interier.png" alt="" />
                    </div>
                </div>
            </section>

            <section className='s5-h'>
                <div className="container">
                    <div className="logo">
                        <h1>Просмотрите диапазон</h1>
                        <p>Интерьер на ваш вкус для вашего жилья.</p>
                    </div>
                    <div className="range">
                        <img src="/images/HomePage/media/kitchen.png" alt="" />
                        <img src="/images/HomePage/media/living.png" alt="" />
                        <img src="/images/HomePage/media/bedroom.png" alt="" />
                    </div>
                    <div className="titles">
                        <h2>Кухня</h2>
                        <h2>Гостиная</h2>
                        <h2>Спальня</h2>
                    </div>
                </div>
            </section>

            <section className='s6-h'>
                <div className="container">
                    <div className="logo">
                        <h1>Как это работает</h1>
                        <p>Не нужно много времени и нервов чтобы просто купить мебель.</p>
                    </div>
                    <div className="tutorial">
                        <img src="/images/HomePage/media/negr-buying.png" alt="" />
                        <img src="/images/HomePage/media/building.png" alt="" />
                        <img src="/images/HomePage/media/style.png" alt="" />
                    </div>
                    <div className="description">
                        <div className="titles">
                            <div className="num"><a>1</a></div>
                            <h1>Покупайте безопасно</h1>
                            <p>Мы используем популярные способы оплаты.</p>
                        </div>
                        <div className="titles">
                            <div className="num"><a>2</a></div>
                            <h1>Доставка со склада</h1>
                            <p>Ваш товар прибудет к вам прямо со склада.</p>
                        </div>
                        <div className="titles">
                            <div className="num"><a>3</a></div>
                            <h1>Обустраивайте свою комнату</h1>
                            <p>Просто обустраивайте свою комнату.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='s7-h'>
                <div className="logo">
                    <h1>Присоединяйтесь к нам!</h1>
                    <p>Зарегистрируйтесь, если вам понравился наш сайт и сервис. <br />У вас уже есть аккаунт? Авторизуйтесь!</p>
                </div>
                <div className="login">
                    <Link to="/login">Войти</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;