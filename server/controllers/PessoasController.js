import Pessoas from "../models/Pessoas.js";

export default class PessoasController {
  static async store(req, res) {
    const { no_pessoa, no_email, endereco, sexo, ic_ativo } = req.body;
    let obj = {
      no_pessoa,
      no_email,
      endereco,
      sexo,
      ic_ativo,
    };
    const pessoa = await Pessoas.create(obj);
    return res.json(pessoa);
  }

  static async show(req, res) {
    const pessoas = await Pessoas.findAll();
    return res.json(pessoas);
  }
}
