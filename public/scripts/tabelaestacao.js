const db = require("./dbacqua");

async function tabeladados() {
    console.log("Iniciou o script..");
    // Recebe consulta do banco de cria um array
    const linhas = await db.selectCustomers();
    var tabela = document.getElementById("tabeladinamica");

    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var thd = function (i) { return (i = 0) ? "th" : "td"; };
    for (var i = 0; i < linhas.length; i++) {
        var tr = document.createElement("tr");
        for (var o = 0; o < linhas[i].length; o++) {
            var t = document.createElement(thd(i));
            var texto = document.createTextNode(linhas[i][o]);
            t.appendChild(texto);
            tr.appendChild(t);
        }
        (i == 0) ? thead.appendChild(tr) : tbody.appendChild(tr);
    }
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    document.getElementById("tabeladinamica").appendChild(tabela);
    
};


