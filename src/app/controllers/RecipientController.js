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
      cep: Yup.string().required()
    });


     if (!(await schema.isValid(req.body))) {
       return res.status(400).json({ error: 'Validation fails'});
     }

     const userExists = await Recipient.findOne({ where: { email:req.body.email } });


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

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().required(),
      rua: Yup.string(),
      numero: Yup.string(),
      complemento: Yup.string(),
      estado: Yup.string(),
      cidade: Yup.string(),
      cep: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails'});

    }

    const { email } = req.body;

    const recipient = await Recipient.findOne({ where: { email: email } });

    if(!recipient) {
      return res.status(400).json({ error: 'Usuário não existe'});
    }

    if(email == recipient.email) {
      const {name, rua, numero, complemento, estado, cidade, cep} = await recipient.update(req.body);
      return res.json({
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




}

export default new RecipientController();
