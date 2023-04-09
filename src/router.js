import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import RegisterSchool from './pages/register/school/RegisterSchool';
import RegisterUser from './pages/register/user/RegisterUser';

export default function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up/school" element={<RegisterSchool />} />
        <Route path="/sign-up/user" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  );
}
