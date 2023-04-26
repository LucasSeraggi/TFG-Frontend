import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import RegisterSchool from './pages/register/school/RegisterSchool';
import RegisterUser from './pages/register/user/RegisterUser';
import Users from './pages/users/Users';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

export default function RouterPage() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up/school" element={<RegisterSchool />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/sign-up/user" element={<RegisterUser />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
