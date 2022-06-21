function display(value){
    document.getElementById("display").value += value;
}

   function calculation() {
    var p = document.getElementById("display").value;
    var q = eval(p);
    document.getElementById("display").value = q;
   }

function clear(){
    document.getElementById("display").value = " ";
}