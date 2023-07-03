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
            fetch("/qualidadedados/transmissoes")
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
                            // Verifica o tamanho do array, e se necessário estiliza os campos
                            if (transmissoes[e].length < 23) {
                                hora0.style.backgroundColor = "Khaki";
                                hora1.style.backgroundColor = "Khaki";
                                hora2.style.backgroundColor = "Khaki";
                                hora3.style.backgroundColor = "Khaki";
                                hora4.style.backgroundColor = "Khaki";
                                hora5.style.backgroundColor = "Khaki";
                                hora6.style.backgroundColor = "Khaki";
                                hora7.style.backgroundColor = "Khaki";
                                hora8.style.backgroundColor = "Khaki";
                                hora9.style.backgroundColor = "Khaki";
                                hora10.style.backgroundColor = "Khaki";
                                hora11.style.backgroundColor = "Khaki";
                                hora12.style.backgroundColor = "Khaki";
                                hora13.style.backgroundColor = "Khaki";
                                hora14.style.backgroundColor = "Khaki";
                                hora15.style.backgroundColor = "Khaki";
                                hora16.style.backgroundColor = "Khaki";
                                hora17.style.backgroundColor = "Khaki";
                                hora18.style.backgroundColor = "Khaki";
                                hora19.style.backgroundColor = "Khaki";
                                hora20.style.backgroundColor = "Khaki";
                                hora21.style.backgroundColor = "Khaki";
                                hora22.style.backgroundColor = "Khaki";
                                hora23.style.backgroundColor = "Khaki";
                                obs.innerText = "Falha na recepção..";
                            };
                            // Percorre o objeto de posição transmissoes[e]
                            for (let i = 0; i < transmissoes[e].length; i++) {
                                // Conversão do horário UTC transmitido para horário local (UTC - 3)
                                let hora_tr = new Date(transmissoes[e][i].Dt_Medicao)
                                let h = hora_tr.getHours();

                                // Verificar qualidade da transmissão horária e preencher campo da tabela
                                /* Também foi necessário ajustar manualmente a relação campo tabela com horário local
                                devido o banco de dados retornar busca com horário UTC + 3*/
                                switch (h) {
                                    case 23:
                                        hora20.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 22:
                                        hora19.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 21:
                                        hora18.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 20:
                                        hora17.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 19:
                                        hora16.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 18:
                                        hora15.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 17:
                                        hora14.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 16:
                                        hora13.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 15:
                                        hora12.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 14:
                                        hora11.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 13:
                                        hora10.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 12:
                                        hora9.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 11:
                                        hora8.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 10:
                                        hora7.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 9:
                                        hora6.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 8:
                                        hora5.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 7:
                                        hora4.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 6:
                                        hora3.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 5:
                                        hora2.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 4:
                                        hora1.style.backgroundColor = "MediumSeaGreen";
                                    case 3:
                                        hora0.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 2:
                                        hora23.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 1:
                                        hora22.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    case 0:
                                        hora21.style.backgroundColor = "MediumSeaGreen";
                                        break;
                                    default:

                                        break;
                                }
                            };

                            // Se não possuir registros de dados na estação, estilizar com vermelho
                            if (transmissoes[e].length == 0) {
                                hora0.style.backgroundColor = "FireBrick";
                                hora1.style.backgroundColor = "FireBrick";
                                hora2.style.backgroundColor = "FireBrick";
                                hora3.style.backgroundColor = "FireBrick";
                                hora4.style.backgroundColor = "FireBrick";
                                hora5.style.backgroundColor = "FireBrick";
                                hora6.style.backgroundColor = "FireBrick";
                                hora7.style.backgroundColor = "FireBrick";
                                hora8.style.backgroundColor = "FireBrick";
                                hora9.style.backgroundColor = "FireBrick";
                                hora10.style.backgroundColor = "FireBrick";
                                hora11.style.backgroundColor = "FireBrick";
                                hora12.style.backgroundColor = "FireBrick";
                                hora13.style.backgroundColor = "FireBrick";
                                hora14.style.backgroundColor = "FireBrick";
                                hora15.style.backgroundColor = "FireBrick";
                                hora16.style.backgroundColor = "FireBrick";
                                hora17.style.backgroundColor = "FireBrick";
                                hora18.style.backgroundColor = "FireBrick";
                                hora19.style.backgroundColor = "FireBrick";
                                hora20.style.backgroundColor = "FireBrick";
                                hora21.style.backgroundColor = "FireBrick";
                                hora22.style.backgroundColor = "FireBrick";
                                hora23.style.backgroundColor = "FireBrick";
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
                    // Remover ícone de carregando
                    box.classList.remove("loading");
                    // Inserir a tabela na div
                    box.appendChild(tabela);
                });
        });
}
