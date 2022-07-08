const express = require("express")
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController")

// Criar router express
const router = express.Router()

// Rota para mostrar todos os utilizadores
router.get("/", getUsers)

// Rota para mostrar um utilizador
router.get("/:id", getUser)

// Rota para criar um utilizador
router.post("/", createUser)

// Rota para apagar um utilizador
router.delete("/:id", deleteUser)

// Rota para atualizar um utilizador
router.patch("/:id", updateUser)

module.exports = router
