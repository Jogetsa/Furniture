import React from 'react';
import "./home.css"

const Home = () => {
    return (
        <div>
            <section className='Home'>

            </section>

            <section className='s2'>
                <div className="container">
                    <div className="icons">
                        <div className="icon">
                            <img src="/images/icons/gryzovik.png" alt="" />
                            <h5>Free Delivery</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon">
                            <img src="/images/icons/24.png" alt="" />
                            <h5>Support 24/7</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon">
                            <img src="/images/icons/shield.png" alt="" />
                            <h5>100% Authentic</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='s3'>
                <div className="container">
                    <div className="logo">
                        <h1>Inspiration Collection</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ut.</p>
                    </div>
                    <div className="media">
                        <img className='left-media' src="/images/media/left-media.png" alt="" />
                        <img className='center-media' src="/images/media/center-media.png" alt="" />
                        <img className='right-media' src="/images/media/right-media.png" alt="" />
                    </div>
                </div>
            </section>

            <section className='s4'>
                <div className="container">
                    <div className="left">
                        <h1>Beautify Your Space</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nobis commodi perferendis in, quae temporibus sit nam?
                            Exercitationem placeat aliquam possimus saepe eos magni.
                            Perferendis illo autem, reprehenderit ea laudantium deserunt.</p>
                        <button>LEARN MORE</button>
                    </div>
                    <div className="right">
                        <img src="/images/media/woman-right.png" alt="" />
                    </div>
                </div>
            </section>

            <section className='s5'>
                <div className="container">
                    <div className="logo">
                        <h1>Browse The Range</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, officia.</p>
                    </div>
                    <div className="range">
                        <img src="/images/media/Dining.png" alt="" />
                        <img src="/images/media/Living.png" alt="" />
                        <img src="/images/media/Bedroom.png" alt="" />
                    </div>
                    <div className="titles">
                        <h2>Dining</h2>
                        <h2>Living</h2>
                        <h2>Bedroom</h2>
                    </div>
                </div>
            </section>

            <section className='s6'>
                <div className="container">
                    <div className="logo">
                        <h1>How It Works</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="tutorial">
                        <img src="/images/media/negr-buying.png" alt="" />
                        <img src="/images/media/building.png" alt="" />
                        <img src="/images/media/room-right.png" alt="" />
                    </div>
                    <div className="description">
                        <div className="titles">
                            <div className="num"><a>1</a></div>

                            <h1>Purchase Securely</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="titles">
                            <div className="num"><a>2</a></div>
                            <h1>Ships From Warehouse</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="titles">
                            <div className="num"><a>3</a></div>
                            <h1>Style Your Room</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='s7'>
                <div className="logo">
                    <h1>Join Us!</h1>
                    <p>Register if you liked our website and service. <br />Already have an account? Login!</p>
                </div>
                <div className="login">
                    <button>Login</button>
                </div>
            </section>
        </div>
    );
};

export default Home;