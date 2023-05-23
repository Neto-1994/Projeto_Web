// Conexão com o Banco de dados
async function connect() {
    /*if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    };*/

    const Sequelize = require('sequelize');
    host = "159.203.44.241";
    porta = 64306;
    user = "cris";
    password = "Acqua@cris2019";
    database = "acqua";

    const connection = new Sequelize(database, user, password, {
        dialect: 'mysql',
        host: host,
        port: porta
    });
    //global.connection = connection;
    console.log("Conectou no banco de dados acqua..");
    return connection;
};

async function selectDados() {
    const conn = await connect();
    const [rows] = await conn.query("SELECT Codigo_Sec, Pluvio FROM medicoes WHERE codigo_sec in (800) AND horalocal BETWEEN '2023-01-01' AND '2023-01-01 23:59:59' ORDER BY dt_medicao desc;");
    return rows;
}

async function insertDados(customer) {
    const conn = await connect();
    const sql = ("INSERT INTO cadastros(Nome,Senha) VALUES (?,?);");
    const values = [customer.nome, customer.senha];
    return await conn.query(sql, values);
}

async function updateDados(id, customer) {
    const conn = await connect();
    const sql = ("UPDATE cadastros SET Nome = ?, Senha = ? WHERE id = ?;");
    const values = [customer.nome, customer.senha, id];
    return await conn.query(sql, values);
}

async function deleteDados(id) {
    const conn = await connect();
    const sql = ("DELETE FROM cadastros WHERE id = ?;");
    return await conn.query(sql, id);
};

module.exports = { selectDados, insertDados, updateDados, deleteDados };
