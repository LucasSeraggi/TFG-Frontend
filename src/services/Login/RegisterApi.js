import Api from "../Api";

export default {
    async registerNewUser(newUser) {
      try {
        const response = await Api().post('user/register', newUser);
        const { token } = response.data;
  
        if (token) {
          localStorage.setItem('jwt', token);
          alert('Usuário cadastrado com sucesso!')
        }
      } catch (err) {
        console.log(err.message)
        alert('Erro ao cadastrar usuário!')
      }
    },
  };