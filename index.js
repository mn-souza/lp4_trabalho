const { Client } = require('pg');

const dbConfig = {
  user: 'postgres',
  password: '415232',
  host: 'localhost',
  port: 5432,
  database: 'lp_souza', // Nome do banco de dados da loja online
};

class Produto {
  async connectDB() {
    const client = new Client(dbConfig);
    await client.connect();
    return client;
  }

  async getAllProdutos() {
    const client = await this.connectDB();
    const result = await client.query('SELECT * FROM produtos');
    client.end();
    return result.rows;
  }

  async createProduto(nome, preco) {
    const client = await this.connectDB();
    const result = await client.query('INSERT INTO produtos (nome, preco) VALUES ($1, $2) RETURNING *', [nome, preco]);
    client.end();
    return result.rows[0];
  }

  async updateProduto(id, nome, preco) {
    const client = await this.connectDB();
    const result = await client.query('UPDATE produtos SET nome = $1, preco = $2 WHERE id = $3 RETURNING *', [nome, preco, id]);
    client.end();
    return result.rows[0];
  }

  async deleteProduto(id) {
    const client = await this.connectDB();
    const result = await client.query('DELETE FROM produtos WHERE id = $1 RETURNING *', [id]);
    client.end();
    return result.rows[0];
  }
}

module.exports = Produto;
