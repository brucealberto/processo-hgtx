import { CustomInput } from '../components/CustomInput';
import { Link } from 'react-router-dom';
import './login.css';
export const Login = () => {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} autoComplete='false'>
        <h2>Login</h2>
        <CustomInput type='text' label='Nome:' place='digite seu nome' />
        <CustomInput type='password' label='Senha:' place='digite sua senha' />

      <button className='button' type='submit'>Entrar</button>
        <Link className='link' to="/register">criar uma conta</Link>
      </form>
    </div>
  );
};
