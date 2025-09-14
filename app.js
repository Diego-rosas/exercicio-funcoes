const sprintf = require("sprintf-js").sprintf;
const entrada = require('prompt-sync')({sigint:false});

//Função para exibir o menu principal
function mostaMenu() {
    console.log("\n------------------------------------------------------------");
    console.log("        ESCOLHA A FUNÇÃO QUE DESEJA REALIZAR!               ");
    console.log("------------------------------------------------------------");
    console.log("   Menu Principal: ");
    console.log("1. Classificaão de Idade");
    console.log("2. Calculadora de Médias");
    console.log("3. Calculadora de créditos");
    console.log("4. Calculadora de valor total");
    console.log("5. ");
    console.log("6. Sair");
}

//Função 1
function classificaIdade() {
    const idade = parseInt(entrada("Digite a idade: "));

    if(idade >= 5 && idade <= 7) {
        console.log("Nadador da categoria Infantil A.");
    } else if(idade >= 8 && idade <= 10) {
        console.log("Nadador da categoria Infantil B.");
    } else if(idade >= 11 && idade <= 13) {
        console.log("Nadador da categoria Juvenil A.");
    } else if(idade >= 14 && idade <= 17) {
        console.log("Nadador da categoria Juvenil B.");
    } else if(idade >= 18) {
        console.log("Nadador da categoria Adulto.");
    } else if(idade < 5){
        console.log("idade inválida!");
    }
}

//Função 2
function calculaMedia() {
    function menuMedia () {
        console.log("1. Média Aritmética");
        console.log("2. Média Ponderada");
        console.log("3. Média Harmônica");
    }
    
    function mediaAritmetica(nota1, nota2, nota3) {
        return (nota1 + nota2 + nota3) / 3;
    }

    function mediaPonderada(nota1, nota2, nota3) {
        let pesoNota1 = 3;
        let pesoNota2 = 3;
        let pesoNota3 = 4;
        return  ((nota1 * pesoNota1) + (nota2 * pesoNota2) + (nota3 * pesoNota3)) / (pesoNota1 + pesoNota2 + pesoNota3);
    }

    function mediaHarmonica(nota1, nota2, nota3) {
        return (3 / ((1/nota1) + (1/nota2) + (1/nota3)));
    }

    console.log("\nEscolha uma opção de média para calcular!");
    menuMedia()
    opcao = entrada("Digite a opção da média que deseja calcular: ");

    const [n1, n2, n3]= entrada("Digite as três notas(separados por espaço): ").split(" ");
        let nota1 = parseFloat(n1);
        let nota2 = parseFloat(n2);
        let nota3 = parseFloat(n3);

    switch(opcao){
        case "1":
            console.log("Resultado da Média Aritmética: " +  sprintf("%.2f", mediaAritmetica(nota1, nota2, nota3)));
            break;
        case "2":
            console.log("Resultado da Média Ponderada: " +  sprintf("%.2f", mediaPonderada(nota1, nota2, nota3)));
            break;
        case "3":
            console.log("Resultado da Média Harmônica: " +  sprintf("%.2f", mediaHarmonica(nota1, nota2, nota3)));
            break;
        default:
            console.log("Opção inválida!")
    }
}

//Função 3
function saldoMedio() {
    console.log("----- CALCULADORA DE CRÉDITOS -----");
    const saldo = parseInt(entrada("Digite o valor so seu saldo médio: "));

    if(saldo == 0 && saldo <= 200) {
        return console.log(sprintf(" Saldo médio: %f \n Nenhum crédito!" , saldo));
    } else if(saldo >= 201 && saldo <= 400) {
        let credito = saldo * .2;
        return console.log(sprintf(" Saldo médio: %.2f \n Valor do crédito: %.2f!" , saldo, credito));
    }  else if(saldo >= 401 && saldo <= 600) {
        let credito = saldo * .3;
        return console.log(sprintf(" Saldo médio: %.2f \n Valor do crédito: %.2f!" , saldo, credito));
    }   else if(saldo >= 601) {
        let credito = saldo * .4;
        return console.log(sprintf(" Saldo médio: %.2f \n Valor do crédito: %.2f!" , saldo, credito));
    } 
}

//Função 4
function calculaPreco() {
    const precos = [[2,32], [3,45], [4,37], [5,32], [6,45]];

    function menuPrecos() {
        console.log("------- CALCULADORA DE PREÇOS -----------");
        console.log("Código do produto          Preço unitário");
        console.log("       2 ----------------- R$ 32,00");
        console.log("       3 ----------------- R$ 45,00");
        console.log("       4 ----------------- R$ 37,00");
        console.log("       5 ----------------- R$ 32,00");
        console.log("       6 ----------------- R$ 45,00");
    }
    
    menuPrecos();

    let codigoProduto = parseInt(entrada("Digite o código do produto: "));
    let  quantidadeComprada = parseInt(entrada("Digite a quantidade de produtos comprados: "));
    let precoTotal = 0;

    switch(codigoProduto) {
        case 2:
            precoTotal = quantidadeComprada * precos[0][1];
            console.log("Preço total: R$ " + precoTotal + ",00");
            break;
        case 3:
            precoTotal = quantidadeComprada * precos[1][1];
            console.log("Preço total: R$ " + precoTotal + ",00");
            break;
        case 4:
            precoTotal = quantidadeComprada * precos[2][1];
            console.log("Preço total: R$ " + precoTotal + ",00");
            break;    
        case 5:
            precoTotal = quantidadeComprada * precos[3][1];
            console.log("Preço total: R$ " + precoTotal + ",00");
            break;
        case 6:
            precoTotal = quantidadeComprada * precos[4][1];
            console.log("Preço total: R$ " + precoTotal + ",00");
            break;
        default:
            console.log("Opção inválida!");
            break;
    
    }
}

let opcao = "";

while(opcao != "6") {
    mostaMenu();

    opcao = entrada("Digite a opção desejada: ");

    if(opcao == "6"){
        console.log("Programa encerrado!")
        break;
    }

    switch (opcao){
        case "1":
            classificaIdade();
            break;
        case "2":
            calculaMedia();
            break;
        case "3":
            saldoMedio();
            break;
        case "4":
            calculaPreco();
            break;
        default:
            console.log("Opção inválida!")
            break;
    } 
   
}


