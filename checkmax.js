
function checkmax(){
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    if (a>b){
        document.getElementById("maxnum").value = ("number 1 is greater than number 2.");
    } 
    else if (a<b){
        document.getElementById("maxnum").value = ("number 2 is greater than number 1.");
    }
    else{
        document.getElementById("maxnum").value = ("number 1 & number 2 are equal.");
    }
}