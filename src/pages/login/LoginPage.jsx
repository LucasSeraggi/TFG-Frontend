import './styles.css';
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
import { bootstrapTheme } from '../../layout/colorSchemes'
import Lock from '@mui/icons-material/Lock'

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
    
    <CssVarsProvider theme={bootstrapTheme}>
      <main>
        <Card
          sx={{
            width: 'auto',
            mx: 'auto', // margin left & right
            my: 10, // margin top & botom
            paddingTop: 0, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            // borderRadius: 'sm',
            borderColor: '#35344F',
            boxShadow: '5px 5px 5px black;',
            backgroundColor: '#636185'
          }}
        >
          <div>
            <Card sx={{
              width: 'auto',
              display: 'flex',
              paddingBottom: 0, // padding top & bottom
              flexDirection: 'row',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              gap: 6,
              mx: '-15px', // margin left & right
              boxShadow: '0px 0px',
              backgroundColor: '#738ADB',
            }} >
              <div style={{ flexDirection: 'column' }}>
                <Typography level="h4" component="h3" className="label2">
                  <b>Bem vindo!</b>
                </Typography>
                <Typography level="body2" className="label2">Faça login para continuar.</Typography>
                </div>

                <img
                  src="../../images/loginlogo.png"
                  loading="lazy"
                  style={{ width: 100}}
                  alt="User Login Figure"
                />
            </Card>
          </div>
          <FormControl>
            <FormLabel className="label">Email</FormLabel>
            <Input
              name="email"
              type="email"
              className="form"
              placeholder="exemplo@email.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel className="label">Senha</FormLabel>
            <Input
              name="password"
              type="password"
              className="form"
              placeholder="senha"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </FormControl>

          <FormControl sx={{ display: 'flex', px: 10 }}>
            <Typography startDecorator={<Lock />} style={{ color: '#ffffff'}}>Esqueceu sua senha?</Typography>
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */, color: '#ffffff' }} onClick={handleClick} >Login</Button>
          <Typography
            style={{ color: '#ffffff' }}
            endDecorator={<Link style={{ color: '#ffffff' }} href="/sign-up/school/">Cadastrar Escola</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Não tem uma conta?
          </Typography>
          <Typography
            style={{ color: '#ffffff' }}
            endDecorator={<Link style={{ color: '#ffffff' }} href="/sign-up/user/">Cadastrar Usuario</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          />
        </Card>
      </main>
    </CssVarsProvider>
  );
}