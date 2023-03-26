import './RegisterUser.css';

import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import InputMask from 'react-input-mask';
import Register from '../../services/login/RegisterApi';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { bootstrapTheme } from '../../layout/colorSchemes'

const roles = [
  'Estudante',
  'Professor',
  'Inspetor',
  'Orientador',
  'Coordenador',
  'Administrador'
];

const instituitions = [
  'Escola Municipal',
  'Faculdade de Direito',
  'Unifei',
  'Escola Ensino Médio'
];

export default function App() {
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    cpf: '',
    rg: '',
    cep: '',
    email: '',
    registration: '',
    role: '',
    telephone: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleClickRegister = async () => {
    console.log(form)
    if (loading) return;
    setLoading(true);
    // const resp = await Register.registerNewUser(form);
    // console.log(resp)
    setLoading(false);
  };

  return (
    <CssVarsProvider theme={bootstrapTheme}>
      <main>
        <Card
          sx={{
            width: '70%',
            minWidth: '700px',
            height: 'auto',
            mx: 'auto', // margin left & right
            my: 'auto', // margin top & botom
            py: 0, // padding top & bottom
            px: 0, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            // borderRadius: 'sm',
          }}
        >
          <List sx={{ overflow: 'auto' }}>
            <div className="column-main">
              <h1>Registre um novo usuário</h1>

              <div 
                style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px' 
                }}
              >
                <FormControl 
                  sx={{ 
                    flex: 1 
                  }}
                >
                  <FormLabel className="label">Nome</FormLabel>
                  <Input
                    type="name"
                    placeholder="João da Silva"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel className="label">Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="aluno@host.com"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </FormControl>

                <FormControl
                  sx={{ 
                    flex: 0.5 
                  }}
                >
                <FormLabel className="label">Instituição/Escola</FormLabel>
                    <Select
                      id="userSchool"
                      placeholder="Escola Estadual"
                      onChange={(e) => console.log(e.target.value)}
                    >   
                      {instituitions.map((rol, index) => (
                        <Option
                          key={index}
                          value={rol}
                        >
                          {rol}
                        </Option>
                      ))}
                    </Select>
                </FormControl>

                <FormControl
                  sx={{ 
                    flex: 0.5 
                  }}
                >
                <FormLabel className="label">Cargo</FormLabel>
                    <Select
                      id="userRole"
                      placeholder="Estudante"
                      onChange={(e) => console.log(e.target.value)}
                    >   
                      {roles.map((rol, index) => (
                        <Option
                          key={index}
                          value={rol}
                        >
                          {rol}
                        </Option>
                      ))}
                    </Select>
                </FormControl>
              </div>

              <div 
                style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px' 
                }}
              >
                <FormControl sx={{ 
                    flex: 1 
                  }}>
                  <FormLabel className="label">Celular</FormLabel>
                  <InputMask mask="(99)99999-9999" maskPlaceholder=""
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })} >
                    {() => <Input type="text" placeholder="(00)00000-0000" />}
                  </InputMask>
                </FormControl>

                <FormControl sx={{ 
                    flex: 1 
                  }}>
                  <FormLabel className="label">CPF</FormLabel>
                  <InputMask mask="999.999.999-99" maskPlaceholder=""
                    onChange={(e) => setForm({ ...form, cpf: e.target.value })}>
                    {() => <Input type="text" placeholder="000.000.000-00" />}
                  </InputMask>
                </FormControl>

                <FormControl sx={{ 
                    flex: 1 
                  }}>
                  <FormLabel className="label">RG</FormLabel>
                  <InputMask mask="99.999.999-9" maskPlaceholder=""
                    onChange={(e) => setForm({ ...form, rg: e.target.value })}>
                    {() => <Input type="text" placeholder="00.000.000-0" />}
                  </InputMask>
                </FormControl>


                <FormControl sx={{ 
                    flex: 1 
                  }}>
                  <FormLabel className="label">CEP</FormLabel>
                  <InputMask mask="99999-999" maskPlaceholder=""
                    onChange={(e) => setForm({ ...form, cep: e.target.value })} >
                    {() => <Input type="text" placeholder="00000-000" />}
                  </InputMask>
                </FormControl>
              </div>

              <div 
                style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px' 
                }}
              >
                <FormControl
                  sx={{ 
                    flex: 1 
                  }}
                >
                  <FormLabel className="label" >Senha de acesso</FormLabel>
                  <Input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                </FormControl>

                <FormControl
                  sx={{ 
                    flex: 1 
                  }}
                >
                  <FormLabel className="label">Confirme sua senha</FormLabel>
                  <Input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })}
                  />
                </FormControl>
              </div>

              <Button className="button" onClick={handleClickRegister} >Cadastrar</Button>
              <div style={{ minHeight: '1px' }}></div>
            </div>
          </List>
        </Card>
      </main>
    </CssVarsProvider >
  );
}

