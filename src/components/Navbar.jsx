import phone from "./../img/Vector2.png"
import address from "./../img/Vector.png"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarcontainer">
                <div style={{ background: "#ECEAEA" }}>
                    <ul style={{ background: "#ECEAEA" }}>
                        <li ><a><h5>Каталог</h5></a></li>
                        <li><a><h5>Доставка</h5></a></li>
                        <li><a><h5>Оплата </h5></a></li>
                        <li><a><h5>Контакты</h5></a></li>
                        <li><a><h5>О компании </h5></a></li>
                    </ul>
                </div>
                <div className='navbarInfo'>
                    <img src={phone} style={{ width: 14, height: 14, paddingTop: 2, paddingRight: 3 }}></img>
                    <h5 style={{ paddingRight: 54, marginLeft: 5 }} >+7 (812) 555-55-55</h5>
                    <img src={address} style={{ width: 12, height: 14, paddingRight: 9, paddingTop: 2 }}></img>
                    <h5>г. Санкт-Петербург, ул. Ефимова, 3</h5>
                </div>
            </div>
        </div>

    );
}

export default Navbar;