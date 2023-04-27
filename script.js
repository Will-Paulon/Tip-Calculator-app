const conta = document.getElementById ("bill");
const pessoas = document.getElementById ("people");
const CustoPessoaPorcentagem = document.getElementById ("custom");
const tipAmount = document.getElementById ("titulo__pt1");
const tipPerson = document.getElementById ("titulo__pt2");
const resetButton = document.getElementById ("resetBnt");
const billAmount = document.querySelectorAll ("agrupamento__bnt button");


//Calculate Tip
function calculateTip(conta, tipPercentage, pessoas) {
    let tipAmount = (conta * (tipPercentage / 100)) / pessoas;
    let tip = Math.floor(titulo__pt1 * 100) / 100;
    tip = tip.toFixed(2);
  
    let totalAmount = (titulo__pt1 * pessoas + conta) / pessoas;
    totalAmount = totalAmount.toFixed(2);
  
    titulo__pt1.innerHTML = `$${tip}`;
    tipPerson.innerHTML = `$${totalAmount}`;
  }