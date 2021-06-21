function login1(){
    alert("Log in to make transaction");
    location.replace('user_account.html');
    return true;
}

function login2(){
    alert("Log in to see transaction history");
    location.replace('user_account.html');
    return true;
}

document.getElementById('user_name').value = "";
function loggedin(){
    var vname = "shriniwaaz";
    var iname = document.getElementById('user_name').value;
    vname = vname.toLowerCase();
    iname = iname.toLowerCase();
    if(vname == iname){
      var result = "transactions.html";
      window.location = result;
    }
    else{
      alert("Invalid User Name");
    }
}