const userModel = require('../models/usermodel');

const create = async (name, email, cpf) => {
  const result = await userModel.create(name, email, cpf);
  return result;
};

const getAll = async () => {
  const result = await userModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await userModel.getById(id);
  return result;
};

const update = async (name, email, cpf, id) => {
  // const userId = await getById(id);
  // if (userId.length === 0) throw new Error();
  const result = await userModel.update(name, email, cpf, id);
  return result;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
