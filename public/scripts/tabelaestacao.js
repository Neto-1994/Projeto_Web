
async function dados() {
    console.log("Iniciou o script tabelaestacao..");
    const dbacqua = require("./dbacqua.js");
    var [linhas] = await dbacqua.selectDados();
    return linhas;
}

module.exports = {dados};
