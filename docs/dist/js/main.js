function showButton(){document.getElementById("fontcontroller").style.display="block"}function smallerFont(){document.getElementById("allhtml").style.fontSize="1em"}function biggerFont(){document.getElementById("allhtml").style.fontSize="1.5em"}window.onload=function(){showButton()};let modal=document.getElementById("myModal"),span=document.getElementsByClassName("close")[0];window.addEventListener("offline",function(n){modal.style.display="block"}),window.addEventListener("online",function(n){modal.style.display="none"}),modal&&(span.onclick=function(){modal.style.display="none"},window.onclick=function(n){n.target==modal&&(modal.style.display="none")}),window.addEventListener("online",()=>console.log("came online")),window.addEventListener("offline",()=>console.log("came offline")),console.log("Just a placeholder");