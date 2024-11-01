# Conversor de Moedas

A aplicação permite ao usuário inserir um valor e selecionar uma moeda de origem e uma moeda de destino para realizar a conversão. Utilizando taxas de câmbio, o sistema calcula e exibe o valor convertido. O objetivo deste projeto é oferecer uma interface de conversão rápida e prática.

_____________________________________________________________________________________________________________________________________________
# Como Usar
* Abra o arquivo HTML em um navegador.
* Digite o valor que deseja converter.
* Escolha a moeda de origem e a moeda de destino.
* Clique em "Converter" para visualizar o resultado.
* Clique em "Limpar" para redefinir o formulário e inserir novos valores.
_____________________________________________________________________________________________________________________________________________
# Arquivo JS
![Alt text](<img/Captura de tela 2024-10-30 111304.png>)

# PARTE 1
  * Obtém um valor numérico: Ele pega o valor de um elemento HTML com o ID 'Valor', converte esse valor em um número de ponto flutuante (decimal) usando parseFloat.

  * Obtém valores de moeda: Ele também captura os valores selecionados em dois outros elementos HTML com os IDs 'daMoeda' e 'paraMoeda', que geralmente seriam usados para identificar a moeda de origem e a moeda de destino em uma conversão de moeda.

  Em resumo, o código coleta um valor numérico e duas moedas para realizar uma conversão de moeda mais adiante.
  _____________________________________________________________________________________________________________________________________________
  
  # PARTE 2
* Esse código define um objeto chamado exchangeRates, que contém as taxas de câmbio entre três moedas: USD (dólar americano), BRL (real brasileiro) e EUR (euro).

 A estrutura é a seguinte:

Para cada moeda (USD, BRL e EUR), são especificadas as taxas de câmbio em relação às outras moedas.
Por exemplo, de USD para EUR é 0.93, o que significa que 1 USD equivale a 0.93 EUR.
De BRL para EUR, a taxa é 0.16, significando que 1 BRL equivale a 0.16 EUR.
Isso pode ser usado para realizar conversões de uma moeda para outra, utilizando as taxas fornecidas. Se você precisar de mais informações ou de um exemplo de uso, é só avisar!
_____________________________________________________________________________________________________________________________________________
 # PARTE 3 
 Esta parte do código é parte de uma função que realiza a conversão de um valor monetário de uma moeda para outra com base em taxas de câmbio armazenadas em um objeto chamado exchangeRates.


  # Tecnologias utilizadas
 * HTML
 * JS
 * CSS
 _____________________________________________________________________________________________________________________________________________

# Autores
* Ricardo Siena
