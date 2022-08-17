import {Route, Routes} from 'react-router-dom';
import { Login } from './screens/Login';
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login />} />
    </Routes>
  ) 
}