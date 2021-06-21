function login(){
    alert("You have been logged out");
    return true;
}


let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > parseInt(document.getElementById("myAccountBalance").innerText)) {
      alert("Insufficient Balance.")
   }
   else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Transaction Successful   
      $${enterAmount} is sent to ${enterName} from Shriniwaaz.`);

      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${enterAmount} is sent to recepient ${enterName} on ${Date()} from Shriniwaaz account.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}