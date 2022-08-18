import { Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};
