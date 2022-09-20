import express, { Request, Response } from "express";
import mongoose from "mongoose";
import router from "./database/routes";

const pessoa = express();

pessoa.use(express.json());
pessoa.use(router);

mongoose.connect("mongodb://localhost:27017/pessoas", () => {
  console.log("MonogoDB connection succeeded");
});
  

pessoa.listen(3003,()=>{
  console.log("o servidor está rodando na porta 3003")
});
