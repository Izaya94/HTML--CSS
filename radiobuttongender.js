
function selectedgender(){
    // let gender = document.getElementsByName("gender").checked;

    let male = document.getElementById("male");
    // let female = document.getElementById("female");

    if (male.checked){
        document.getElementById("printdata").value = "Gender is male";
    }
    else{
        document.getElementById("printdata").value = "Gender is female";
    }

    

    // for(i=0;i<gender.length;i++){
    //     if (gender[i].checked){
    //         document.getElementById("printdata").value = "Gender is " + gender[i].value;
    //     }
    // }
    
}