import { useState } from "react";
import style from "../../styles/header.module.scss"
import { Link } from 'react-router-dom'
import clsx from "clsx";

const fakeUser={
    name: 'Bogdan',
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)
    const [isLogginedIn, setLogginedIn] = useState(true)

    return(
        <header className={style.header}>
            <div className={style.header__row}>
                <div className={style.header__title}>
                    <img src="icon.png" alt="" />
                    <h1>MY TO-DO LIST</h1>
                </div>
                <div className={style.header__menu}>
                    <div className={clsx(style.iconMenu, { [style.active]  : menuOpen})} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className={clsx(style.menu__body, { [style.active] : menuOpen })}>
                        {isLogginedIn ?(
                            <h2 className={style.authUser}>{fakeUser.name}</h2>
                        ):(
                            <h2></h2>
                        )}
                        <ul>
                            <li><Link to='/' className={style.menu__link}>MAIN</Link></li>
                            <li><Link to='/login' className={style.menu__link}>LOGIN</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;