import { Schema } from "mongoose";
import mongoose from "mongoose";

const PessoaModel = new Schema(
  {
    name: String,
    cor: String,
    idade: Number,
    ano: Number,
    altura: Number,
    peso: Number,
    datanascimento:Number
  },

  { timestamps: true }
);
export default mongoose.model("Pessoa", PessoaModel);