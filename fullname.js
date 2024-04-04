    

function updatedata(){


    let data = document.getElementById("fullname").value;
    console.log(data);
    
    
    let textinner = document.getElementById("paragraph").innerText = data;
    let texthtml = document.getElementById("paragraph").innerHTML;

    console.log(texthtml);
    console.log(textinner);
}

function clickthis(){
    console.log("Hello");
}

function myFunction() {
    document.getElementById("demo").style.color = "red";
  }