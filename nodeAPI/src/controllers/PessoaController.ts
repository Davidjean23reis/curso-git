import { Request, Response } from "express";
import PessoaModel from "../database/PessoaModel";

const PessoaController = {
  async index(req: Request, res: Response): Promise<Response> {
    let pessoa = await PessoaModel.find();
    return res.json(pessoa);
  },

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    let pessoa = await PessoaModel.findById(id);
    return res.json(pessoa);
  },
  async create(req: Request, res: Response): Promise<Response> {
    const { name, cor, idade, ano, altura, peso, datanascimento } = req.params;
    let pessoa = await PessoaModel.create(req.body);
    return res.json(pessoa);
  },
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, cor, idade, ano, altura, peso, datanascimento } = req.params;
    let pessoa = await PessoaModel.findByIdAndUpdate(id, {
      name: name,
      cor: cor,
      idade: idade,
      ano: ano,
      altura: altura,
      peso: peso,
      datanascimento: datanascimento,
    });

    return res.json(pessoa);
  },
  async delete(req: Request, res: Response): Promise<Response> {
    const { name, cor, idade, ano, altura, peso, datanascimento } = req.params;
    const{id} = req.params
    let pessoa = await PessoaModel.findByIdAndDelete(id)
    return res.json(pessoa);
  },
};
export default PessoaController;
