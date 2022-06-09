document.getElementById("growBtn").addEventListener("click", function(){
    document.getElementById("box").style.height = "500px";})
    
document.getElementById("colorBtn").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";})

document.getElementById("fade").addEventListener("click", function(){
    document.getElementById("box").fadeout("slow");})

    document.getElementById("resetBtn").addEventListener("click", function() {
        document.getElementById("box").style.backgroundColor = "red";
        document.getElementById("box").style.height = "150px";
        document.getElementById("box").style.width = "150px";
      });