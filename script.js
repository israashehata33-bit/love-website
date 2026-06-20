window.onload = () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},2500);

};

function checkPassword(){

let pass =
document.getElementById("password").value;

if(pass === "1102000"){

document.getElementById("loginPage").style.display = "none";

document.getElementById("content").style.display = "block";

typeWriter();

}else{

alert("Wrong Password ❤️");

}

}

const text =
"حبيت اقولك بحبك بس بطريقتي ❤️";

function typeWriter(){

let i = 0;

document.getElementById("typing").innerHTML="";

let timer = setInterval(()=>{

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(timer);

}

},100);

}

function showGift(){

document.getElementById("giftSection").style.display="block";

}