// Conexão com o Banco de dados
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    host = "localhost:3306";
    user = "root";
    password = 123456;
    database = "usuarios";

    const connection = await mysql.createConnection("mysql://" + user + ":" + password + "@" + host + "/" + database);
    global.connection = connection;
    console.log("Conectou no banco de dados..");
    return connection;
}

async function selectCustomers(nome, senha) {
    console.log("Iniciou o sql..");
    const conn = await connect();
    const sql = ("SELECT * FROM cadastros WHERE Nome = ?;");
    const values = [nome];
    const [results] = await conn.query(sql, values);

    return new Promise((resolve, reject) => {
        if (results != 0) {
            const cadastros = results[0];
            if (senha != null && senha === cadastros.Senha) {
                console.log("Passei no if da senha..");
                resolve("Autorizado");
            } else {
                console.log("Estou no else da senha..");
                reject("Senha incorreta");
            }
        } else {
            console.log("Estou no else do usuario..");
            reject('Usuario nao encontrado');
        }
    });
};
/*
async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM cadastros;");
    return rows;
}
*/
async function insertCustomer(customer) {
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

module.exports = { selectCustomers, insertCustomer, updateCustomer, deleteCustomer };
