import Animais from "../models/Animais.js";

export default class AnimalController {
  static async index(req, res) {
    const { user_id } = req.params;

    try {
      const animais = await Animais.findAll({ where: { PessoaId: user_id } });
      return res.json(animais);
    } catch (error) {
      console.log(error);
    }
  }

  static async store(req, res) {
    const { user_id } = req.params;
    const data = {
      id_fazenda: req.body.id_fazenda,
      no_animal: req.body.no_animal,
      no_raca: req.body.no_raca,
      sexo: req.body.sexo,
      dt_nascimento: req.body.dt_nascimento,
      vr_peso: req.body.vr_peso,
      PessoaId: user_id,
    };

    try {
      const animal = await Animais.create(data);
      return res.json(animal);
    } catch (error) {
      console.log(error);
    }
  }
  static async remove(req, res) {
    const { id } = req.params;
    try {
      await Animais.destroy({
        where: {
          id: id,
        },
      });
      return res.json({ status: "Item removido" });
    } catch (err) {
      console.log(err);
    }
  }
}
