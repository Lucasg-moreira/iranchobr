import Animais from "../models/Animais.js";
import Pessoas from "../models/Pessoas.js";

export default class AnimalController {
  static async index(req, res) {
    const { user_id } = req.params;
    const animais = await Animais.findAll({ where: { PessoaId: user_id } });
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

  static async remove(req, res) {
    const { id } = req.params;
    await Animais.destroy({
      where: {
        id: id,
      },
    });
    return res.json({ status: "ok" });
  }
  static async update(req, res) {
    const { id, id_fazenda, no_animal, no_raca, sexo, dt_nascimento, vr_peso } =
      req.body;
    const animalData = {
      id,
      id_fazenda,
      no_animal,
      no_raca,
      sexo,
      dt_nascimento,
      vr_peso,
    };
    await Animais.update(animalData, {
      where: {
        id: id,
      },
    });
    return res.json({ status: "atualizado com sucesso!" });
  }
}

// "id": 2,
// 		"id_fazenda": "123123",
// 		"no_animal": "asdfa",
// 		"no_raca": "afsdasdf",
// 		"sexo": "Female",
// 		"dt_nascimento": "2022-09-06T00:00:00.000Z",
// 		"vr_peso": 12,
// 		"createdAt": "2022-09-18T22:22:40.000Z",
// 		"updatedAt": "2022-09-18T22:22:40.000Z",
// 		"PessoaId": 3
