import * as React from 'react';
import './CoursePage.scss';
import { CssVarsProvider } from '@mui/joy/styles';
import LoginUser from '../../services/login/LoginApi'
import { bootstrapTheme } from '../../layout/colorSchemes'
import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import CardOverflow from '@mui/joy/CardOverflow'
import AspectRatio from '@mui/joy/AspectRatio'

const homes = [
  { userAssigned: 'Fulano', name: 'Linguagem de Programação', group: 'A' },
  { userAssigned: 'Ciclano', name: 'Matemática', group: 'B' },
  { userAssigned: 'Deltrano', name: 'Geografia', group: 'A' },
  { userAssigned: 'Jose', name: 'Redação', group: 'C' },
  { userAssigned: 'Maria', name: 'Biologia', group: 'B11' },
  { userAssigned: 'Jackson', name: 'Química', group: 'A' },
  { userAssigned: 'Paulo', name: 'Física', group: '2' },
  { userAssigned: 'Lucas', name: 'Educação Física', group: 'A' },
]

export default function CoursePage() {
  const [open, setOpen] = React.useState(false)
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
      <Grid className="grid-main">
        <Typography level="h4" component="h3" className="label2">
          <b>Cursos</b>
        </Typography>
        <Grid className="grid-sub">
          <Grid 
            container
            direction="column"
            justifyContent="space-around"
          >
          {homes.map((value) => (
            <Grid key={value} sx={{ marginRight: '40px' }}>
              <Card
                variant="outlined"
                sx={{
                  height: 200,
                  width: 150,
                  backgroundColor: '#636185',
                  borderColor: '#35344F',
                  boxShadow: '5px 5px 5px black;',
                }}
              >
                <CardOverflow>
                  <AspectRatio variant="plain" ratio="1.1">
                    <img
                      src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                      srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardOverflow
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                  <Typography sx={{ color: 'white' }}>
                    <b style={{fontSize: '11px'}}>{ value.name }</b>
                  </Typography>
                  <Typography sx={{ color: 'white' }}>
                    Prof.: { value.userAssigned }
                  </Typography>
                  <Typography sx={{ color: 'white' }}>
                    Turma { value.group }
                  </Typography>
                  </Grid>
                </CardOverflow>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
      </main>
    </CssVarsProvider>
  );
}