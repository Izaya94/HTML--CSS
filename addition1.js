

function add(){

    let x = +document.getElementById("1num").value;
    let y = +document.getElementById("2num").value;
    console.log(x + y);
}

function reset(){
    // console.log(10);
    let x = document.getElementById("1num");
    x.value = "";
    let y = document.getElementById("2num");
    y.value = "";
    x.focus();
}

function sub(){
    let x = +document.getElementById("1num").value;
    let y = +document.getElementById("2num").value;
    console.log(x - y);
}


function div(){
    let x = +document.getElementById("1num").value;
    let y = +document.getElementById("2num").value;
    console.log(x / y);
}


function rem(){
    let x = +document.getElementById("1num").value;
    let y = +document.getElementById("2num").value;
    console.log(x % y);
}
