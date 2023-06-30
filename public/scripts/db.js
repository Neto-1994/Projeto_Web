const mysql = require("mysql2/promise");
require('dotenv').config();

// Conexão com o Banco de dados
async function connect_local() {
    if (global.connection_local && global.connection_local.state !== 'disconnected') {
        return global.connection_local;
    } else {
        const connection_local = await mysql.createConnection({
            host: process.env.HOST_L,
            user: process.env.USER_L,
            password: process.env.PASSWORD_L,
            database: process.env.DATABASE_L,
            port: process.env.PORT_L
        });
        global.connection_local = connection_local;
        console.log("Conectou no banco de dados local..");
        return connection_local;
    }
};

async function selectUser(nome) {
    const conn = await connect_local();
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
