import './Users.scss';

import * as React from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import GreenStatusIcon from '../../assets/images/greenStatus-Icon.png';
import EditIcon from '../../assets/images/edit-icon.png';
import DeleteIcon from '../../assets/images/delete-icon.png';

const users = [
    { name: 'Paulo Junior Carvalho de Paiva', email: 'paulojr.eco@gmail.com', area: 'Estudante', statusIcon: { GreenStatusIcon }, status: 'Regular', class: 'ECO 2015' },
    { name: 'Lucas Fernandes', email: 'aluno@host.com', area: 'Estudante', statusIcon: { GreenStatusIcon }, status: 'Regular', class: 'ECO 2015' },
    { name: 'Jackson Galdino', email: 'email@email.com', area: 'Estudante', statusIcon: { GreenStatusIcon }, status: 'Regular', class: 'ECO 2015' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#6776ED',
        color: 'white',
        border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
        color: 'white',
        border: 0,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "#35344F",
    },
    '&:nth-of-type(even)': {
        backgroundColor: "#424162",
      },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function Users() {
    return (
        <>
            <div className='outside-box'>
                <div className='header-box'>
                    <div className='search-box'>
                        <Input
                            className='input-search'
                            placeholder='Nome...'
                        >
                        </Input>
                        <Button
                            className='confirm-button'
                            size='md'
                        >
                            Buscar
                        </Button>
                    </div>
                    <div className='add-box'>
                        <Button
                            className='add-resource-button'
                            size='md'
                            color='success'
                        >
                            Adicionar Usuário
                        </Button>
                    </div>
                </div>
                <div className='content-table'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell> Nome </StyledTableCell>
                                    <StyledTableCell> Email </StyledTableCell>
                                    <StyledTableCell> Atuação </StyledTableCell>
                                    <StyledTableCell> Status </StyledTableCell>
                                    <StyledTableCell> Turma </StyledTableCell>
                                    <StyledTableCell> Ação </StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <StyledTableRow key={user.name}>
                                        <StyledTableCell scope="row"> {user.name} </StyledTableCell>
                                        <StyledTableCell> {user.email} </StyledTableCell>
                                        <StyledTableCell> {user.area} </StyledTableCell>
                                        <StyledTableCell>
                                            <img
                                                className='icon'
                                                src={GreenStatusIcon}
                                                alt='Status Icon'
                                            />
                                            {user.status}
                                        </StyledTableCell>
                                        <StyledTableCell> {user.class} </StyledTableCell>
                                        <StyledTableCell>
                                            <img
                                                className='icon'
                                                src={EditIcon}
                                                alt='Edit Icon'
                                            />
                                            <img
                                                className='icon'
                                                src={DeleteIcon}
                                                alt='Delete Icon'
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
}