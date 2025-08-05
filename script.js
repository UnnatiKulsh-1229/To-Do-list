const input_box=document.getElementById("input_box");
const container=document.getElementById("container");
function addTask(){
    if (input_box.value===''){
        alert("Add your task");
    }
    else{    
        let li=document.createElement("li");
        li.innerHTML=input_box.value;
        list_cont.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_box.value="";

}
list_cont.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);