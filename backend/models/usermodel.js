const connection = require('./connection');

const create = async (name, email, cpf) => {
  const query = `INSERT INTO users (name, email, cpf) VALUES (?, ?,?)`;
  const [result] = await connection.execute(query, [name, email, cpf]);
  return {
    id: result.insertId,
    name,
    email,
    cpf,
  };
};

const getAll = async () => {
  const query = `SELECT * FROM users`;
  const [result] = await connection.execute(query);
  return result;
};

const getById = async (id) => {
  const query = `SELECT * FROM users WHERE id = ?`;
  const [result] = await connection.execute(query, [id]);
  return result;
};

const update = async (id, name, email, cpf) => {
  const query = `UPDATE users SET name = ?, email = ?, cpf = ? WHERE id = ?`;
  const [result] = await connection.execute(query, [name, email, cpf, id]);
  return result;
};

const deleteUser = async (id) => {
  const query = `DELETE FROM users WHERE id =?`;
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteUser,
};
