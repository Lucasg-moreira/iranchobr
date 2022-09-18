import Animais from "../models/Animais.js";
import Pessoas from "../models/Pessoas.js";

export default class AnimalController {
  static async index(req, res) {
    const { user_id } = req.params;
    const animais = await Animais.findAll({where: { PessoaId: user_id }})
    return res.json(animais);
  }

  static async store(req, res) {
    const { user_id } = req.params;
    const obj = {
      id_fazenda: req.body.id_fazenda,
      no_animal: req.body.no_animal,
      no_raca: req.body.no_raca,
      sexo: req.body.sexo,
      dt_nascimento: req.body.dt_nascimento,
      vr_peso: req.body.vr_peso,
      PessoaId: user_id,
    };

    const animal = await Animais.create(obj);
    return res.json(animal);
  }
}
