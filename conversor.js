document.getElementById('currency-form').addEventListener('submit', function (event){

    event.preventDefault();


// PARTE 1 

 // obter valores de entrada do formulário
 const valor = parseFloat(document.getElementById('Valor').value);
 const daMoeda = document.getElementById('daMoeda').value;
 const paraMoeda = document.getElementById('paraMoeda').value;

 // PARTE 2

 // definir taxa de câmbio fixa com utilização de objeto

 const exchangeRates = {
    USD: {EUR:0.93, BRL:5.71 },
    BRL: {EUR:0.16, USD:0.18 },
    EUR: {BRL:6.16, USD:1.08 }
 };

 // PARTE 3 

let valorConvertido

 if (daMoeda === paraMoeda){
    valorConvertido = valor;
   }else
   {  valorConvertido = valor * exchangeRates [daMoeda][paraMoeda];}
    let conversao = document.getElementById('conversao');
    conversao.textContent = `resultado ${valorConvertido.toFixed(2)} ` ;
 });