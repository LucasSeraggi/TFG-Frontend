import Api from "../Api";

export default {
    async loginUser(user) {
      try {
       const response = await Api().post('/login', user);
       const { token } = response.data;

       localStorage.setItem('jwt', token);

       if (token) {
        alert('Bem vindo!')
       }
      } catch (err) {
        console.log(err.message)
        alert('Erro ao fazer o login do usuário!')
      }
    },
  };