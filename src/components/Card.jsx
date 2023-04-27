import React, { useState } from 'react';
import icon1 from "./../img/icon1.png"

function Card(props) {
    let buyactive
    let cardstyle
    let cardcontainer

    const [loading, setLoading] = useState(true)
    const clickbtn = (event) => {
        const targetBtn = event.target
        if (targetBtn.tagName == "BUTTON") {
            targetBtn.className = "inObr"
            targetBtn.innerHTML = `<img class="icon" src=${icon1} disabled></img>`
        }
        setTimeout(() => {
            targetBtn.textContent = `✔ В корзине`
            targetBtn.className = "inBasket"
            targetBtn.setAttribute('disabled', "");
            sessionStorage.setItem(`${props.id}`, `buy`)
        }, 2000)
    }

    if (props.info.newPrice == "Продана на аукционе") {
        buyactive = "buyremove"
        cardstyle = "sell"
        cardcontainer = "sellcontainer"
    }
    else {
        buyactive = "buyactive"
        cardstyle = "cardstyle"
        cardcontainer = "cardcontainer"
    }

    function infoCard() {
        if (props.info.disabled == "no") {
            window.location = `/element/${props.info.title1}/
            ${props.info.title2}/${props.info.oldPrice}/
            ${props.info.newPrice}/${props.id}`
        }
    }

    function fn() {
        setTimeout(() => {
            for (let n = 0; n < 4; n++) {
                if (sessionStorage.getItem(`${n}`) == "buy" && document.getElementById(n)) {
                    document.getElementById(n).children[0].className = "inBasket"
                    document.getElementById(n).children[0].textContent = `✔ В корзине`
                }
            }
        }, 20)
    }
    fn()
    return (
        <div className={"card" + props.info.disabled} >
            <div>
                <img src={props.photo} onClick={infoCard} style={{ cursor: "pointer" }}></img>
                <div className='titletext' onClick={infoCard}>
                    <h2 className='cardh2'>{props.info.title1}</h2>
                    <h2 className='cardh2'>{props.info.title2}</h2>
                </div>
                <div className={cardcontainer}>
                    <div className={cardstyle}>
                        <h6 className='cardp oldPrice'>{props.info.oldPrice}</h6>
                        <h3 className='cardp newPrice'>{props.info.newPrice}</h3>
                    </div>
                    <div className={buyactive + "s"} id={props.id} style={{ width: 46.3 + "%", }}>
                        <button onClick={clickbtn} className={buyactive}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;