import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <h1>WeatherApp</h1>
                </div>
                <div className={style.input}>
                    <input type="text" name="find" id="1" placeholder="Find" />
                </div>
            </div>
        </div>
    )
}

export default Header