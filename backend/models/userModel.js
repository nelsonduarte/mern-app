const mongoose = require("mongoose")

const schema = mongoose.Schema

const userSchema = new schema(
  {
    numero: {
      type: String,
      required: true,
      unique: true,
    },
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("userModel", userSchema)
