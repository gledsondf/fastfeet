import User from '../models/User';

class UserController {


  //criar/armazenar
  async create(req, res)  {

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

    console.log(req.userId);
    return res.json({message: 'atualizar'});

  }

  //deletar

  async delete(req, res) {
    return res.json({message: 'deletar'});

  }

}


export default new UserController();
