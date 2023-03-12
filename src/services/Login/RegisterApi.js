import Api from "../Api";

export default {
  async registerNewUser(newUser) {
    try {
      const response = await Api().post('/user/register', newUser);
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

  async registerNewSchool(newSchool) {
    try {
      const response = await Api().post('/school/register', newSchool);
      const { token } = response.data;

      if (token) {
        localStorage.setItem('jwt-school', token);
        alert('Escola cadastrado com sucesso!')
      }
    } catch (err) {
      console.log(err.message)
      alert('Erro ao cadastrar escola!')
    }
  },
};