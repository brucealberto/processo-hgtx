const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { name, email, cpf } = req.body;
    const result = await userService.create(name, email, cpf);

    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
  try {
    const result = await userService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
  getAll,
};
