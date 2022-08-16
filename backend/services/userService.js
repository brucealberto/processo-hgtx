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

const update = async (id, name, email, cpf) => {
  const userId = await getById(id);
  if (!userId.length) throw new Error('user not found');
  const result = await userModel.update(id, name, email, cpf);
  return result;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
