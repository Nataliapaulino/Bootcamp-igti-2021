 var fslist=document.querySelectorAll(".multiple-field");
 for (var i=0;i<fslist.length; i++){
     initMultipleFieldSet(fslist[i]);
 }
 
 
 function initMultipleFieldSet(fs){
 var addButton=document.createElemente("button");
addButton.textcontent ="adicionar";
addButton.type="button";


 fs.appenchild(addButton);
 addButton.addEventListener("click",function()){
     var newInput=document.createElement("input");
     var div=document.createElement("div");
     div.appendChild(newinput0);
     
     fs.appenchild(div,addButton);
 }
 }