import './SideMenu.scss'

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Input from '@mui/joy/Input';
import { Link } from "react-router-dom";

import ProfileIcon from '../../assets/images/profile-icon.png';
import HomeIcon from '../../assets/images/home-icon.png';
import NotificationIcon from '../../assets/images/notification-icon.png';
import CoursesIcon from '../../assets/images/courses-icon.png';
import ProfileMiniIcon from '../../assets/images/profile-icon-mini.png';
import SettingsIcon from '../../assets/images/settings-icon.png';
import SupportIcon from '../../assets/images/support-icon.png';
import XIcon from '../../assets/images/x-icon.png';

export default function SideMenu(props) {

    const menuOptions = [
        { link: '#', text: 'Página Inicial', icon: HomeIcon, alt: 'Home Icon' },
        { link: '#', text: 'Notificações', icon: NotificationIcon, alt: 'Notifications Icon' },
        { link: '#', text: 'Meus Cursos', icon: CoursesIcon, alt: 'Courses Icon' },
        { link: '#', text: 'Meu Perfil', icon: ProfileMiniIcon, alt: 'Profile Icon' },
    ];
    const fixedOptions = [
        { link: '#', text: 'Configurações', icon: SettingsIcon, alt: 'Settings Icon' },
        { link: '#', text: 'Suporte', icon: SupportIcon, alt: 'Support Icon' },
    ];

    const [search, setSearch] = React.useState('');
    const filteredOptions = search.length > 0
        ? (menuOptions.filter(option => option.text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")
            .includes(search.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))))
        : ([]);
    return (
        <div
            className='box-menu'
            style={{ width: props.isOpen ? ('400px') : ('0px') }}
        >
            <div className='profile-info'>
                <img
                    src={ProfileIcon}
                    className='profile-icon'
                    alt='Profile Icon'
                />
                <Typography
                    className='person-name'
                    component={'div'}
                >
                    Nome Sobrenome
                </Typography>
                <Link
                    onClick={() => props.onUpdate(false)}
                >
                    <img
                        src={XIcon}
                        className='close-icon'
                        alt='Close Side Menu'
                    />
                </Link>
            </div>
            <div className='menu-input'>
                <Input
                    id="search"
                    type="search"
                    name="search"
                    placeholder="Buscar..."
                    className='input-search-menu'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className='menu-options'>
                {search.length > 0
                    ? (
                        <ul>
                            {filteredOptions.map((element) => (
                                <li>
                                    <Link
                                        to={element.link}
                                    >
                                        <img
                                            src={element.icon}
                                            alt={element.alt}
                                        />
                                        <Typography className='text-option'>
                                            {element.text}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )
                    : (
                        <ul>
                            {menuOptions.map((element) => (
                                <li
                                    key={element.alt}
                                >
                                    <Link
                                        to={element.link}
                                    >
                                        <img
                                            src={element.icon}
                                            alt={element.alt}
                                        />
                                        <Typography className='text-option'>
                                            {element.text}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
            <div className='fixed-options'>
                <ul>
                    {fixedOptions.map((element) => (
                        <li
                            key={element.alt}
                        >
                            <Link>
                                <img
                                    src={element.icon}
                                    alt={element.alt}
                                />
                                <Typography className='text-option'>
                                    {element.text}
                                </Typography>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}