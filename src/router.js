import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterSchool from './pages/login/RegisterSchool';

export default function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up/school" element={<RegisterSchool />} />
      </Routes>
    </BrowserRouter>
  );
}
