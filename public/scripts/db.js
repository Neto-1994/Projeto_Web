const mysql = require("mysql2/promise");

// Conexão com o Banco de dados
async function connect() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "usuarios",
        port: 3306
    });
    return connection;
};

async function selectUser(nome) {
    const conn = await connect();
    const sql = ("SELECT * FROM cadastros WHERE Nome = ?;");
    const values = [nome];
    const [resultado] = await conn.query(sql, values);

    if (resultado.length > 0) return resultado;
    else return null;
};
/*
async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM cadastros;");
    return rows;
}
*/
async function insertCustomer(customer) {
    //var senha = bcrypt.hashSync(variavel com valor para gerar hash);
    const conn = await connect();
    const sql = ("INSERT INTO cadastros(Nome,Senha) VALUES (?,?);");
    const values = [customer.nome, customer.senha];
    return await conn.query(sql, values);
}

async function updateCustomer(id, customer) {
    const conn = await connect();
    const sql = ("UPDATE cadastros SET Nome = ?, Senha = ? WHERE id = ?;");
    const values = [customer.nome, customer.senha, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id) {
    const conn = await connect();
    const sql = ("DELETE FROM cadastros WHERE id = ?;");
    return await conn.query(sql, id);
}

module.exports = { selectUser, insertCustomer, updateCustomer, deleteCustomer };
