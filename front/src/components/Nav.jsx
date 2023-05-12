import { Link } from "react-router-dom";

import logo from '../img/logo.svg'
import icon1 from '../img/nav/icon1.svg'
import icon2 from '../img/nav/icon2.svg'
import icon3 from '../img/nav/icon3.svg'
import icon4 from '../img/nav/icon4.svg'

function Nav() {
    return (
        <div className="Nav">
            <div className="Nav-top">
                <ul>
                    <Link to='/'>
                        <li>
                            <img src={logo} alt="" />
                        </li>
                    </Link>
                    <Link to='/'>
                        <li>
                            Accueil
                        </li>
                    </Link>
                    <Link to='/'>
                        <li>
                            Profit
                        </li>
                    </Link>
                    <Link to='/'>
                        <li>
                            Réglage
                        </li>
                    </Link>
                    <Link to='/'>
                        <li>
                            Communauté
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="Nav-left">
                <ul>
                    <li>
                        <Link to='/'>
                            <img src={icon1} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <img src={icon2} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <img src={icon3} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <img src={icon4} alt="" />
                        </Link>
                    </li>
                </ul>
                <p className="Nav-left_copyright">
                Copiryght, SportSee 2020
                </p>
            </div>
        </div>
    );
}

export default Nav;