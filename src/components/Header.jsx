import { useState } from "react";
import style from "../../styles/header.scss"
import { Link } from 'react-router-dom'
import clsx from "clsx";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <header className={style.headrer}>
            <div className={style.header__row}>
                <img src="icon.png" alt="" />
                <div className="header__menu">
                    <div className="iconMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className={clsx(style.menu__body, { [style.active] : menuOpen })}>
                        <ul>
                            <li><Link to='/' className={style.menu__link}>Головна</Link></li>
                            <li><Link to='/login' className={style.menu__link}>Вхід</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;