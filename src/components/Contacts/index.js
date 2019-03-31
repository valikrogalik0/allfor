import React from 'react';

import './style.css'

const Contacts = props => {
    return (
        <div className='contacts-wrap'>
            <div className='contacts-info'>
                <h2>Контакти</h2>
                <p>Адреса: 14000, м. Чернігів, вул Магістратська 3</p>
                <hr/>
                <p>Телефон: +38(046)27 77 219</p>
                <p>Факс: ---</p>
                <hr/>
                <p>Графік роботи: пн-пт – 9.00-18.00</p>
                <p>Обідня перерва: 13.00 – 14.00</p>
            </div>
            <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.199585430767!2d31.297699702219315!3d51.491204832191904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d548ec4ceb6401%3A0xbc906189d4b5e188!2z0KfQtdGA0L3RltCz0ZbQstGB0YzQutC40Lkg0L7QsdC70LDRgdC90LjQuSDQvNC-0LvQvtC00ZbQttC90LjQuSDRhtC10L3RgtGA!5e0!3m2!1suk!2sua!4v1554064601320!5m2!1suk!2sua"
                width="400"
                height="300"
                frameborder="0"
                style={{border:0}}
                allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Contacts;