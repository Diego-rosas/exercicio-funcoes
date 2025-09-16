const sprintf = require("sprintf-js").sprintf; // Biblioteca para imprimir textos formatados similar ao Java e C.
const entrada = require('prompt-sync')({sigint:false}); //Biblioteca para ler entrada de dados pelo prompt de comando.

//Função para exibir o menu principal
function mostaMenu() { 
    console.log("\n------------------------------------------------------------");
    console.log("        ESCOLHA A FUNÇÃO QUE DESEJA REALIZAR!               ");
    console.log("------------------------------------------------------------");
    console.log("   Menu Principal: ");
    console.log("1. Classificaão de Idade");
    console.log("2. Calculadora de Médias");
    console.log("3. Calculadora de Créditos");
    console.log("4. Calculadora de Valor Total");
    console.log("5. Calculadora de Salários");
    console.log("6. Sair");
}

//Função 1 - Classificaão de Idade
function classificaIdade() {
    const idade = parseInt(entrada("Digite a idade: ")); //A variavel idade recebe os dados da entrada já convertidos para inteiro.

    if(idade >= 5 && idade <= 7) {  // Estrutura condicional if/else if para fazer a lógica da classificação.
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

//Função 2 - Calculadora de Médias
function calculaMedia() {
    function menuMedia () { // Função para exibir as médias disponíveis para cálculo.
        console.log("1. Média Aritmética");
        console.log("2. Média Ponderada");
        console.log("3. Média Harmônica");
    }
    
    function mediaAritmetica(nota1, nota2, nota3) { //Função para calcular a média aritmética recebendo as 3 notas como parâmetro.
        return (nota1 + nota2 + nota3) / 3;
    }

    function mediaPonderada(nota1, nota2, nota3) { //Função para calcular a média Ponderada recebendo as 3 notas como parâmetro.
        let pesoNota1 = 3;
        let pesoNota2 = 3;
        let pesoNota3 = 4;
        return  ((nota1 * pesoNota1) + (nota2 * pesoNota2) + (nota3 * pesoNota3)) / (pesoNota1 + pesoNota2 + pesoNota3);
    }

    function mediaHarmonica(nota1, nota2, nota3) { //Função para calcular a média Harmônica recebendo as 3 notas como parâmetro.
        return (3 / ((1/nota1) + (1/nota2) + (1/nota3)));
    }

    console.log("\nEscolha uma opção de média para calcular!");
    menuMedia(); //chamando a função para exibir as médias disponíveis.
    let opcao = entrada("Digite a opção da média que deseja calcular: "); //Variável para receber os dados da entrada.

    const [n1, n2, n3]= entrada("Digite as três notas(separados por espaço): ").split(" "); //criação de uma matriz para rebecer as 3 notas digitadas pelo usuáraio.
    let nota1 = parseFloat(n1); // criação das variáveis que vai receber as notas transformadas de String para Float.
    let nota2 = parseFloat(n2);
    let nota3 = parseFloat(n3);

    switch(opcao){ //Estrutura condicional switch para fazer a lógica da escolha das medias.
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

//Função 3 - Calculadora de Créditos
function saldoMedio() {
    console.log("----- CALCULADORA DE CRÉDITOS -----");
    const saldo = parseInt(entrada("Digite o valor so seu saldo médio: ")); //Variavel para receber os dados da entrada já convertidos para inteiro.

    if(saldo == 0 && saldo <= 200) { //Estrutura condicional if/else if para fazer a lógica do cálculo do crédito de acordo com o valor do saldo.
        return console.log(sprintf(" Saldo médio: %f \n Nenhum crédito!" , saldo));
    } else if(saldo >= 201 && saldo <= 400) {
        let credito = saldo * .2;
        return console.log(sprintf(" Saldo médio: %.2f \n Valor do crédito: %.2f" , saldo, credito));
    }  else if(saldo >= 401 && saldo <= 600) {
        let credito = saldo * .3;
        return console.log(sprintf(" Saldo médio: %.2f \n Valor do crédito: %.2f" , saldo, credito));
    }   else if(saldo >= 601) {
        let credito = saldo * .4;
        return console.log(sprintf(" Saldo médio: %.2f \n Valor do crédito: %.2f" , saldo, credito));
    } 
}

//Função 4 - Calculadora de Valor Total
function calculaPreco() {
    const precos = [[2,32], [3,45], [4,37], [5,32], [6,45]]; //Criação de uma matriz 5x2 para guardar as informações da tabela de códigos de produto e preço unitário.

    function menuPrecos() { //Função para exibir a tabela de códigos de produto e preço unitário.
        console.log("------- CALCULADORA DE PREÇOS -----------");
        console.log("Código do produto          Preço unitário");
        console.log("       2 ----------------- R$ 32,00");
        console.log("       3 ----------------- R$ 45,00");
        console.log("       4 ----------------- R$ 37,00");
        console.log("       5 ----------------- R$ 32,00");
        console.log("       6 ----------------- R$ 45,00");
    }
    
    menuPrecos(); //Chama a função para exibir a tabela.

    let codigoProduto = parseInt(entrada("Digite o código do produto: ")); //Variável para receber os dados da entrada já convertidos para inteiro.
    let  quantidadeComprada = parseInt(entrada("Digite a quantidade de produtos comprados: ")); //Variável para recebe os dados da entrada já convertidos para inteiro.
    let precoTotal = 0;

    switch(codigoProduto) { //Estrutura condicional switch para fazer a lógica da escolha do produto e calcular o valor total.
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

//Função 5 - Calculadora de Salários
function calculaSalario() {
    const informacoes = [[101,"Gerente",10], [102,"Engenheiro",20], [103,"Técnico",30]]; //Criação de uma matriz 3x3 para guardar as informações dos Códigos, Cargos e Percentual.

    function tabelaDeCargos() { //Função para exibir a tabela dos Códigos, Cargos e Percentual.
        console.log("------- CALCULADORA DE SALÁRIOS -----------");
        console.log("Código     Cargo            Percentual");
        console.log("101        Gerente          10%");
        console.log("102        Engenheiro       20%");
        console.log("103        Técnico          30%");
    }
    
    tabelaDeCargos(); //Chamando a função para exibir a tabela.

    let  salario = parseFloat(entrada("Digite o seu salário atual: "));  //Variável para receber os dados da entrada já convertidos para Float.
    let codigo = parseInt(entrada("Digite o código do cargo: ")); //Variável para receber os dados da entrada já convertidos para inteiro.
    let salarioAtualizado = 0;

    switch(codigo) { //Estrutura condicional switch para fazer a lógica da escolha dos códigos dos cargos para calcular os salários.
        case 101:
            salarioAtualizado = salario * (1 + (informacoes[0][2] / 100));
            console.log("\nCargo escolhido: " + (informacoes[0][1])); 
            console.log("Salário antigo: R$ " + salario + ",00");
            console.log("Salário atualizado: R$ " + salarioAtualizado + ",00");
            console.log("Diferemça entre os Salários: R$ " + (salarioAtualizado - salario) + ",00");
            break;
        case 102:
            salarioAtualizado = salario * (1 + (informacoes[1][2] / 100));
            console.log("\nCargo escolhido: " + (informacoes[1][1]));
            console.log("Salário antigo: R$ " + salario + ",00");
            console.log("Salário atualizado: R$ " + salarioAtualizado + ",00");
            console.log("Diferemça entre os Salários: R$ " + (salarioAtualizado - salario) + ",00");
            break;
        case 103:
            salarioAtualizado = salario * (1 + (informacoes[2][2] / 100));
            console.log("\nCargo escolhido: " + (informacoes[2][1]));
            console.log("Salário antigo: R$ " + salario + ",00");
            console.log("Salário atualizado: R$ " + salarioAtualizado + ",00");
            console.log("Diferemça entre os Salários: R$ " + (salarioAtualizado - salario) + ",00");
            break;    
        default:
            console.log("\nCargo não listado, você receberá um aumento de 40%!");
            salarioAtualizado = salario * (1 + (40 / 100));
            console.log("Salário antigo: R$ " + salario + ",00");
            console.log("Salário atualizado: R$ " + salarioAtualizado + ",00");
            console.log("Diferemça entre os Salários: R$ " + (salarioAtualizado - salario) + ",00");
            break;
    }
}

let opcao = ""; //Criação da variável para receber a escolha da opção do menu principal.

while(opcao != "6") { //Laço de repetição principal para chamar as funções principais do projeto.
    mostaMenu();

    opcao = entrada("Digite a opção desejada: "); //variável recebendo da entrada a escolha da opção do menu principal.

    if(opcao == "6"){ //Estrutura condicional if/else if para fazer a lógica de saída do laço de repetição e encerrar o programa.
        console.log("Programa encerrado!")
        break;
    }

    switch (opcao){  //Estrutura condicional switch para fazer a lógica da escolha dos códigos das funções principais do projeto.
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
        case "5":
            calculaSalario();
            break;
        default:
            console.log("Opção inválida!")
            break;
    } 
}

