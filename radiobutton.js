

function selectgender(){

    let male = document.getElementById("male");

    if (male.checked){
        document.getElementById("selectgender").value = "Gender is male";
    }
    else{
        document.getElementById("selectgender").value = "Gender is female";
    }
    console.log("asdqwdqwda");
}
function selectedsemester(){
    let sem1 = document.getElementById("semester1");
    let sem2 = document.getElementById("semester2");
    let sem3 = document.getElementById("semester3");
    let sem4 = document.getElementById("semester4"); 

    if(sem1.checked){
        document.getElementById("selectedsemester").value = "Semester 1 is selected.";
    }
    else if (sem2.checked){
        document.getElementById("selectedsemester").value = "Semester 2 is selected.";
    }
    else if (sem3.checked){
        document.getElementById("selectedsemester").value = "Semester 3 is selected.";
    }
    else{
        document.getElementById("selectedsemester").value = "Semester 4 is selected.";
    }
    console.log("qwewqewqeq");
}

function selectedsubject(){
    let sub1 = document.getElementById("php");
    let sub2 = document.getElementById("java");
    let sub3 = document.getElementById("c#"); 

    if(sub1.checked){
        document.getElementById("selectedsubject").value = "PHP is selected.";
    }
    else if (sub2.checked){
        document.getElementById("selectedsubject").value = "Java is selected.";
    }
    else{
        document.getElementById("selectedsubject").value = "C# is selected.";
    }
}

function selectedall(){
    document.getElementById("selectedall").value = document.getElementById("selectgender").value + ", " + document.getElementById("selectedsemester").value + ", "+ document.getElementById("selectedsubject").value;
}
