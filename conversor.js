document.getElementById('currency-form').addEventListener('submit', function (event){

    event.preventDefault();

 // obter valores de entrada do formulário
 const valor = parseFloat(document.getElementById('Valor').value);
 const daMoeda = document.getElementById('daMoeda').value;
 const paraMoeda = document.getElementById('paraMoeda').value;

 // definir taxa de câmbio fixa com utilização de objeto

 const exchangeRates = {
    USD: {EUR:0.93, BRL:5.71 },
    BRL: {EUR:0.16, USD:0.18 },
    EUR: {BRL:6.16, USD:1.08 }
 };
let valorConvertido

 if (daMoeda === paraMoeda){
    valorConvertido = valor;
}else{  valorConvertido = valor * exchangeRates [daMoeda][paraMoeda];       
    }
    let conversao = document.getElementById('conversao');
    conversao.textContent = `resultado ${valorConvertido} ` ;

 });