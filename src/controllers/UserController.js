const Produto = require('../models/produto');
const convert = require('../util/extenso')
var extenso = require('extenso')

module.exports = {
  async store(request, response) {
    const { nome, preco } = request.body;
    const precoExtenso = extenso(preco);
  
    try {
 
      const produtos = await Produto.create({ nome, preco, precoExtenso});
      return response.json(produtos);
    } catch (e) {
      return response.json(e);
    }


  },

  async index(request, response) {
    const produtos = await Produto.findAll();

    return response.json(produtos);
  }
}