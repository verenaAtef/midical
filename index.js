var arrowleft=document.getElementsByClassName("arrowleft")[0];
var arrowright=document.getElementsByClassName("arrowright")[0];
var hiddenDoctor1=document.getElementsByClassName("hiddenDoctor1")[0];
var hiddenDoctor5=document.getElementsByClassName("hiddenDoctor5")[0];
hiddenDoctor1.style.display="none";
arrowright.style.color="#008fe2";
arrowright.style.border="#008fe2 solid 3px";
arrowleft.addEventListener("click",function(){
hiddenDoctor5.style.display="none";
arrowleft.style.color="#008fe2";
arrowleft.style.border="#008fe2 solid 3px";
hiddenDoctor1.style.display="block";
arrowright.style.color="#2d529f";
arrowright.style.border="#2d529f solid 3px";
})
arrowright.addEventListener("click",function(){
    hiddenDoctor1.style.display="none";
    arrowright.style.color="#008fe2";
    arrowright.style.border="#008fe2 solid 3px";
    hiddenDoctor5.style.display="block";
    arrowleft.style.color="#2d529f";
    arrowleft.style.border="#2d529f solid 3px";
    })
    
    

