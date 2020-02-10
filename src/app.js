import express from 'express';
//var app = express();

class App {
  constructor() {
    this.express = express();
  }
}

var novo = new App().express;

novo.listen(3000, () => {
  console.log('ouvindo porta 3000');
});


// app.get('/', (req, res) => {
//   return res.send('olá mané');
// });
// app.listen(3000, () => {
//   console.log('ouvindo porta 3000');
// });

//export default new App();
