import * as Yup from 'yup';

const schema = Yup.object({
    name: Yup.string()
        .required('Este campo é obrigatório')
        .max(255, 'Número máximo de caracteres excedido'),
    email: Yup.string()
        .required('Este campo é obrigatório')
        .email('O e-mail é inválido')
        .max(255, 'Número máximo de caracteres excedido'),
    school: Yup.string()
        .required('Este campo é obrigatório'),
    role: Yup.string()
        .required('Este campo é obrigatório'),
    class: Yup.string()
        .required('Este campo é obrigatório'),
    phone: Yup.string()
        .required('Este campo é obrigatório')
        .min(11, 'Formato inválido'),
    cpf: Yup.string()
        .required('Este campo é obrigatório')
        .min(11, 'Formato inválido'),
    rg: Yup.string()
        .required('Este campo é obrigatório')
        .min(10, 'Formato inválido'),
    birthDate: Yup.date()
        .required('Este campo é obrigatório')
        .max(new Date(), 'Data máxima ultrapassada'),      
    cep: Yup.string()
        .required('Este campo é obrigatório')
        .min(8, 'Formato inválido'),
    address: Yup.string()
        .required('Este campo é obrigatório'),
    password: Yup.string()
        .required('Este campo é obrigatório')
        .min(6, 'Deve ter pelo menos 6 caracteres')
        .max(40, 'Deve ter no máximo 40 caracteres'),
    passwordConfirm: Yup.string()
        .required('Este campo é obrigatório')
        .oneOf([Yup.ref('password'), null], 'As senhas são diferentes'),
});

export default schema;