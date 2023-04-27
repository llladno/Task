import React, { useState } from 'react';
import CardPlace from './CardPlace';

function Bar({ onChange }) {
    const [value, setValue] = useState(" ")
    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(value)
    }

    return (
        <div>
            <div className="bar">
                <div className="barcontainer">
                    <div>
                        <ul>
                            <li><a href='/'><h5>Каталог</h5></a></li>
                            <li><a><h5>Доставка</h5></a></li>
                            <li><a><h5>Оплата </h5></a></li>
                            <li><a><h5>Контакты</h5></a></li>
                            <li><a><h5>О компании </h5></a></li>
                        </ul>
                    </div>
                    <div className='search'>
                        <input className='barinput' placeholder='Поиск по названию картины'
                            onChange={handleChange}></input>
                        <button className="searchBtn">Найти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bar;