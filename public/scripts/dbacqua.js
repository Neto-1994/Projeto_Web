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

async function selectMedicoes() {
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

async function selectEstacoes() {
    try {
        const conn = await connect();
        const [estacoes] = await conn.query("SELECT Nome_Estacao, Tipo_Estacao FROM estacoes WHERE Nome_Estacao LIKE '%Maraca%' AND Codigo_goes is not null;");
        return estacoes;
    } catch (error) {
        console.log(error);
    }
}

async function selectTransmissoes() {
    try {
        const conn = await connect();
        const [estacao_1221] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1221 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1222] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1222 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1226] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1226 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1227] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1227 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1228] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1228 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1229] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1229 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1230] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1230 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1231] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1231 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1232] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1232 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1243] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1243 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1244] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1244 AND Dt_Medicao >= DATE_SUB(CURRENT_TIME(),INTERVAL 24 HOUR) AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1245] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1229 AND Dt_Medicao BETWEEN '2023-06-01' AND '2023-06-01 23:59:59' AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1246] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1229 AND Dt_Medicao BETWEEN '2023-06-05' AND '2023-06-05 23:59:59' AND Dt_Medicao LIKE '%:00:00';");
        const [estacao_1247] = await conn.query("SELECT Dt_Medicao FROM medicoes WHERE codigo_sec = 1229 AND Dt_Medicao BETWEEN '2023-06-09' AND '2023-06-09 23:59:59' AND Dt_Medicao LIKE '%:00:00';");
        return [estacao_1221, estacao_1222, estacao_1226, estacao_1227, estacao_1228, estacao_1229, estacao_1230,
            estacao_1231, estacao_1232, estacao_1243, estacao_1244, estacao_1245, estacao_1246, estacao_1247];
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

module.exports = { selectMedicoes, selectEstacoes, selectTransmissoes };
