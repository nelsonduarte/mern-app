const User = require("../models/userModel")
const moongoose = require("mongoose")
const { default: mongoose } = require("mongoose")

// Mostrar todos os utilizadores
const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 })
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Mostrar um utilizador
const getUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Utilizador não encontrado" })
    }
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Criar um utilizador
const createUser = async (req, res) => {
  const { numero, nome, email, password } = req.body
  try {
    const user = await User.create({
      numero,
      nome,
      email,
      password,
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: err.message })
  }
}

// Apagar um utilizador
const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findOneAndDelete(_id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: "Não foi possivel apagar o Utilizador" })
    }
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Atualizar um utilizador
const updateUser = async (req, res) => {
  const { id } = req.params
  const { numero, nome, email, password } = req.body
  try {
    const user = await User.findByIdAndUpdate(_id)
    if (!user) {
      return res
        .status(404)
        .json({ message: "Não foi possivel atualizar o Utilizador" })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: err.message })
  }
}

// Exportar o módulo
module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
}
