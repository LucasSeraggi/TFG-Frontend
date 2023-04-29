import api from "../Api";

const register = {
  async newUser(newUser) {
    try {
      const response = await api().post('/user/register', newUser, {headers: `Authorization: ${localStorage.getItem('jwt')}`});

      if (response.data.success === true) {
        alert('Usuário cadastrado com sucesso!')
      }
    } catch (err) {
      console.log(err.message)
      alert('Erro ao cadastrar usuário!')
    }
  },

  async newSchool(newSchool) {
    try {
      const response = await api().post('/school/register', newSchool);
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

export default register;
