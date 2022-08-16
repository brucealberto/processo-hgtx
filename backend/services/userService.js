const userModel = require('../models/usermodel');

const create = async (name, email, cpf) => {
  const result = await userModel.create(name, email, cpf);
  return result;
};

const getAll = async () => {
  const result = await userModel.getAll();
  return result;
};

const update = async (name, email, cpf, id) => {
  const result = await userModel.update(name, email, cpf, id);
  return result;
};

module.exports = {
  create,
  getAll,
  update,
};
