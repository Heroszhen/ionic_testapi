(function() {
   
 
 })();
/*
 document.querySelectorAll("div.navmenu").addEventListener("click",function(){
    alert("ok")
});
*/
function openNav(){
    //document.querySelector(".navmenu").style.width = "100%";
    document.querySelectorAll(".navmenu").forEach(e=>{
        e.style.marginLeft = 0;
    });  
}

function closeNav() {
    //document.querySelector(".navmenu").style.transition = ".9s";
    document.querySelectorAll(".navmenu").forEach(e=>{
        e.style.marginLeft = "-3000px";
    });
   
}