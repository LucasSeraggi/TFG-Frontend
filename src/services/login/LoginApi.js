import Api from "../Api";

export default {
  async loginUser(user) {
    try {
      const response = await Api().post('/school/login', {
        email: user.email,
        password: user.password,
      });
      const { token } = response.data;

      localStorage.setItem('jwt', token);

      if (token) {
        alert('Bem vindo!')
      }
      return true;
    } catch (err) {
      console.log(err.message)
      alert('Erro ao fazer o login do usuário!')
      return false;
    }
  },
};