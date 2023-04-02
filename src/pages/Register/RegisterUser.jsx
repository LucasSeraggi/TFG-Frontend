import './RegisterUser.scss';

import * as React from 'react';
import Card from '@mui/joy/Card';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import InputMask from 'react-input-mask';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import UserRegister from '../../images/register-user.png';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import register from '../../services/login/RegisterApi';
import { listSchools, listClasses, listRoles } from '../../services/login/ListResourcesApi';

const App = () => {

  const [loadingCreation, setLoadingCreation] = React.useState(false);
  const [schools, setSchools] = React.useState();
  const [classes, setClasses] = React.useState();
  const [roles, setRoles] = React.useState();
  const [isSchoolSelected, setIsSchoolSelected] = React.useState(false);
  const [form, setForm] = React.useState({
    school_id: '', //
    class_id: '', //
    name: '', //
    registration: '2018000000',
    birth_date: '', //
    address: '', //
    cpf: '', //
    rg: '', //
    cep: '', //
    email: '', //
    role: '', //
    phone: '', //
    password: ''
  });

  React.useEffect(() => {
    setTimeout(async () => {
      setSchools(await listSchools());
      setClasses(await listClasses());
      setRoles(await listRoles());
    }, 10000);
  }, []);

  const handleSubmit = async () => {
    console.log(form);
    if (loadingCreation) return;
    setLoadingCreation(true);
    await register.newUser(form);
    setLoadingCreation(false);
  };

  const handleValidateForm = Yup.object().shape ({
    name: Yup.string()
      .required('O nome é obrigatório')
      .max(255, 'Número máximo de caracteres excedido'),
    email: Yup.string()
      .required('O e-mail é obrigatório')
      .email('O e-mail é inválido')
      .max(255, '"Número máximo de caracteres excedido'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'Deve ter pelo menos 6 caracteres')
      .max(40, 'Deve ter no máximo 40 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirmação da senha é obrigatória')
      .oneOf([Yup.ref('password'), null], 'As senhas são diferentes'),
  });

  return (
    <main>
      <Card
        sx={{
          width: '50%',
          minWidth: '700px',
          height: 'auto',
          mx: 'auto', // margin left & right
          my: 'auto', // margin top & botom
          py: 0, // padding top & bottom
          px: 0, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          //borderRadius: 'sm',
          borderColor: '#35344F',
          boxShadow: '5px 5px 5px black;',
          backgroundColor: '#636185'
        }}
        variant="outlined"
      >

        <div>
          <Card sx={{
            width: 'auto',
            display: 'flex',
            paddingBottom: 0,
            flexDirection: 'row',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            boxShadow: '0px 0px',
            backgroundColor: '#738ADB',
          }} >
            <div
              style={{
                paddingLeft: 10,
                flex: 3,
              }}
            >
              <h1>Cadastrar uma nova conta</h1>
              <h3>Preencha os dados abaixo</h3>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: 'right',
              }}
            >
              <img className='user-register' alt='UserRegister' src={UserRegister}></img>
            </div>
          </Card>
        </div>
        <List sx={{ overflow: 'auto' }}>
          <div className="column-main">
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
                  id="name"
                  type="name"
                  placeholder="Nome"
                  className="form"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  
                />
              </FormControl>

              <FormControl
                sx={{
                  flex: 1
                }}
              >
                <FormLabel className="label">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="aluno@host.com"
                  className="form"
                  onChange={(e) => (
                    setForm({ ...form, email: e.target.value })
                  )}
                />
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
                <FormLabel className="label">Instituição</FormLabel>
                <Select
                  id="school"
                  placeholder="Selecione uma opção"
                  className="form"
                  slotProps={{
                    listbox: {
                      sx: {
                        background: '#8E8CAC',
                        overflow: 'auto',
                        maxHeight: 250,
                        boxShadow: '1px 1px black;',
                      },
                    },
                  }}
                  sx={{
                    color: "white",
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    },
                    '&.Joy-expanded': {
                      'boxShadow': 'inset 0 0 0 1px white',
                    },
                  }}
                  onChange={(e, newValue) => {
                    setForm({ ...form, class_id: '' });
                    setForm({ ...form, school_id: schools.find(school => school.schoolName === newValue).schoolId });
                    setIsSchoolSelected(true);
                  }}
                >
                  {schools ? (
                    schools.map((school, index) => (
                      <Option
                        key={index}
                        value={school.schoolName}
                        sx={{
                          fontFamily: 'Gelion Regular',
                          color: 'white',
                          '&.MuiOption-highlighted': {
                            'color': 'black !important',
                          }
                        }}
                      >
                        {school.schoolName}
                      </Option>
                    ))
                  ) : (
                    <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                      <CircularProgress size={20} sx={{ 'color': 'white' }} />
                    </Box>
                  )}
                </Select>
              </FormControl>

              <FormControl
                sx={{
                  flex: 1
                }}
              >
                <FormLabel className="label">Cargo</FormLabel>
                <Select
                  id="userRole"
                  tabIndex="0"
                  placeholder="Selecione uma opção"
                  className="form"
                  variant="outlined"
                  slotProps={{
                    listbox: {
                      sx: {
                        background: '#8E8CAC',
                        overflow: 'auto',
                        maxHeight: 250,
                        boxShadow: '1px 1px black;',
                      },
                    },
                  }}
                  sx={{
                    color: "white",
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    },
                    '&.Joy-expanded': {
                      'boxShadow': 'inset 0 0 0 1px white',
                    },
                  }}
                  onChange={(e, newValue) => {
                    setForm({ ...form, role: roles.find(role => role.roleName === newValue).roleName });
                  }}
                >
                  {roles ? (
                    roles.map((role, index) => (
                      <Option
                        key={index}
                        value={role.roleName}
                        sx={{
                          fontFamily: 'Gelion Regular',
                          color: 'white',
                          '&.MuiOption-highlighted': {
                            'color': 'black !important',
                          }
                        }}
                      >
                        {role.roleName}
                      </Option>
                    ))
                  ) : (
                    <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                      <CircularProgress size={20} sx={{ 'color': 'white' }} />
                    </Box>
                  )
                  }
                </Select>
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel className="label">
                  Classe
                </FormLabel>
                <Select
                  id="schoolClass"
                  name='schoolClass'
                  placeholder={isSchoolSelected?("Selecione uma opção"):("Selecione uma Instituição")}
                  className="form"
                  slotProps={{
                    listbox: {
                      sx: {
                        background: '#8E8CAC',
                        overflow: 'auto',
                        maxHeight: 250,
                        boxShadow: '1px 1px black;',
                      },
                    },
                  }}
                  sx={{
                    color: "white",
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    },
                    '&.Joy-expanded': {
                      'boxShadow': 'inset 0 0 0 1px white',
                    },
                  }}
                  onChange={(e, newValue) => {
                    if(newValue !== null) {
                      setForm({ ...form, class_id: classes.find(schoolClass => schoolClass.className === newValue).classId });
                    }                   
                  }}
                >
                  {classes ? (
                    classes.map((schoolClass, index) => (
                      isSchoolSelected ? (
                        schoolClass.schoolId === form.school_id ? (
                          <Option
                            key={index}
                            value={schoolClass.className}
                            sx={{
                              fontFamily: 'Gelion Regular',
                              color: 'white',
                              '&.MuiOption-highlighted': {
                                'color': 'black !important',
                              }
                            }}
                          >
                            {schoolClass.className}
                          </Option>
                        ) : (
                          ''
                        )
                      ) : (
                        ''
                      )
                    ))) : (
                    <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                      <CircularProgress size={20} sx={{ 'color': 'white' }} />
                    </Box>
                  )}
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
              <FormControl
                sx={{
                  flex: 1
                }}
              >
                <FormLabel className="label">Celular</FormLabel>
                <InputMask mask="(99)99999-9999" maskPlaceholder=""
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} >
                  {() => <Input id="cellphone" type="text" placeholder="(00)00000-0000" className="form" />}
                </InputMask>
              </FormControl>

              <FormControl
                sx={{
                  flex: 1
                }}
              >
                <FormLabel className="label">CPF</FormLabel>
                <InputMask mask="999.999.999-99" maskPlaceholder=""
                  onChange={(e) => setForm({ ...form, cpf: e.target.value })}>
                  {() => <Input id="cpf" type="text" placeholder="000.000.000-00" className="form" />}
                </InputMask>
              </FormControl>

              <FormControl
                sx={{
                  flex: 1
                }}
              >
                <FormLabel className="label">RG</FormLabel>
                <InputMask mask="**-**.***.***" maskPlaceholder=""
                  onChange={(e) => setForm({ ...form, rg: e.target.value })}>
                  {() => <Input id="rg" type="text" placeholder="00-00.000.000" className="form" />}
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
                <FormLabel className="label">Data de Nascimento</FormLabel>
                <InputMask mask="99/99/9999" maskPlaceholder=""
                  onChange={(e) => {
                    let day, month, year;
                    day = e.target.value.slice(0, 2);
                    month = e.target.value.slice(3, 5);
                    year = e.target.value.slice(6);
                    if (year.search('_') === -1) {
                      setForm({ ...form, birth_date: new Date(year, (month - 1), day).toISOString() });
                    }
                  }}>
                  {() => <Input id="birthDate" type="text" placeholder="DD/MM/AAAA" className="form" />}
                </InputMask>
              </FormControl>

              <FormControl
                sx={{
                  flex: 1
                }}
              >
                <FormLabel className="label">CEP</FormLabel>
                <InputMask mask="99999-999" maskPlaceholder=""
                  onChange={(e) => setForm({ ...form, cep: e.target.value })} >
                  {() => <Input id="cep" type="text" placeholder="00000-000" className="form" />}
                </InputMask>
              </FormControl>

              <FormControl
                sx={{
                  flex: 1
                }}
              >
                <FormLabel className="label">Endereço</FormLabel>
                <Input
                  id="address" 
                  type="address"
                  placeholder="Endereço"
                  className="form"
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
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
                  id="password"
                  type="password"
                  placeholder="Senha"
                  className="form"
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
                  id="passwordConfirm"
                  type="password"
                  placeholder="Senha"
                  className="form"
                //onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </FormControl>
            </div>
            <Button
              id="btnConfirm"
              className="button"
              onClick={(e) => handleSubmit()}
              sx={{
                backgroundColor: '#6776ED',
                '&:hover': {
                  backgroundColor: '#495DFC',
                },
              }}
            >
              {loadingCreation ? (
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress size={20} sx={{ 'color': 'white' }} />
                </Box>
              ) : (
                'Criar Conta'
              )}
            </Button>
          </div>
        </List>
      </Card>
    </main>
  );
}

export default App;
