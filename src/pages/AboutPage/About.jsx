import React from 'react';
import "./about.css"

const About = () => {
  return (
    <div className='About'>
      <section className='s1-a'>
        <div className="container">
          <div className="a1">
            <div className="des">
              <h1>Всё что нужно о нас знать</h1>
              <br />
              <p>Компания MARAT — это олицетворение потребности современного человека в простоте, комфорте, функциональности. Потребности в небольшом гармоничном жилом пространстве, где функциональность сочетается с простотой и минимализмом. </p>
              <br />
              <p>Философия нашей компании базируется на внешних чертах скандинавского стиля и стиля джапанди, а также рациональном подходе, высоком качестве и открытости.</p>
              <br />
              <p>Наша цель — помочь покупателю в ограниченных условиях создать такой интерьер, в который приятно возвращаться после напряженного дня и проводить время с семьей или друзьями.</p>
            </div>
            <div className="des-img">
              <img src="./images/AboutPage/des-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='s2-a'>
        <div className="container">
          <div className="a2">
            <div className="m-m">
              <div className="m-img">
                <img src="./images/AboutPage/money-img.jpg" alt="" />
              </div>
              <div className="m-des">
                <h1>На чём мы зарабатываем?</h1>
                <br />
                <p>MARAT — это востребованный формат в сегменте middle. Мы выпускаем качественный продукт по доступной цене, который позволяет конкурировать с масс-маркетом: как с местными производителями, так и c федеральными сетями.</p>
                <br />
                <p>Мы убеждены, что эта бизнес-модель сейчас актуальна. При этом цены на мягкую мебель Мебель способны удивить тех, кто уже не уверен, может ли сегодня качество быть доступным.</p>
              </div>
            </div>
            <div className="m-bottom">
              <div className="advantage">
                <h1>Идея</h1>
                <br />
                <p>Сила внешней привлекательности в простоте. Просто не так ли?</p>
              </div>
              <div className="advantage">
                <h1>Опыт</h1>
                <br />
                <p>В мебельном бизнесе мы уже более чем несколько дней. Так что можете не волноваться.</p>
              </div>
              <div className="advantage">
                <h1>Цена</h1>
                <br />
                <p>Предоставляем возможность приобрести качественный продукт при стесненности в средствах</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='s3-a'>
        <div className="container">
          <div className="website">
            <div className="logo">
              <img src="./images/LOGO.png" alt="" />
            </div>
            <div className="des-logo">
              <h1>О нашем сайте</h1>
              <br />
              <p>Сайты по продаже мебели являются популярным способом для потребителей приобрести необходимую мебель.
                Мы предлагаем широкий ассортимент товаров, различные стили и дизайны, а также удобные условия покупки.
                Клиенты, тоисть Вы, можете ознакомиться с фотографиями и описаниями товаров которые вас интересуют.
                <br />
                <br />
                В наших возможностях также обеспечить удобство покупки, всегда можно просмотреть товары и совершать покупки в любое время суток, не выходя из дома.
                Вы можете выбирать и оформлять заказы в удобном для себя темпе, без необходимости тратить время на посещение магазинов.
                <br />
                <br />
                Так же не забывайте, что можно выбрать доставку на дом или самовывоз из магазина, в зависимости от своих предпочтений.
                Это удобно для тех, кто не имеет возможности самостоятельно забрать крупные предметы мебели.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='s4-a'>
        <div className="container">
          <div className="logo">
            <h1>Чем мы лучше других?</h1>
          </div>

          <div className="table">
            <div className="product">
              <h2>Продукт // Product</h2>
              <br />
              <ul>
                <li>гарантия европейского качества</li>
                <li>оптимальные сроки поставки</li>
                <li>вся продукция упакована в трехслойный картон</li>
                <li>знания по продукту, собранные в Wi-Ki</li>
                <li>быстрый возврат и обмен товара</li>
              </ul>
            </div>
            <div className="batman">
              <img src="./images/AboutPage/batman.png" alt="" />
            </div>
          </div>

          <div className="table-2">
            <div className="price-img">
              <img src="./images/AboutPage/Uncle-Scrooge.png" alt="" />
            </div>
            <div className="price-des">
              <h2>Цена // Price</h2>
              <br />
              <ul>
                <li>маржинальность до 65%</li>
                <li>дополнительные скидки на выставочные образцы</li>
                <li>удобный прайс-лист с возможностью расчета цен продажи</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className='s5-a'>
        <div className="container">
          <div className="logo">
            <h1>Наши поставщики</h1>
          </div>
          <div className="supps">
            <div className="suppliers">
              <img src="./images/AboutPage/google.png" alt="" />
              <img src="./images/AboutPage/tesla.jpg" alt="" />
              <img src="./images/AboutPage/disney.png" alt="" />
              <img src="./images/AboutPage/nasa.png" alt="" />
              <img src="./images/AboutPage/samsung.webp" alt="" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;