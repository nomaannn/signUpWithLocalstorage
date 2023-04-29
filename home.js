let emailUser = document.getElementById('emailUser')
let password = document.getElementById('password')
let fullname = document.getElementById('fullname')
let green = document.getElementById('green')


fullname.innerHTML = localStorage.getItem("name1");
password.innerHTML = localStorage.getItem("pass1");
emailUser.innerHTML = localStorage.getItem("email1");
token1 = localStorage.getItem("token");


function logout(){
    localStorage.clear()
    window.location.href = "./index.html";
}
console.log(token1);



function signUp(){
    if(localStorage.getItem("token1")!==null){
        green.innerHTML = "<div class='greenText'>User Already login</div>"
      }
   else{
       window.location.href = "./home.html";
   }
}
