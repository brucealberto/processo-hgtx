const userModel = require('../models/usermodel');

const create = async (name, email, cpf) => {
  const result = await userModel.create(name, email, cpf);
  return result;
};

const getAll = async () => {
  const result = await userModel.getAll();
  return result;
};

module.exports = {
  create,
  getAll,
};
