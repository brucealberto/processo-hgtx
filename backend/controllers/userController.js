const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { name, email, cpf } = req.body;
    const result = await userService.create(name, email, cpf);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(409).json(error);
  }
};

const getAll = async (_req, res) => {
  try {
    const result = await userService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, cpf } = req.body;
    await userService.update(id, name, email, cpf);
    return res.status(200).json({ id, name, email, cpf });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  create,
  getAll,
  update,
};
