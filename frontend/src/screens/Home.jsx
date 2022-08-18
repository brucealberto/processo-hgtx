import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react"

export const Home = () => {
  const [users, setUsers] = useState([]) 
  useEffect(()=> {
    async function getPosts() {
     const { data } = await axios.get('http://localhost:3006/user')
     setUsers(data);
    }
    getPosts()
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

      </div>
    </div>
  )
}