import './Footer.scss'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import UnifeiLogo from '../../assets/images/unifei-logo.png';
import GitHubLogo from '../../assets/images/gitHub-logo.png';
import LinkedInLogo from '../../assets/images/linkedIn-logo.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Footer() {
    return (
        <footer className='footer'>
            <Box className='footer-intro'>
                <Typography
                    className='footer-title'
                    sx={{
                        flex: 1
                    }}
                    component={'div'}
                >
                    TRABALHO FINAL DE GRADUAÇÃO
                </Typography>
                <Typography
                    sx={{
                        flex: 1
                    }}
                    component={'div'}
                >
                    Este trabalho foi feito com muito amor...
                </Typography>
            </Box>
            <Divider
                sx={{
                    backgroundColor: '#6F6E87',
                    marginLeft: '5%',                    
                    marginRight: '5%',
                }}
            />
            <Box className='footer-info'>
                <Box className='info-logo'>
                    <img
                        className='logo'
                        src={UnifeiLogo}
                        alt='Unifei Logo Figure'
                    />
                </Box>
                <Box className='info-item'>
                    <Typography
                        component={'div'}
                        className='info-item-title'>
                        Desenvolvedores
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText primary="Jackson Galdino" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="Lucas Seraggi" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="Paulo Paiva" />
                        </ListItem>
                    </List>
                </Box>
                <Box className='info-item'>
                    <Typography
                        component={'div'}
                        className='info-item-title'>
                        Contatos
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <a href="mailto:jacksongdas.jackson@gmail.com">
                                <ListItemText primary="jacksongdas.jackson@gmail.com" />
                            </a>
                        </ListItem>
                        <ListItem disablePadding>
                            <a href="mailto:lucas.seraggi@hotmail.com">
                                <ListItemText primary="lucas.seraggi@hotmail.com" />
                            </a>
                        </ListItem>
                        <ListItem disablePadding>
                            <a href="mailto:paulojr.eco@gmail.com">
                                <ListItemText primary="paulojr.eco@gmail.com" />
                            </a>
                        </ListItem>
                    </List>
                </Box>
                <Box className='info-item'>
                    <Typography
                        component={'div'}
                        className='info-item-title'>
                        Social
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50px',
                            padding: '10px',
                        }}
                    >
                        <List>
                            <ListItem sx={{ flex: 1, paddingBottom: '3px' }} disablePadding>
                                <a href='https://github.com/LucasSeraggi' target='_blank' rel="noreferrer">
                                    <img className='social-logo' src={GitHubLogo} alt='GitHub Logo' />
                                </a>
                            </ListItem>
                            <ListItem sx={{ flex: 1, paddingBottom: '3px' }} disablePadding>
                                <a href='https://github.com/JacksonECO' target='_blank' rel="noreferrer">
                                    <img className='social-logo' src={GitHubLogo} alt='GitHub Logo' />
                                </a>
                            </ListItem>
                            <ListItem sx={{ flex: 1 }} disablePadding>
                                <a href='https://github.com/paulojr-eco' target='_blank' rel="noreferrer">
                                    <img className='social-logo' src={GitHubLogo} alt='GitHub Logo' />
                                </a>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
            <Divider
                sx={{
                    backgroundColor: '#6F6E87',
                    marginLeft: '5%',
                    marginRight: '5%',
                }}
            />
            <Box className='footer-rights'>
                <Typography component={'div'}>
                    Todos os Direitos Reservados © {new Date().getFullYear()}
                </Typography>
            </Box>
        </footer>
    );
}

