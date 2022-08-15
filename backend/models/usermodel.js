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
}

module.exports = {
  create,
  getAll,
};
