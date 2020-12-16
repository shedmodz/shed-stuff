var money = 50;
function addmoney() {
  var moneyamnt = document.getElementById('money-amount');
  
  money++;
  moneyamnt.textContent = money.toString();
}
function openshop(){
  document.getElementById('shop').style.display = "block";
}
function closeshop(){
  document.getElementById('shop').style.display = "none";
}