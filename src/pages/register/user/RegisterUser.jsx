import './RegisterUser.scss';

import React, { useState, useEffect } from "react";
import Card from '@mui/joy/Card';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import InputMask from 'react-input-mask';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import UserRegister from '../../../assets/images/register-user.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import ptBR from 'date-fns/locale/pt-BR';
import { CssVarsProvider } from '@mui/joy/styles';

import registerUser from '../../../services/register/RegisterApi';
import { listSchools, listClasses, listRoles, isNewEmail } from '../../../services/resources/ListResourcesApi';
import schema from './RegisterUserValidation';
import { bootstrapTheme } from '../../../layout/colorSchemes';

const App = () => {

  const [loadingCreation, setLoadingCreation] = useState(false);
  const [schools, setSchools] = useState();
  const [classes, setClasses] = useState();
  const [roles, setRoles] = useState();
  const [isSchoolSelected, setIsSchoolSelected] = useState(false);
  const [form, setForm] = useState({
    school_id: '',
    class_id: '',
    name: '',
    registration: '2018000000',
    birth_date: '',
    address: '',
    cpf: '',
    rg: '',
    cep: '',
    email: '',
    role: '',
    phone: '',
    password: ''
  });
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [dateValidation, setDateValidation] = useState();

  useEffect(() => {
    setTimeout(async () => {
      setSchools(await listSchools());
      setClasses(await listClasses());
      setRoles(await listRoles());
    }, 10000);
  }, []);

  const { handleSubmit, formState: { errors }, setValue, clearErrors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("school", form.school_id);
    setValue("class", form.class_id);
    setValue("name", form.name);
    setValue("birthDate", dateValidation);
    setValue("address", form.address);
    setValue("cpf", form.cpf);
    setValue("rg", form.rg);
    setValue("cep", form.cep);
    setValue("email", form.email);
    setValue("role", form.role);
    setValue("phone", form.phone);
    setValue("password", form.password);
    setValue("passwordConfirm", passwordConfirm);
  }, [form, dateValidation, passwordConfirm, setValue]);

  const onSubmit = async () => {
    console.log(form);
    if (loadingCreation) return;
    setLoadingCreation(true);
    if (await isNewEmail(form.email) === false) {
      setError('email', { message: 'E-mail já cadastrado' });
      setLoadingCreation(false);
      return;
    }
    await registerUser.newUser(form);
    setLoadingCreation(false);
  };

  return (
      <div>
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
                  <h1>Cadastrar um novo usuário</h1>
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
                    <FormLabel className="label">Nome*</FormLabel>
                    <Input
                      id="name"
                      type="name"
                      name="name"
                      placeholder="Nome"
                      className={errors.name ? ("formError") : ("form")}
                      onChange={(e) => {
                        clearErrors("name");
                        setForm({ ...form, name: e.target.value })
                      }}

                    />
                    {errors.name ? (
                      <div className='invalidInfo'>
                        {errors.name.message}
                      </div>
                    ) : ('')}

                  </FormControl>

                  <FormControl
                    sx={{
                      flex: 1
                    }}
                  >
                    <FormLabel className="label">Email*</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="aluno@host.com"
                      className={errors.email ? ("formError") : ("form")}
                      onChange={(e) => {
                        clearErrors("email");
                        setForm({ ...form, email: e.target.value })
                      }}
                    />
                    {errors.email ? (
                      <div className='invalidInfo'>
                        {errors.email.message}
                      </div>
                    ) : ('')}
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
                    <FormLabel className="label">Instituição*</FormLabel>
                    <Select
                      id="school"
                      placeholder="Selecione uma opção"
                      className={errors.school ? ("formError") : ("form")}
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
                        clearErrors("school");
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
                      /*<Box sx={{ display: 'flex', alignSelf: 'center' }}>
                        <CircularProgress size={20} sx={{ 'color': 'white' }} />
                      </Box>*/ ''
                      )}
                    </Select>
                    {errors.school ? (
                      <div className='invalidInfo'>
                        {errors.school.message}
                      </div>
                    ) : ('')}
                  </FormControl>

                  <FormControl
                    sx={{
                      flex: 1
                    }}
                  >
                    <FormLabel className="label">Cargo*</FormLabel>
                    <Select
                      id="userRole"
                      tabIndex="0"
                      placeholder="Selecione uma opção"
                      className={errors.role ? ("formError") : ("form")}
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
                        clearErrors("role");

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
                      /* <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                        <CircularProgress size={20} sx={{ 'color': 'white' }} />
                      </Box> */ ''
                      )
                      }
                    </Select>
                    {errors.role ? (
                      <div className='invalidInfo'>
                        {errors.role.message}
                      </div>
                    ) : ('')}
                  </FormControl>

                  <FormControl sx={{ flex: 1 }}>
                    <FormLabel className="label">
                      Turma*
                    </FormLabel>
                    <Select
                      id="schoolClass"
                      name='schoolClass'
                      placeholder={isSchoolSelected ? ("Selecione uma opção") : ("Selecione uma Instituição")}
                      className={errors.class ? ("formError") : ("form")}
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
                        if (newValue !== null) {
                          setForm({ ...form, class_id: classes.find(schoolClass => schoolClass.className === newValue).classId });
                          clearErrors("class");

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
                      /* <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                        <CircularProgress size={20} sx={{ 'color': 'white' }} />
                      </Box> */ ''
                      )}
                    </Select>
                    {errors.class ? (
                      <div className='invalidInfo'>
                        {errors.class.message}
                      </div>
                    ) : ('')}
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
                    <FormLabel className="label">Telefone*</FormLabel>
                    <InputMask mask="(99)99999-9999" maskPlaceholder=""
                      onChange={(e) => {
                        let phoneForm = e.target.value
                          .split('(').join('')
                          .split(')').join('')
                          .split('-').join('')
                          .split('_').join('');
                        setForm({ ...form, phone: phoneForm });
                        clearErrors("phone");
                      }} >
                      {() => <Input
                        id="cellphone"
                        type="text"
                        placeholder="(00)00000-0000"
                        className={errors.phone ? ("formError") : ("form")}

                      />}
                    </InputMask>
                    {errors.phone ? (
                      <div className='invalidInfo'>
                        {errors.phone.message}
                      </div>
                    ) : ('')}
                  </FormControl>

                  <FormControl
                    sx={{
                      flex: 1
                    }}
                  >
                    <FormLabel className="label">CPF*</FormLabel>
                    <InputMask mask="999.999.999-99" maskPlaceholder=""
                      onChange={(e) => {
                        let cpfForm = e.target.value
                          .split('.').join('')
                          .split('-').join('')
                          .split('_').join('');
                        setForm({ ...form, cpf: cpfForm })
                        clearErrors("cpf");
                      }}>
                      {() => <Input
                        id="cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        className={errors.cpf ? ("formError") : ("form")}
                      />}
                    </InputMask>
                    {errors.cpf ? (
                      <div className='invalidInfo'>
                        {errors.cpf.message}
                      </div>
                    ) : ('')}
                  </FormControl>

                  <FormControl
                    sx={{
                      flex: 1
                    }}
                  >
                    <FormLabel className="label">RG*</FormLabel>
                    <InputMask mask="**-**.***.***" maskPlaceholder=""
                      onChange={(e) => {
                        let rgForm = e.target.value
                          .split('.').join('')
                          .split('-').join('')
                          .split('_').join('');
                        setForm({ ...form, rg: rgForm });
                        clearErrors("rg");

                      }}>
                      {() => <Input
                        id="rg"
                        type="text"
                        placeholder="00-00.000.000"
                        className={errors.rg ? ("formError") : ("form")}
                      />}
                    </InputMask>
                    {errors.rg ? (
                      <div className='invalidInfo'>
                        {errors.rg.message}
                      </div>
                    ) : ('')}
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
                    <FormLabel className="label">Data de Nascimento*</FormLabel>
                    <LocalizationProvider
                      dateAdapter={AdapterDateFns}
                      adapterLocale={ptBR}>
                      <DemoContainer components={['DatePicker']}
                        sx={{
                          height: 40,
                          padding: 0,
                          overflow: 'hidden',
                          flex: 1,
                          '.MuiSvgIcon-root ': {
                            fill: "white !important",
                          },
                          "& > div": {
                            maxHeight: 40,
                            width: '100%'
                          },
                          "& > div > div": {
                            height: 40,
                          },
                          "& > div > div > fieldset": {
                            borderColor: `${errors.birthDate ? ('#f46a6a !important') : ('white !important')}`,
                          },
                          "& .MuiInputBase-root": {
                            boxShadow: `${errors.birthDate ? ('inset 0 0 0 1.3px #f46a6a !important') : ('inset 0 0 0 1.3px #white !important')}`,
                          },
                        }}>
                        <DatePicker className={errors.birthDate ? ("formError") : ("form")}
                          key={ptBR}
                          onChange={(date) => {
                            setForm({ ...form, birth_date: new Date(date).toISOString() });
                            setDateValidation(new Date(date));
                            clearErrors("birthDate");
                          }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    {errors.birthDate ? (
                      <div className='invalidInfo'>
                        {errors.birthDate.message}
                      </div>
                    ) : ('')}

                  </FormControl>

                  <FormControl
                    sx={{
                      flex: 1
                    }}
                  >
                    <FormLabel className="label">CEP*</FormLabel>
                    <InputMask mask="99999-999" maskPlaceholder=""
                      onChange={(e) => {
                        let cepForm = e.target.value
                          .split('-').join('')
                          .split('_').join('');
                        setForm({ ...form, cep: cepForm });
                        clearErrors("cep");
                      }} >
                      {() => <Input
                        id="cep"
                        type="text"
                        placeholder="00000-000"
                        className={errors.cep ? ("formError") : ("form")}

                      />}
                    </InputMask>
                    {errors.cep ? (
                      <div className='invalidInfo'>
                        {errors.cep.message}
                      </div>
                    ) : ('')}
                  </FormControl>

                  <FormControl
                    sx={{
                      flex: 1
                    }}
                  >
                    <FormLabel className="label">Endereço*</FormLabel>
                    <Input
                      id="address"
                      type="address"
                      placeholder="Endereço"
                      className={errors.address ? ("formError") : ("form")}
                      onChange={(e) => {
                        clearErrors("address");
                        setForm({ ...form, address: e.target.value })
                      }}

                    />
                    {errors.address ? (
                      <div className='invalidInfo'>
                        {errors.address.message}
                      </div>
                    ) : ('')}
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
                    <FormLabel className="label" >Senha de acesso*</FormLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Senha"
                      className={errors.password ? ("formError") : ("form")}
                      onChange={(e) => {
                        clearErrors("password");
                        setForm({ ...form, password: e.target.value })
                      }}

                    />
                    {errors.password ? (
                      <div className='invalidInfo'>
                        {errors.password.message}
                      </div>
                    ) : ('')}
                  </FormControl>

                  <FormControl
                    sx={{
                      flex: 1
                    }}
                  >
                    <FormLabel className="label">Confirme a senha*</FormLabel>
                    <Input
                      id="passwordConfirm"
                      type="password"
                      placeholder="Senha"
                      className={errors.passwordConfirm ? ("formError") : ("form")}
                      onChange={(e) => {
                        clearErrors("passwordConfirm");
                        setPasswordConfirm(e.target.value);
                      }}
                    />
                    {errors.passwordConfirm ? (
                      <div className='invalidInfo'>
                        {errors.passwordConfirm.message}
                      </div>
                    ) : ('')}
                  </FormControl>
                </div>
                <Button
                  id="btnConfirm"
                  className="button"
                  type="submit"
                  sx={{
                    backgroundColor: '#6776ED',
                    '&:hover': {
                      backgroundColor: '#495DFC',
                    },
                  }}
                  onClick={handleSubmit(onSubmit)}
                >
                  {loadingCreation ? (
                  /*<Box sx={{ display: 'flex' }}>
                    <CircularProgress size={20} sx={{ 'color': 'white' }} />
                  </Box>*/ ''
                  ) : (
                    'Criar Conta'
                  )}
                </Button>
              </div>
            </List>
          </Card>
        </main>
      </div>
  );
}

export default App;
