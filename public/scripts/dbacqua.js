const mysql = require("mysql2/promise");
// Conexão com o Banco de dados
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    } else {
        const connection = await mysql.createConnection({
            host: "159.203.44.241",
            user: "cris",
            password: "Acqua@cris2019",
            database: "acqua",
            port: 64306
        });
        global.connection = connection;
        console.log("Conectou no banco de dados acqua..");
        return connection;
    }
};

async function selectDados() {
    try {
        const conn = await connect();
        const [rows] = await conn.query("SELECT horalocal, Pluvio FROM medicoes WHERE codigo_sec in (800) AND horalocal BETWEEN '2023-01-01' AND '2023-01-01 3:59:59' ORDER BY dt_medicao desc;");
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function insertDados(customer) {
    try {
        const conn = await connect();
        const sql = ("INSERT INTO cadastros(Nome,Senha) VALUES (?,?);");
        const values = [customer.nome, customer.senha];
        return await conn.query(sql, values);
    } catch (error) {
        console.log(error);
    }
}

async function updateDados(id, customer) {
    try {
        const conn = await connect();
        const sql = ("UPDATE cadastros SET Nome = ?, Senha = ? WHERE id = ?;");
        const values = [customer.nome, customer.senha, id];
        return await conn.query(sql, values);
    } catch (error) {
        console.log(error);
    }
}

async function deleteDados(id) {
    try {
        const conn = await connect();
        const sql = ("DELETE FROM cadastros WHERE id = ?;");
        return await conn.query(sql, id);
    } catch (error) {
        console.log(error);
    }

};

/*try {
    await mysql.authenticate;
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }*/

module.exports = { selectDados, insertDados, updateDados, deleteDados };
