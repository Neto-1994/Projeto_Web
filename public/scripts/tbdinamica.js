async function gerartabela() {

    limpardiv();
    const date = new Date();

    // Busca das informações das estações
    fetch('/qualidadedados/estacoes')
        .then(response => response.json())
        .then(estacoes => {
            // Criando elementos da tabela
            var tabela = document.createElement("table");
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");

            // Cabeçalho da tabela
            var tr1 = document.createElement("tr");
            var th1 = document.createElement("th");
            var timeElapsed = Date.now();
            var today = new Date(timeElapsed);
            th1.innerHTML = today.toLocaleDateString();

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

            //Criando linha e células da linha
            var tr3 = document.createElement("tr");
            var h0 = document.createElement("td");
            h0.innerHTML = "00h";
            var h1 = document.createElement("td");
            h1.innerHTML = "01h";
            var h2 = document.createElement("td");
            h2.innerHTML = "02h";
            var h3 = document.createElement("td");
            h3.innerHTML = "03h";
            var h4 = document.createElement("td");
            h4.innerHTML = "04h";
            var h5 = document.createElement("td");
            h5.innerHTML = "05h";
            var h6 = document.createElement("td");
            h6.innerHTML = "06h";
            var h7 = document.createElement("td");
            h7.innerHTML = "07h";
            var h8 = document.createElement("td");
            h8.innerHTML = "08h";
            var h9 = document.createElement("td");
            h9.innerHTML = "09h";
            var h10 = document.createElement("td");
            h10.innerHTML = "10h";
            var h11 = document.createElement("td");
            h11.innerHTML = "11h";
            var h12 = document.createElement("td");
            h12.innerHTML = "12h";
            var h13 = document.createElement("td");
            h13.innerHTML = "13h";
            var h14 = document.createElement("td");
            h14.innerHTML = "14h";
            var h15 = document.createElement("td");
            h15.innerHTML = "15h";
            var h16 = document.createElement("td");
            h16.innerHTML = "16h";
            var h17 = document.createElement("td");
            h17.innerHTML = "17h";
            var h18 = document.createElement("td");
            h18.innerHTML = "18h";
            var h19 = document.createElement("td");
            h19.innerHTML = "19h";
            var h20 = document.createElement("td");
            h20.innerHTML = "20h";
            var h21 = document.createElement("td");
            h21.innerHTML = "21h";
            var h22 = document.createElement("td");
            h22.innerHTML = "22h";
            var h23 = document.createElement("td");
            h23.innerHTML = "23h";

            // Adicionando células à linha tr3
            tr3.appendChild(h0);
            tr3.appendChild(h1);
            tr3.appendChild(h2);
            tr3.appendChild(h3);
            tr3.appendChild(h4);
            tr3.appendChild(h5);
            tr3.appendChild(h6);
            tr3.appendChild(h7);
            tr3.appendChild(h8);
            tr3.appendChild(h9);
            tr3.appendChild(h10);
            tr3.appendChild(h11);
            tr3.appendChild(h12);
            tr3.appendChild(h13);
            tr3.appendChild(h14);
            tr3.appendChild(h15);
            tr3.appendChild(h16);
            tr3.appendChild(h17);
            tr3.appendChild(h18);
            tr3.appendChild(h19);
            tr3.appendChild(h20);
            tr3.appendChild(h21);
            tr3.appendChild(h22);
            tr3.appendChild(h23);

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
            fetch('/qualidadedados/transmissoes')
                .then(response => response.json())
                .then(transmissoes => {
                    for (let e = 0; e < estacoes.length; e++) {
                        var tr = tbody.insertRow();
                        var td_estacao = tr.insertCell();
                        var td_tipo = tr.insertCell();
                        var hora0 = tr.insertCell();
                        var hora1 = tr.insertCell();
                        var hora2 = tr.insertCell();
                        var hora3 = tr.insertCell();
                        var hora4 = tr.insertCell();
                        var hora5 = tr.insertCell();
                        var hora6 = tr.insertCell();
                        var hora7 = tr.insertCell();
                        var hora8 = tr.insertCell();
                        var hora9 = tr.insertCell();
                        var hora10 = tr.insertCell();
                        var hora11 = tr.insertCell();
                        var hora12 = tr.insertCell();
                        var hora13 = tr.insertCell();
                        var hora14 = tr.insertCell();
                        var hora15 = tr.insertCell();
                        var hora16 = tr.insertCell();
                        var hora17 = tr.insertCell();
                        var hora18 = tr.insertCell();
                        var hora19 = tr.insertCell();
                        var hora20 = tr.insertCell();
                        var hora21 = tr.insertCell();
                        var hora22 = tr.insertCell();
                        var hora23 = tr.insertCell();
                        var obs = tr.insertCell();

                        td_estacao.innerText = estacoes[e].Nome_Estacao;
                        td_tipo.innerText = estacoes[e].Tipo_Estacao;

                        // Verifica a posição 'e' em relação a variável transmissoes
                        if (e < transmissoes.length) {
                            // Verifica o tamanho de transmissoes[e]
                            for (let i = 0; i < transmissoes[e].length; i++) {

                                // Conversão do horário UTC transmitido para horário local (UTC - 3)
                                let hora_tr = new Date(transmissoes[e][i].hora_transmissao)
                                let h = hora_tr.getHours();

                                // Verificar qualidade da transmissão horária e preencher campo da tabela
                                /* Também foi necessário ajustar manualmente a relação campo tabela com horário local
                                devido o banco de dados retornar busca com horário UTC + 3*/
                                switch (h) {
                                    case 23:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora20.style.backgroundColor = "green";
                                        } else {
                                            hora20.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 22:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora19.style.backgroundColor = "green";
                                        } else {
                                            hora19.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 21:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora18.style.backgroundColor = "green";
                                        } else {
                                            hora18.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 20:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora17.style.backgroundColor = "green";
                                        } else {
                                            hora17.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 19:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora16.style.backgroundColor = "green";
                                        } else {
                                            hora16.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 18:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora15.style.backgroundColor = "green";
                                        } else {
                                            hora15.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 17:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora14.style.backgroundColor = "green";
                                        } else {
                                            hora14.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 16:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora13.style.backgroundColor = "green";
                                        } else {
                                            hora13.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 15:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora12.style.backgroundColor = "green";
                                        } else {
                                            hora12.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 14:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora11.style.backgroundColor = "green";
                                        } else {
                                            hora11.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 13:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora10.style.backgroundColor = "green";
                                        } else {
                                            hora10.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 12:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora9.style.backgroundColor = "green";
                                        } else {
                                            hora9.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 11:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora8.style.backgroundColor = "green";
                                        } else {
                                            hora8.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 10:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora7.style.backgroundColor = "green";
                                        } else {
                                            hora7.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 9:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora6.style.backgroundColor = "green";
                                        } else {
                                            hora6.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 8:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora5.style.backgroundColor = "green";
                                        } else {
                                            hora5.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 7:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora4.style.backgroundColor = "green";
                                        } else {
                                            hora4.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 6:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora3.style.backgroundColor = "green";
                                        } else {
                                            hora3.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 5:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora2.style.backgroundColor = "green";
                                        } else {
                                            hora2.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 4:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora1.style.backgroundColor = "green";
                                        } else {
                                            hora1.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 3:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora0.style.backgroundColor = "green";
                                        } else {
                                            hora0.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 2:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora23.style.backgroundColor = "green";
                                        } else {
                                            hora23.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 1:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora22.style.backgroundColor = "green";
                                        } else {
                                            hora22.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    case 0:
                                        if (transmissoes[e][i].status_mensagem == "G") {
                                            hora21.style.backgroundColor = "green";
                                        } else {
                                            hora21.style.backgroundColor = "yellow";
                                            obs.innerText = "Erro na recepção dos dados.";
                                        }
                                        break;
                                    default:

                                        break;
                                }
                            }

                            // Se não possuir registros de dados na estação, estilizar com vermelho
                            if (transmissoes[e].length == 0) {
                                hora0.style.backgroundColor = "red";
                                hora1.style.backgroundColor = "red";
                                hora2.style.backgroundColor = "red";
                                hora3.style.backgroundColor = "red";
                                hora4.style.backgroundColor = "red";
                                hora5.style.backgroundColor = "red";
                                hora6.style.backgroundColor = "red";
                                hora7.style.backgroundColor = "red";
                                hora8.style.backgroundColor = "red";
                                hora9.style.backgroundColor = "red";
                                hora10.style.backgroundColor = "red";
                                hora11.style.backgroundColor = "red";
                                hora12.style.backgroundColor = "red";
                                hora13.style.backgroundColor = "red";
                                hora14.style.backgroundColor = "red";
                                hora15.style.backgroundColor = "red";
                                hora16.style.backgroundColor = "red";
                                hora17.style.backgroundColor = "red";
                                hora18.style.backgroundColor = "red";
                                hora19.style.backgroundColor = "red";
                                hora20.style.backgroundColor = "red";
                                hora21.style.backgroundColor = "red";
                                hora22.style.backgroundColor = "red";
                                hora23.style.backgroundColor = "red";
                                obs.innerText = "Sem dados..";
                            }
                        }
                        // Formatação das colunas especificadas
                        td_estacao.classList.add("largura-coluna", "text-center");
                        td_tipo.classList.add("text-center");
                        obs.classList.add("largura-coluna", "text-center");

                        // Montagem da tabela
                        tr.appendChild(td_estacao);
                        tr.appendChild(td_tipo);
                        tr.appendChild(hora0);
                        tr.appendChild(hora1);
                        tr.appendChild(hora2);
                        tr.appendChild(hora3);
                        tr.appendChild(hora4);
                        tr.appendChild(hora5);
                        tr.appendChild(hora6);
                        tr.appendChild(hora7);
                        tr.appendChild(hora8);
                        tr.appendChild(hora9);
                        tr.appendChild(hora10);
                        tr.appendChild(hora11);
                        tr.appendChild(hora12);
                        tr.appendChild(hora13);
                        tr.appendChild(hora14);
                        tr.appendChild(hora15);
                        tr.appendChild(hora16);
                        tr.appendChild(hora17);
                        tr.appendChild(hora18);
                        tr.appendChild(hora19);
                        tr.appendChild(hora20);
                        tr.appendChild(hora21);
                        tr.appendChild(hora22);
                        tr.appendChild(hora23);
                        tr.appendChild(obs);
                        tbody.appendChild(tr);
                        tabela.appendChild(tbody);
                    }

                    // Formatando a tabela
                    tabela.classList.add("table", "table-sm", "table-striped", "table-bordered", "border-dark");

                    // Inserir a tabela na div
                    document.getElementById("tabeladinamica").appendChild(tabela);
                });
        });
}

// Limpar tabela da div
function limpardiv() {
    const box = document.getElementById("tabeladinamica");
    box.innerHTML = "";
}