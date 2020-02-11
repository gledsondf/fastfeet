//aqui realiza a conexao com o banco de dados e carregar os models

//sequelize é o responsável para fazer conexao com o banco
import Sequelize from 'sequelize';

//importar os models
import User from '../app/models/User';
//importe configurações banco de dados
import databaseConfig from '../config/database'


//array com todos os models da aplicação
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  //metodo init faz conexao com o banco de dados e carrega módulo
  init() {
    this.connection = new Sequelize(databaseConfig);
    //varredura no array
    models.map(model => model.init(this.connection));
  }
}

export default new Database();