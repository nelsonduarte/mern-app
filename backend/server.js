require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const port = process.env.PORT

const userRoutes = require("./routes/users")

// Middlware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Rotas
app.use("/api/users", userRoutes)

// Conectar a base de dados
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Iniciar servidor
    app.listen(process.env.PORT, () => {
      console.log(`Conectado a BD, servidor a correr na porta`, port)
    })
  })
  .catch((err) => console.log(err))
