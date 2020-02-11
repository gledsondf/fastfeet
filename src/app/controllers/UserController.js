import User from '../models/User';
import * as Yup from 'yup';
class UserController {


  //criar/armazenar
  async create(req, res)  {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Não foi possível validar'});
    }

    //verficar se email existe
    const userExist = await User.findOne({ where: { email: req.body.email }});

    if(userExist) {
      return res.status(400).json({ error: 'Usuário já existe.'});
    }
    const { id, name, email, provider} = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
      provider
    });
  }


    //leitura
    async read(req, res) {

      return res.json({'message' : 'leitura'});

    }

  //atualizar

  async update(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6).when('oldPassword', (oldPassword, field) => {
        oldPassword ? field.required() : field
      }),
      confirmPassword: Yup.string().when('password', (password, field) => {
        password ? field.required().oneOf([ Yup.ref('password')]) : field
      }),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Não foi possível validar'});
    }


    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email != user.email) {
      //verficar se email existe

      const userExist = await User.findOne({ where: { email: email }});
      if(userExist) {

      return res.status(400).json({ error: 'Usuário já existe.'});
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {

      return res.status(401).json({ error: 'Password não corresponde'});
    }

    const {id, name, provider} = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider
    });
  }
}


export default new UserController();
