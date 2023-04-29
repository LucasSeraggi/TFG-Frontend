import './NavBar.scss'

import * as React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';

import ReactLogo from '../../assets/images/react-logo.png';
import ProfileIcon from '../../assets/images/profile-icon.png'

const withouNavBarRoutes = ["/"];

export default function NavBar() {
    const { pathname } = useLocation();
    const [openMenuProfile, setOpenMenuProfile] = React.useState(false);

    const handleMenuToggle = (stateMenu) => {
        setOpenMenuProfile(stateMenu);
    }

    if (withouNavBarRoutes.some((item) => pathname === item)) return null;

    return (
        <>
            <header className='header'>
                <div className='box-logo'>
                    <Link to="/" className='logo'>
                        <img
                            className='school-logo'
                            src={ReactLogo}
                            alt="School Logo"
                        />
                        <Typography
                            className='school-name'
                            component={'div'}
                        >
                            Logo
                        </Typography>
                    </Link>
                </div>
                <div className='nav-items'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home"> Home </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link> Cronograma </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/course"> Cursos </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link> FAQ </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='box-profile'>
                    <Link
                        onClick={() => setOpenMenuProfile(true)}
                    >
                        <img
                            className='profile-icon'
                            src={ProfileIcon}
                            alt='Profile Icon'
                        />
                    </Link>
                </div>
            </header>
            <SideMenu isOpen={openMenuProfile} onUpdate={handleMenuToggle} />
        </>
    )
}
