import { Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};
