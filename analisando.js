/* PROJETO TRADUÇÃO: IREI TRADUZIR ESSE CÓDIGO ATÉ ENTENDÊ-LO!*/

const loading = async() => {   //significa que a constante "loading" é fora de ordem e não é a primeira a carregar
    const url = "https://musicbrainz.org/ws/2/artist?fmt=json&query=BANDA"; //constante que define o link
    const fetching = await fetch(url); //a constante fetching usa o await para receber a resposta url
    const jsoned = await fetching.json(); //serve para converter o código para objeto/JSON
    console.log(jsoned);
    console.log(jsoned.artists[0])
    console.log(jsoned.artists[0].area.name)
    for (let i = 0; i < jsoned.artists.length; i++) {  //FOR cria repetições, let i = 0 declara o número, i < do que o tamanho(lenght) da tabela sobre artistas e o i++ -> i = i + 1
        document.getElementById("qtBandas").textContent = "BANDAS REGISTRADAS: "+jsoned.artists.length; /*DOCUMENT serve para
        se referir ao arquivo atual, o .GETELEMENTBYID irá pegar o elemento pelo id "qt bandas" e por último o 
        +JSONED.ARTISTS.LENGHT serve para unir o título ""BANDAS REGISTRADAS: "" com o número de artistas encontrados*/
        const diving = document.createElement("div"); //Essa constante cria uma div no arquivo atual
        diving.classList.add("inserted"); //Ele usa o classList para obter a lista de classes e em seguida com ADD ele adiciona uma classe nova.
        document.getElementById("listTable").appendChild(diving); /*No arquivo atual ele
         irá pegar o elemento pelo id "ListTable" e o APPENDCHILD irá chamar o diving*/

        const nmH2 = document.createElement("h2"); // nm da Banda em título h2, através do "document.createElement"
        nmH2.id = i; //define o id baseado no i, ou seja o primeiro[0].
        nmH2.classList.add("txtFont");//Ele irá adicionar a classe "txtFont" que se relaciona com o nmH2
        nmH2.classList.add("nmDsgn"); //Ele irá adicionar a classe "nmDsgn" que se relaciona com o nmH2
        if (jsoned.artists[i].name != null){  //Se o nome/código do artista for DIFERENTE(!=) de nulo ou inexistente
            nmH2.textContent = jsoned.artists[i].name; //Esse comando irá define o código/nome do artista em TEXTO
        }
        else{ //caso contrário o texto definido irá exibir "Banda Desconhecida"
            nmH2.textContent = "Banda Desconhecida";
        }
        diving.appendChild(nmH2); //Esse código irá trazer o nmH2 para o diving

        const labelArea = document.createElement("label"); //  no arquivo atual, ele cria o elemento "Label" é um <p> diferente
        labelArea.classList.add("txtFont"); //ele irá adicionar a classe "TxtFont"
        labelArea.classList.add("halfed"); //ele adiciona a classe "halfed" no LABELAREA.
        if (jsoned.artists[i].area != null){                        //se area(país) for diferente de null ou inexiste...
            labelArea.textContent = "Local Origem: "+jsoned.artists[i].area.name; //Ele irá exibir que o nome do local(país).
        }
        else{               //Caso contrário exiba "Local Origem: desconhecido"
            labelArea.textContent = "Local Origem: desconhecido";
        }
        diving.appendChild(labelArea); //Ele irá trazer através do APPENDCHILD o labelArea para o diving

        const labelVD = document.createElement("label"); // no documento atual ele irá criar "label"/texto na constante labelVD
        labelVD.classList.add("txtFont"); //adiciona a classe "txtFont" no labelVD
        labelVD.classList.add("halfed"); //adiciona a classe "halfed" no labelVD
        if (jsoned.artists[i]["life-span"] != null && jsoned.artists[i]["life-span"].ended != null){
            labelVD.textContent = " | Vida Útil: Não";
        }
        else{
            labelVD.textContent = " | Vida Útil: Sim";
        }
        diving.appendChild(labelVD);

        const h3ID = document.createElement("h4"); // id do Artista
        h3ID.classList.add("txtFont");
        if (jsoned.artists[i].id != null){
            h3ID.textContent = "ID: "+jsoned.artists[i].id
            /*const urlWork = "https://musicbrainz.org/ws/2/release-group?fmt=json&artist="+jsoned.artists[i].id; // Tentativa de trabalhos do artista via ID 
            const fetchingExtra = await fetch(urlWork);
            const jsonedExtra = await fetchingExtra.json();
            console.log(jsonedExtra)*/
        }
        else{
            h3ID.textContent = "ID: desconhecido";
        }
        diving.appendChild(h3ID);


    }

    document.getElementById("nmArtist").addEventListener('keyup', searching);
};

const searching = () => {
    let stringing = document.getElementById("nmArtist").value;
    let getChildren = document.getElementById("listTable").children;
    let counting = 0;
    for (var i = 0; i < getChildren.length; i++) {
        var otherChild = getChildren[i].children;
        const ilusion = document.createAttribute("hidden");
        getChildren[i].setAttributeNode(ilusion);
        if (otherChild[0].textContent.substring(0,6) == "Banda " || stringing.length <= 0){
            if (otherChild[0].textContent.substring(6,6+stringing.length).toUpperCase() == stringing.toUpperCase()){
                getChildren[i].removeAttribute("hidden");
                counting++;
            }
        }
    }
    document.getElementById("resultQt").textContent = "Quantidade de resultados encontrados: "+counting
};
document.addEventListener('DOMContentLoaded', loading);