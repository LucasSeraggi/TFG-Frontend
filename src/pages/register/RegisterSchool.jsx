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
import Register from '../../services/login/RegisterApi';

export default function App() {
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
    <CssVarsProvider>
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
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <img src="../../images/school-register.jpeg" />

          <List sx={{ overflow: 'auto' }}>
            <div className="column-main">
              <h1>Registre sua escola</h1>
              <p>Registre sua escola para que seus alunos e colaboradores possam se cadastrar e ter acesso ao melhor sistema escolar.</p>
              <FormControl>
                <FormLabel className="label">Nome da Escola</FormLabel>
                <Input
                  type="name"
                  placeholder="Escola Municipal de Itajubá"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </FormControl>

              <FormLabel className="label">CNPJ</FormLabel>
              <InputMask mask="99.999.999/9999-99" maskPlaceholder=""
                onChange={(e) => setForm({ ...form, cnpj: e.target.value })}>
                {() => <Input type="text" placeholder="00.000.000/0000-00" />}
              </InputMask>


              <FormLabel className="label">CEP</FormLabel>
              <InputMask mask="99999-999" maskPlaceholder=""
                onChange={(e) => setForm({ ...form, cep: e.target.value })} >
                {() => <Input type="text" placeholder="00000-000" />}
              </InputMask>

              <FormLabel className="label">Email</FormLabel>
              <Input
                type="email"
                placeholder="escola@host.com"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <FormLabel className="label" >Senha de acesso</FormLabel>
              <Input
                type="password"
                placeholder="Escola Municipal de Itajubá"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              <FormLabel className="label">Confirme sua senha</FormLabel>
              <Input
                type="password"
                placeholder="Escola Municipal de Itajubá"

                onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })}
              />

              <Button className="button" onClick={handleClickRegister} >Cadastrar</Button>
              <div style={{ minHeight: '1px' }}></div>
            </div>
          </List>
        </Card>
      </main>
    </CssVarsProvider >
  );
}

