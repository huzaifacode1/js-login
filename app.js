alert("explain@gmail.com"+""+12345)
var useremail = document.getElementById('email').value
var userpassword = document.getElementById('password').value
var login = document.getElementById('btn')
login.addEventListener('click',()=>{
    var useremail = document.getElementById('email').value
var userpassword = document.getElementById('password').value
if(useremail == 'explain@gmail.com' && userpassword == 12345){
 alert('welcome')
 window.location ='index.html'
}
else{
   alert('try agin')
}
})