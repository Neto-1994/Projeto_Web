async function gerartabela() {
    // Buscar a referência da div HTML
    const box = document.getElementById("tabeladinamica");
    // Limpar
    box.innerHTML = "";
    // Adicionar ícone de carregando
    box.classList.add("loading");

    // Busca das informações das estações
    fetch("qualidadedados/estacoes")
        .then(response => response.json())
        .then(estacoes => {
            // Criando elementos da tabela
            var tabela = document.createElement("table");
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");

            // Cabeçalho da tabela
            var tr1 = document.createElement("tr");
            var th1 = document.createElement("th");
            var data = Date.now();
            var hoje = new Date(data); // Obtendo dados do dia de hoje
            var hora = hoje.getHours() + "h"; // Obtendo horário atual
            th1.innerHTML = hoje.toLocaleDateString(); // Obtendo data de hoje

            // Formatando cabeçalho
            th1.style.backgroundColor = "silver";
            th1.colSpan = "27";

            // Colunas da tabela
            var tr2 = document.createElement("tr");
            var th2 = document.createElement("th");
            th2.innerHTML = "Estação";
            var th3 = document.createElement("th");
            th3.innerHTML = "Tipo";
            var th4 = document.createElement("th");
            th4.innerHTML = "Hora";
            var th5 = document.createElement("th");
            th5.innerHTML = "Observação";

            // Formatando colunas
            th2.rowSpan = "2";
            th3.rowSpan = "2";
            th4.colSpan = "24";
            th5.rowSpan = "2";
            th2.classList.add("align-middle");
            th3.classList.add("align-middle");
            th5.classList.add("align-middle");

            // Adicionando células às linhas
            tr1.appendChild(th1);
            tr2.appendChild(th2);
            tr2.appendChild(th3);
            tr2.appendChild(th4);
            tr2.appendChild(th5);

            //Criando linha dos horários da tabela
            var tr3 = document.createElement("tr");

            // Array contendo os horários diários
            var ArrayHorarios = ["00h", "01h", "02h", "03h", "04h", "05h", "06h", "07h", "08h", "09h", "10h",
                "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"];

            // Posicionando conteúdo do array de acordo com o horário atual
            ArrayHorarios.sort(function (a, b) {
                if (a == hora) {
                    return 1; // Move o elemento da última posição para o final do array
                } else if (b == hora) {
                    return -1; // Move o elemento da última posição para o final do array
                } else if (a > hora && b > hora) {
                    return a.localeCompare(b); // Ordenação alfabética crescente para elementos maiores que a hora
                } else if (a > hora) {
                    return -1; // Move elementos maiores que a hora para o início do array
                } else if (b > hora) {
                    return 1; // Move elementos maiores que a hora para o início do array
                } else {
                    return a.localeCompare(b); // Ordenação alfabética crescente para os outros elementos
                }
            });

            // Criando células e adicionando à linha tr3
            ArrayHorarios.forEach((campo, c) => {
                var c = document.createElement("td");
                c.innerHTML = campo;
                tr3.appendChild(c);
            });

            // Formatando linhas
            tr1.align = "center";
            tr2.align = "center";
            tr3.align = "center";

            // Adicionando linhas ao head da tabela
            thead.appendChild(tr1);
            thead.appendChild(tr2);
            thead.appendChild(tr3);
            tabela.appendChild(thead);

            // Preenchendo body da tabela
            // Busca das transmissões de cada estação
            fetch("/qualidadedados/transmissoes")
                .then(response => response.json())
                .then(transmissoes => {
                    for (let e = 0; e < estacoes.length; e++) {
                        var tr = tbody.insertRow();
                        var td_estacao = tr.insertCell();
                        var td_tipo = tr.insertCell();

                        // Cria uma nova array para os dados horários do body da tabela
                        var Campos = [];
                        /* De acordo com a ordenação do horário atual da tabela, popula a nova array criando
                        células <td>  e setando um id respectivamente */
                        Campos = ArrayHorarios.map(campo => {
                            switch (campo) {
                                case "00h":
                                    var hora0 = tr.insertCell();
                                    hora0.id = 0;
                                    return hora0;
                                case "01h":
                                    var hora1 = tr.insertCell();
                                    hora1.id = 1;
                                    return hora1;
                                case "02h":
                                    var hora2 = tr.insertCell();
                                    hora2.id = 2;
                                    return hora2;
                                case "03h":
                                    var hora3 = tr.insertCell();
                                    hora3.id = 3;
                                    return hora3;
                                case "04h":
                                    var hora4 = tr.insertCell();
                                    hora4.id = 4;
                                    return hora4;
                                case "05h":
                                    var hora5 = tr.insertCell();
                                    hora5.id = 5;
                                    return hora5;
                                case "06h":
                                    var hora6 = tr.insertCell();
                                    hora6.id = 6;
                                    return hora6;
                                case "07h":
                                    var hora7 = tr.insertCell();
                                    hora7.id = 7;
                                    return hora7;
                                case "08h":
                                    var hora8 = tr.insertCell();
                                    hora8.id = 8;
                                    return hora8;
                                case "09h":
                                    var hora9 = tr.insertCell();
                                    hora9.id = 9;
                                    return hora9;
                                case "10h":
                                    var hora10 = tr.insertCell();
                                    hora10.id = 10;
                                    return hora10;
                                case "11h":
                                    var hora11 = tr.insertCell();
                                    hora11.id = 11;
                                    return hora11;
                                case "12h":
                                    var hora12 = tr.insertCell();
                                    hora12.id = 12;
                                    return hora12;
                                case "13h":
                                    var hora13 = tr.insertCell();
                                    hora13.id = 13;
                                    return hora13;
                                case "14h":
                                    var hora14 = tr.insertCell();
                                    hora14.id = 14;
                                    return hora14;
                                case "15h":
                                    var hora15 = tr.insertCell();
                                    hora15.id = 15;
                                    return hora15;
                                case "16h":
                                    var hora16 = tr.insertCell();
                                    hora16.id = 16;
                                    return hora16;
                                case "17h":
                                    var hora17 = tr.insertCell();
                                    hora17.id = 17;
                                    return hora17;
                                case "18h":
                                    var hora18 = tr.insertCell();
                                    hora18.id = 18;
                                    return hora18;
                                case "19h":
                                    var hora19 = tr.insertCell();
                                    hora19.id = 19;
                                    return hora19;
                                case "20h":
                                    var hora20 = tr.insertCell();
                                    hora20.id = 20;
                                    return hora20;
                                case "21h":
                                    var hora21 = tr.insertCell();
                                    hora21.id = 21;
                                    return hora21;
                                case "22h":
                                    var hora22 = tr.insertCell();
                                    hora22.id = 22;
                                    return hora22;
                                case "23h":
                                    var hora23 = tr.insertCell();
                                    hora23.id = 23;
                                    return hora23;
                            }
                        });
                        // Cria célula <td>
                        var obs = tr.insertCell();

                        // Adicionar nomes das estações
                        td_estacao.innerText = estacoes[e].Nome_Estacao;
                        td_tipo.innerText = estacoes[e].Tipo_Estacao;

                        // Verifica a posição 'e' em relação a variável transmissoes
                        if (e < transmissoes.length) {
                            // Verifica o tamanho do array, e se necessário estiliza os campos para atenção
                            if (transmissoes[e].length < 23) {
                                Campos.forEach(elemento => {
                                    elemento.style.backgroundColor = "Khaki";
                                });
                                obs.innerText = "Falha na recepção..";
                            };

                            // Percorre o objeto de posição transmissoes[e]
                            for (let i = 0; i < transmissoes[e].length; i++) {
                                // Conversão do horário UTC transmitido para horário local (UTC - 3)
                                let hora_tr = new Date(transmissoes[e][i].Dt_Medicao)
                                let h = hora_tr.getHours();

                                // Popular campos horários da tabela de forma positiva
                                /* Também foi necessário ajustar manualmente a relação campo tabela com horário local
                                devido o banco de dados retornar busca com horário UTC + 3*/
                                switch (h) {
                                    case 23:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 20) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 22:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 19) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 21:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 18) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 20:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 17) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 19:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 16) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 18:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 15) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 17:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 14) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 16:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 13) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 15:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 12) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 14:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 11) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 13:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 10) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 12:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 9) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 11:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 8) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 10:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 7) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 9:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 6) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 8:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 5) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 7:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 4) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 6:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 3) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 5:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 2) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 4:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 1) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                    case 3:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 0) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 2:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 23) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 1:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 22) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                    case 0:
                                        Campos.forEach(elemento => {
                                            if (elemento.id == 21) {
                                                elemento.style.backgroundColor = "MediumSeaGreen";
                                            };
                                        });
                                        break;
                                };
                            };
                            // Se não possuir registros de dados na estação, estilizar com vermelho
                            if (transmissoes[e].length == 0) {
                                Campos.forEach(elemento => {
                                    elemento.style.backgroundColor = "FireBrick";
                                });
                                obs.innerText = "Sem dados..";
                            };
                        };
                        // Formatação das colunas especificadas
                        td_estacao.classList.add("largura-coluna", "text-center");
                        td_tipo.classList.add("text-center");
                        obs.classList.add("largura-coluna", "text-center");

                        // Montagem da tabela
                        tr.appendChild(td_estacao);
                        tr.appendChild(td_tipo);
                        Campos.forEach(elemento => {
                            tr.appendChild(elemento);
                        });
                        tr.appendChild(obs);
                        tbody.appendChild(tr);
                        tabela.appendChild(tbody);
                    };
                    // Formatando a tabela
                    tabela.classList.add("table", "table-sm", "table-striped", "table-bordered", "border-dark");
                    // Remover ícone de carregando
                    box.classList.remove("loading");
                    // Inserir a tabela na div
                    box.appendChild(tabela);
                });
        });
};
// Automatizar atualização da tabela
//setInterval(gerartabela, 120000);// 2min /* 40 * 60 * 1000 40min 2400000 */
