import {Link} from 'react-router-dom';
import "./Nav.css";

function Nav(){
    return(
        <>
<div className="main-nav">

<div className="logo"></div>        

        <div className="list-box">
            <ul className="nav-list">
                <li><Link to="/">OUR_MENU</Link></li>
                <li><Link to="/story">CREVIO_STORES</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </div>

<button id='dow' onClick={()=> window.open("https://play.google.com/store/apps/details?id=com.Dominos")}>DOWNLOAD</button>

</div>
        </>
    )
}
export default Nav;