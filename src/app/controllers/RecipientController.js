import Recipient from '../models/Recipient';
import * as Yup from 'yup';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.string().required(),
    });


     if (!(await schema.isValid(req.body))) {
       return res.status(400).json({ error: 'Validation fails'});
     }

     const userExists =  Recipient.findOne({ where: { email:req.body.email } });

     return res.json(userExists)

    if (userExists) {
      return res.status(400).json({ error: 'Olhei lá e sinto dizer que o usuário procurado já existe'});
    }

    const {id, email, name, rua, numero, complemento, estado, cidade, cep} = await Recipient.create(req.body);
    return res.json({
      id,
      email,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep

    });
  }
}

export default new RecipientController();
