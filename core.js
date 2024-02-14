
var nomeCor;
var pontos = 0;
var vida = 3;
definirCores();
        

function definirCores() {
    nomeCor = Math.floor(Math.random() * 8) + 1; 
    //console.log(nomeCor);

    switch(nomeCor) {
    case 1:
        document.getElementById("palavraCorAtual").innerHTML = "vermelho";
        break;
    case 2:
        document.getElementById("palavraCorAtual").innerHTML = "amarelo";
        break;
    case 3:
        document.getElementById("palavraCorAtual").innerHTML = "azul";
        break;
    case 4:
        document.getElementById("palavraCorAtual").innerHTML = "verde";
        break;
    case 5:
        document.getElementById("palavraCorAtual").innerHTML = "laranja";
        break;
    case 6:
        document.getElementById("palavraCorAtual").innerHTML = "roxo";
        break;
    case 7:
        document.getElementById("palavraCorAtual").innerHTML = "rosa";
        break;
    case 8:
        document.getElementById("palavraCorAtual").innerHTML = "preto";
        break;
    }

    var j = Math.floor(Math.random() * 8) + 1; 
    //console.log(j);

    switch(j) {
    case 1:
        document.getElementById("envelope").style.backgroundColor = "red";
        break;
    case 2:
        document.getElementById("envelope").style.backgroundColor = "yellow";
        break;
    case 3:
        document.getElementById("envelope").style.backgroundColor = "blue";
        break;
    case 4:
        document.getElementById("envelope").style.backgroundColor = "green";
        break;
    case 5:
        document.getElementById("envelope").style.backgroundColor = "orange";
        break;
    case 6:
        document.getElementById("envelope").style.backgroundColor = "purple";
        break;
    case 7:
        document.getElementById("envelope").style.backgroundColor = "pink";
        break;
    case 8:
        document.getElementById("envelope").style.backgroundColor = "black";
        break;
    }

    var k = j;
    while(k == j) {
        k = Math.floor(Math.random() * 8) + 1; 
    }
    
    //console.log(k);

    switch(k) {
    case 1:
        document.getElementById("fundoCorAtual").style.background = "red";
        break;
    case 2:
        document.getElementById("fundoCorAtual").style.background = "yellow";
        break;
    case 3:
        document.getElementById("fundoCorAtual").style.background = "blue";
        break;
    case 4:
        document.getElementById("fundoCorAtual").style.background = "green";
        break;
    case 5:
        document.getElementById("fundoCorAtual").style.background = "orange";
        break;
    case 6:
        document.getElementById("fundoCorAtual").style.background = "purple";
        break;
    case 7:
        document.getElementById("fundoCorAtual").style.background = "pink";
        break;
    case 8:
        document.getElementById("fundoCorAtual").style.background = "black";
        break;
    }
}

function verficarEscolha(id){
    if(id == nomeCor) {
        definirCores();
        pontos += 1;
        document.getElementById("pontos").innerHTML = pontos;
    } else{
        vida -= 1;
        document.getElementById("vida").innerHTML = vida;
        if(vida == 0){
            document.getElementById("home").setAttribute("href", "home.html?id=" + pontos);
            document.getElementById("home").click();
        } else{
            definirCores();
        }
    }
}