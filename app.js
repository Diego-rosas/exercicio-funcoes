const sprintf = require("sprintf-js").sprintf;
const entrada = require('prompt-sync')({sigint:false});

//Função para exibir o menu principal
function mostaMenu() {
    console.log("\n------------------------------------------------------------");
    console.log("        ESCOLHA A FUNÇÃO QUE DESEJA REALIZAR!               ");
    console.log("------------------------------------------------------------");

    console.log("\n Menu Principal: ");
    console.log("1. Classificaão de Idade");
    console.log("2. Calculadora de Médias");
    console.log("3.");
    console.log("4. ");
    console.log("5. Sair");
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
function saldoMedio(saldo) {
    if(saldo == 0 && saldo <= 200) {
        return sprintf(" Saldo médio: %f \n\n Nenhum crédito!" , saldo);
    } else if(saldo >= 201 && saldo <= 400) {
        let credito = saldo * .2;
        return sprintf(" Saldo médio: %.2f \n\n Valor do crédito: %.2f!" , saldo, credito);
    }  else if(saldo >= 401 && saldo <= 600) {
        let credito = saldo * .3;
        return sprintf(" Saldo médio: %.2f \n\n Valor do crédito: %.2f!" , saldo, credito);
    }   else if(saldo >= 601) {
        let credito = saldo * .4;
        return sprintf(" Saldo médio: %.2f \n\n Valor do crédito: %.2f!" , saldo, credito);
    } 
}



let opcao = "";

while(opcao != "5") {
    mostaMenu();

    opcao = entrada("Digite a opção desejada: ");

    if(opcao == "5"){
        console.log("Programa encerrado!")
        break;
    }
    
    // const [n1, n2] = entrada("Digite dois numeros(separados por espaço): ").split(" ");
    // let numero1 = parseFloat(n1);
    // let numero2 = parseFloat(n2);

    switch (opcao){
        case "1":
            classificaIdade();
            break;
        case "2":
            calculaMedia();
            break;
        case "3":
            console.log("Resultado da Multiplicação: " + multiplicacao(numero1,numero2));
            break;
        case "4":
            if(numero2 == 0) {
                console.log("Não é possível dividir por zero!");
            } else {
                console.log("Resultado da Divisão: " + divisao(numero1,numero2));
            }
            break;
        default:
            console.log("Opção inválida!")
            break;
    } 
   
}

// process.stdout.write('\x1B[2J\x1B[0f');
//process.stdout.write('\x1Bc');