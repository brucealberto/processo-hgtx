import { CustomInput } from '../components/CustomInput';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
export const Login = () => {

  // async function handleSubmit(data) {
  //  let response = await axios.post('http://localhost:3006/user', data);
  //  console.log(response);
  // }

  return (
    <div className='login'>
      <form  autoComplete='false'>
        <h2>Login</h2>
        <CustomInput type='text' label='Nome:' place='digite seu nome' />
        <CustomInput type='email' label='Email:' place='digite seu email' />

      <button className='button' type='submit'>Entrar</button>
        <Link className='link' to="/register">criar uma conta</Link>
      </form>
    </div>
  );
};
