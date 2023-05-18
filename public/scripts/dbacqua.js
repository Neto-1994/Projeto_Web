// Conexão com o Banco de dados
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    host = "159.203.44.241";
    port = 64306;
    user = "cris";
    password = "Acqua@cris2019";
    database = "acqua";

    console.log("Iniciou a conexao com o banco..");
    /*const connection = await mysql.createConnection({
        host: '159.203.44.241:64306', // O host do banco. Ex: localhost
        user: 'cris', // Um usuário do banco. Ex: user 
        password: 'Acqua@cris2019', // A senha do usuário. Ex: user123
        database: 'acqua' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
    });*/
    
    const connection = await mysql.createConnection("mysql://" + user + ":" + password + "@" + host + ":" + port + "/" + database);
    console.log(connection);
    global.connection = connection;
    console.log("Conectou no banco de dados..");
    return connection;
}

async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query("SELECT dt_medicao, horalocal, Codigo_Sec, Pluvio FROM medicoes WHERE codigo_sec in (800) AND horalocal BETWEEN '2023-01-01' AND '2023-01-02 23:59:59' ORDER BY dt_medicao desc;");
    return rows;
}

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
