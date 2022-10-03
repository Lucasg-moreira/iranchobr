import Pessoas from "../models/Pessoas.js";

export default class PessoasController {
  static async store(req, res) {
    const { no_pessoa, no_email, endereco, sexo, ic_ativo } = req.body;
    let data = {
      no_pessoa,
      no_email,
      endereco,
      ic_ativo,
      sexo,
    };
    try {
      const pessoa = await Pessoas.create(data);
      return res.json(pessoa);
    } catch (error) {
      console.log(error);
    }
  }

  static async show(req, res) {
    try {
      const pessoas = await Pessoas.findAll();
      return res.json(pessoas);
    } catch (error) {
      console.log(error);
    }
  }

  static async showOne(req, res) {
    const { id } = req.params;

    try {
      const pessoas = await Pessoas.findOne({
        where: {
          id: id,
        },
      });
      return res.json(pessoas);
    } catch (error) {
      console.log(error);
    }
  }

  static async remove(req, res) {
    const { id } = req.params;

    try {
      Pessoas.destroy({
        where: {
          id: id,
        },
      });
      return res.json({
        status: "ok",
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res) {
    const { id } = req.params;
    const { no_pessoa, no_email, endereco, ic_ativo, sexo } = req.body;
    const data = {
      no_pessoa,
      no_email,
      endereco,
      ic_ativo,
      sexo,
    };
    try {
      await Pessoas.update(data, {
        where: {
          id: id,
        },
      });
      return res.json({ status: "atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  }
}
