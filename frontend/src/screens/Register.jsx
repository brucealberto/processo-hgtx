import { CustomInput } from '../components/CustomInput';
import { Link } from 'react-router-dom';
import './login.css';
export const Register = () => {

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} autoComplete='false'>
        <h2>Cadastrar</h2>
        <CustomInput type='text' label='Nome:' place='digite seu nome' />
        <CustomInput type='email' label='Email:' place='digite sua senha' />
        <CustomInput type='text' label='CPF:' place='digite seu cpf' />

      <button className='button' type='submit'>Cadastrar</button>
        <Link className='link' to="/">voltar para tela inicial</Link>
      </form>
    </div>
  );
};
