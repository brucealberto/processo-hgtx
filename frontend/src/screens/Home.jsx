import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react"
import { Link } from 'react-router-dom';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiaGd0eEBnbWFpbC5jb20iLCJpYXQiOjE2NjA3OTI4ODgsImV4cCI6MTY2MDg3OTI4OH0.oFLJTzbuNUUEntzrmT_43k_ymSq7S1ZpC1druYDFq7c"

export const Home = () => {
  const [users, setUsers] = useState([]); 
  useEffect(()=> {
    async function getUsers() {
     const { data } = await axios.get('http://localhost:3006/user', {headers: { Authorization: TOKEN}})
     setUsers(data);
    }
    getUsers()
  }, [])


  return (
    <div>
      <div>
           <table className='table'>
              <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user)=> (
                <tr>
                  <th>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.email}</th>
                  <th>{user.cpf}</th>
                </tr>
              ))}
            </tbody>
           </table>    
              <hr />
              <Link className='link' to="/"> voltar para tela inicial</Link>

      </div>
    </div>
  )
}