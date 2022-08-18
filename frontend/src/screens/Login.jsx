import { CustomInput } from '../components/CustomInput';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { useState } from 'react';
export const Login = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(event, data) {
    event.preventDefault();
   let token = await axios.post('http://localhost:3006/user', data);
   localStorage.setItem(token);
   console.log(token);
  }
  
  return (
    <div className='login'>
      <form  autoComplete='false'>
        <h2>Login</h2>
        <CustomInput type='text' label='Nome:' place='digite seu nome' value={nome}  onChange={()=> setNome(nome)}/>
        <CustomInput type='email' label='Email:' place='digite seu email' value={email} onChange={()=> setEmail(email)}/>
         <button className='button' type='submit' onClick={(e)=> handleSubmit(e, {nome, email})}>Entrar</button>
        <Link className='link' to="/register">criar uma conta</Link>
      </form>
    </div>
  );
};
