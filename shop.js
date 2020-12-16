var money = 50;
function infinite() {
  while (true) {
    var moneyamnt = document.getElementById('money-amount');
  
    money++;
    moneyamnt.textContent = money.toString();
  }
}