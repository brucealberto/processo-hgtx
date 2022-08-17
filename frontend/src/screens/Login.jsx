import { CustomInput } from '../components/CustomInput';
import './login.css';
export const Login = () => {
  return (
    <div className='login'>

      <form autoComplete='false'>
      <h1>Login</h1>
        <CustomInput />
      </form>
    </div>
  );
};
