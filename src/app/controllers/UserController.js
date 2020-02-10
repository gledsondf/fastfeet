

class UserController {


  //criar/armazenar
  async create(req, res)  {
    return res.json({'message': 'teste de envio'});
  }


    //leitura
    async read(req, res) {

      return res.json({'message' : 'leitura'});

    }

  //atualizar

  async update(req, res) {
    return res.json({message: 'atualizar'});

  }

  //deletar

  async delete(req, res) {
    return res.json({message: 'deletar'});

  }

}


export default new UserController();
