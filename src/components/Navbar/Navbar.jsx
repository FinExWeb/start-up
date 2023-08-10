import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

// Imports images
import Brend from './navbar-icons/Brend.svg'
import Home from './navbar-icons/home.svg'
import Contact from './navbar-icons/email.svg'
import Menu from './navbar-icons/menu.svg'
import BarsButton from './navbar-icons/Bars.svg'
// Imports images

function Navbar() {
    const [BarsButtons, setBarsButtons] = useState(false)
    const showNavbar = () => {
        setBarsButtons(prev => !prev)
    }
    return (
        <>
            <div className="navbar justify-content-between">
                <img src={Brend} alt="Brend" />

                <ul>
                    <Link to='/'>
                        <span>Asosiy</span>
                        <img src={Home} alt="Home" />
                    </Link>

                    <Link to='/menu'>
                        <span>Menu</span>
                        <img src={Menu} alt="Menu" />
                    </Link>

                    <Link to='/problems'>
                        <span>Shikoyat</span>
                        <img src={Contact} alt="Contact" />
                    </Link>
                </ul>

                <div className="forms">
                    <form>
                        <Link to='#'>
                            <input type="button" value='Kirish' />
                        </Link>
                        <Link to='#'>
                            <input id='button' type="button" value='Yaratish' />
                        </Link>
                    </form>
                </div>

            </div>

            <div className="navbar-media">
                <div className="header d-flex justify-content-around py-4">
                    <div className="logo">
                        <img src={Brend} alt="Brend" />
                    </div>
                    <div className='bars'>
                        <img src={BarsButton} onClick={showNavbar} style={{ width: '35px' }} alt="BarsButton" />
                    </div>
                </div>
            </div>
            {
                BarsButtons ? (
                    <div className="Nav-Body">
                        <button className='classclosebtn btn btn-primary' onClick={showNavbar}>
                            <i className='fas fa-close'></i>
                        </button>
                        <ul>
                            <Link to='/'>
                                <span>Asosiy</span>
                                <img src={Home} alt="Home" />
                            </Link>

                            <Link to='/'>
                                <span>Menu</span>
                                <img src={Menu} alt="Menu" />
                            </Link>

                            <Link to='/'>
                                <span>Shikoyat</span>
                                <img src={Contact} alt="Contact" />
                            </Link>
                        </ul>
                        <div className="forms">
                            <form>
                                <Link to='#'>
                                    <input type="button" value='Kirish' />
                                </Link>
                                <Link to='#'>
                                    <input id='button' type="button" value='Yaratish' />
                                </Link>
                            </form>
                        </div>
                    </div>
                ) : ''
            }
            <hr />
        </>
    )
}

export default Navbar