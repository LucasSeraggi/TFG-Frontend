import * as React from 'react';
import { CssVarsProvider /*, useColorScheme */ } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import LoginUser from '../../services/login/LoginApi'

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  });

  const handleClick = async () => {
    if (open) return;
    setOpen(true);
    const resp = await LoginUser.loginUser(user);

    console.log(resp)
    setOpen(false);
  };

  return (
    
    <CssVarsProvider>
      <main>
        <Card
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 10, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Bem vindo!</b>
            </Typography>
            <Typography level="body2">Faça login para continuar.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="exemplo@email.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="senha"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }} onClick={handleClick} >Login</Button>
          <Typography
            endDecorator={<Link href="/sign-up/school/">Cadastrar Escola</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Não tem uma conta?
          </Typography>
          <Typography
            endDecorator={<Link href="/sign-up/user/">Cadastrar Usuario</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          />
        </Card>
      </main>
    </CssVarsProvider>
  );
}