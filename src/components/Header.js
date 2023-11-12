import { LOGO_URL } from "../utils/constants";
const Header = () =>{
return (
    <div className="header">
        <div className="logo-container">
            <img alt="logo" className="logo" src= {LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>

                <li>Offers</li>
                <li>Help</li>
                <li>Sign in</li>
                <li>Cart</li>

            </ul>
        </div>
    </div>
)
}

export default Header;