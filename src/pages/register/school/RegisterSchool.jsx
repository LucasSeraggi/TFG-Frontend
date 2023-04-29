import './RegisterSchool.css';

import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import InputMask from 'react-input-mask';
import Register from '../../../services/register/RegisterApi';
import { bootstrapTheme } from '../../../layout/colorSchemes'
import { useNavigate } from "react-router-dom";

export default function RegisterSchool() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    cnpj: '',
    cep: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleClickRegister = async () => {
    if (loading) return;
    setLoading(true);
    const resp = await Register.registerNewSchool(form);
    console.log(resp)
    setLoading(false);
  };

  return (
    <CssVarsProvider theme={bootstrapTheme}>
      <main>
        <Card
          sx={{
            width: '70%',
            minWidth: '700px',
            height: '80%',
            mx: 'auto', // margin left & right
            my: 'auto', // margin top & botom
            py: 0, // padding top & bottom
            px: 0, // padding left & right
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 'sm',
            backgroundColor: '#35344F',
          }}
        >
          <img src="../../images/school-register.jpeg" alt="School Register Figure"/>

          <List sx={{ overflow: 'auto' }}>
            <div className="column-main">
              <h1 style={{ color: '#ffffff' }}>Registre sua escola</h1>
              <p style={{ color: '#ffffff' }}>Registre sua escola para que seus alunos e colaboradores possam se cadastrar e ter acesso ao melhor sistema escolar.</p>
              <FormControl>
                <FormLabel className="label" style={{ color: '#ffffff' }}>Nome da Escola</FormLabel>
                <Input
                  type="name"
                  placeholder="Escola Municipal de Itajubá"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </FormControl>

              <FormLabel style={{ color: '#ffffff' }} className="label">CNPJ</FormLabel>
              <InputMask mask="99.999.999/9999-99" maskPlaceholder=""
                onChange={(e) => setForm({ ...form, cnpj: e.target.value })}>
                {() => <Input type="text" placeholder="00.000.000/0000-00" />}
              </InputMask>


              <FormLabel style={{ color: '#ffffff' }} className="label">CEP</FormLabel>
              <InputMask mask="99999-999" maskPlaceholder=""
                onChange={(e) => setForm({ ...form, cep: e.target.value })} >
                {() => <Input type="text" placeholder="00000-000" />}
              </InputMask>

              <FormLabel style={{ color: '#ffffff' }} className="label">Email</FormLabel>
              <Input
                type="email"
                placeholder="escola@host.com"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <FormLabel style={{ color: '#ffffff' }} className="label" >Senha de acesso</FormLabel>
              <Input
                type="password"
                placeholder="Escola Municipal de Itajubá"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              <FormLabel style={{ color: '#ffffff' }} className="label">Confirme sua senha</FormLabel>
              <Input
                type="password"
                placeholder="Escola Municipal de Itajubá"

                onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })}
              />
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '10px'
                  }}
                >
                  <Button
                    id="btnBack"
                    className="button"
                    onClick={() => navigate('/')}
                    color='neutral'
                  >
                    Voltar
                  </Button>
                  <Button 
                    sx={{
                      backgroundColor: '#6776ED',
                      '&:hover': {
                        backgroundColor: '#495DFC',
                      },
                    }}
                    className="button" 
                    onClick={handleClickRegister}>
                      Cadastrar
                  </Button>
                </div>
                <div style={{ minHeight: '1px' }}></div>
            </div>
          </List>
        </Card>
      </main>
    </CssVarsProvider >
  );
}

