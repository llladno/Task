import { useParams } from "react-router-dom";
import Bar from "./Bar";
import Navbar from "./Navbar";
import photo1 from "./../img/1.png"
import photo2 from "./../img/2.png"
import photo3 from "./../img/3.png"
import photo4 from "./../img/4.png"
import icon1 from "./../img/icon1.png"

function CardInfo() {
    const { title1, title2, oldPrice, newPrice, id } = useParams()
    let photo

    if (id == 0) photo = photo1
    else if (id == 1) photo = photo2
    else if (id == 2) photo = photo3
    else if (id == 3) photo = photo4
    setTimeout(() => {
        for (let n = 0; n < 4; n++) {
            if (sessionStorage.getItem(n) == "buy") {
                document.getElementById(n).className = "inBasket"
                document.getElementById(n).textContent = `✔ В корзине`
            }
        }
    }, 20)

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
        }, 2000)
    }

    return (
        <div>
            <Bar></Bar>
            <div>
                <div className="info">
                    <img className="photoCard" src={photo}></img>
                    <div style={{ paddingLeft: 50, paddingTop: 50 }}>
                        <h1>{title1}
                        </h1>
                        <h1>
                            Художник:<br></br> {title2}
                        </h1>
                        <div style={{ display: "flex" }}>
                            <div>
                                <h5 style={{
                                    fontSize: 30,
                                    textDecorationLine: "line-through"
                                }}>{oldPrice}</h5>
                                <h3 style={{ fontSize: 40 }}>{newPrice}</h3>
                            </div>
                            <div className="buyactiveCard">
                                <button onClick={clickbtn} className="buyactive" id={id}>Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: 400, paddingRight: 400, paddingTop: 35 }}>
                    <p align="justify">
                        Описание: {title1} - это картина, которая привлекает внимание своей атмосферой
                        , написанная художником {title2}.
                        Приятная палитра и тонкий контраст добавляют глубину и объемность картины.
                        Картина выполнена маслом на холсте, что создает ощущение реальности и долговечности
                        произведения. {title1} будет прекрасным дополнением к интерьеру любого дома,
                        придавая ему загадочность и магию.
                    </p>
                </div>
            </div>
            <Navbar></Navbar>
        </div>

    );
}

export default CardInfo;