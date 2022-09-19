import Pessoas from "../models/Pessoas.js";

export default class PessoasController {
  static async store(req, res) {
    const { no_pessoa, no_email, endereco, sexo, ic_ativo } = req.body;
    let obj = {
      no_pessoa,
      no_email,
      endereco,
      ic_ativo,
      sexo: sexo == "Male" ? "M" : "F"
    };
    const pessoa = await Pessoas.create(obj);
    return res.json(pessoa);
  }

  static async show(req, res) {
    const pessoas = await Pessoas.findAll();
    return res.json(pessoas);
  }

  static async showOne(req, res) {
    const { id } = req.params
    const pessoas = await Pessoas.findOne({where: {
      id: id
    }});
    return res.json(pessoas);
  }

  static async remove(req, res) {
    const id = req.params.id;
    Pessoas.destroy({
      where: {
        id: id,
      },
    });
    return res.json({
      status: "ok",
    });
  }
  static async update(req, res) {
    const { id, no_pessoa, no_email, endereco, ic_ativo, sexo } = req.body;
    const data = {
      id,
      no_pessoa,
      no_email,
      endereco,
      ic_ativo,
      sexo
    };
    await Pessoas.update(data, {
      where: {
        id: id,
      },
    });
    return res.json({ status: "atualizado com sucesso!" });
  }
}
