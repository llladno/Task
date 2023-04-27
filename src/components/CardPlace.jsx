import React from 'react';
import Card from './Card';
import photo1 from "./../img/1.png"
import photo2 from "./../img/2.png"
import photo3 from "./../img/3.png"
import photo4 from "./../img/4.png"

function CardPlace(props) {
    const photos = [photo1, photo2, photo3, photo4]
    const value = props.value
    const cardInfo = {
        0: {
            title1: "«Рождение Венеры»",
            title2: "Сандро Боттичелли",
            oldPrice: "2 000 000 $",
            newPrice: "1 000 000 $",
            disabled: "no",
            idphoto: "0"
        },
        1: {
            title1: "«Тайная вечеря»",
            title2: "Леонардо да Винчи",
            oldPrice: " ",
            newPrice: "3 000 000 $",
            disabled: "no",
            idphoto: "0"

        },
        2: {
            title1: "«Сотворение Адама»",
            title2: "Микеланджело",
            oldPrice: "6 000 000 $",
            newPrice: "5 000 000 $",
            disabled: "no",
            idphoto: "2"
        },
        3: {
            title1: "«Урок анатомии»",
            title2: "Рембрандт",
            oldPrice: " ",
            newPrice: "Продана на аукционе",
            disabled: "yes",
            idphoto: "3"
        }
    }

    let b = Object.keys(cardInfo).filter(el => {
        return cardInfo[el].title1.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className="place">
            <div className='container'>
                <h1>Картины эпохи Возрождения</h1>
                <div className='placeCardStyle'>
                    {Object.keys(b).map((x, index) => {
                        return <Card info={cardInfo[b[index]]} id={b[index]} photo={photos[b[index]]} />
                    })}

                </div>
            </div>
        </div>
    );
}

export default CardPlace;