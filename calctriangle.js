

function anglesubmit(){
    a1 = +document.getElementById("angle1").value;
    a2 = +document.getElementById("angle2").value;
    a3 = +document.getElementById("angle3").value;

    angleanswer1 = document.getElementById("angleanswer1");
    angleanswer2 = document.getElementById("angleanswer2");
    // console.log(a1 + a2 + a3 );
    if (a1 + a2 + a3 == 180 ){
        angleanswer1.value = "This triangle is valid";

        if (a1 > 90 || a2 > 90 || a3 > 90){
            angleanswer2.value = ("This is an obtuse triangle");
        }
        else if (a1 == 90 || a2 == 90 || a3 == 90){
            angleanswer2.value = ("This is a right angled triangle");
        }
        else {
            angleanswer2.value = ("This is an acute triangle");
        }
    }
    else {
        angleanswer1.value = "This triangle is invalid";

        angleanswer2.value = "";
    }

}



function measuresubmit(){

    a1 = +document.getElementById("measure1").value;
    a2 = +document.getElementById("measure2").value;
    a3 = +document.getElementById("measure3").value;    
    
    measureanswer1 = document.getElementById("measureanswer1");
    measureanswer2 = document.getElementById("measureanswer2");

    if (a1 >= a2 && a1 >= a3) {
        if (a1 >= a2 + a3){
            measureanswer1.value = ("This triangle is invalid");
            measureanswer2.value = "";
        }
        else if (a1 < a2 + a3){
            measureanswer1.value = ("This triangle is valid");
            if (a1 === a2 &&  a1 === a3 && a2 === a3){
                measureanswer2.value = ("This is a equilateral triangle");
            }           
            else if (a1 == a2 && a1 != a3 || a1 == a3 && a1 != a2|| a2 == a3 && a1 != a3){
                measureanswer2.value = ("This is a isoceles triangle");
            }
            else if (a1 != a3 && a2 != a3 && a1 != a2){
                measureanswer2.value = ("This is a scalene triangle");
            }
        }
    }
    else if (a2 >= a1 && a2 >= a3) {
        if (a2 >= a1 + a3){
            measureanswer1.value = ("This triangle is invalid");
            measureanswer2.value = "";
        }
        else if (a2 < a1 + a3){
            measureanswer1.value = ("This triangle is valid");
            if (a1 === a2 === a3){
                measureanswer2.value = ("This is a equilateral triangle");
            }           
            else if (a1 == a2 && a1 != a3 || a1 == a3 && a1 != a2|| a2 == a3 && a1 != a3){
                measureanswer2.value = ("This is a isoceles triangle");
            }
            else if (a1 != a3 && a2 != a3 && a1 != a2){
                measureanswer2.value = ("This is a scalene triangle");
            }
        }
    }
    if (a3 >= a1 && a3 >= a2) {
        if (a3 >= a2 + a1){
            measureanswer1.value = ("This triangle is invalid");
            measureanswer2.value = "";
        }
        else if (a3 < a2 + a1){
            measureanswer1.value = ("This triangle is valid");
            if (a1 === a2 === a3){
                measureanswer2.value = ("This is a equilateral triangle");
            }           
            else if (a1 == a2 && a1 != a3 || a1 == a3 && a1 != a2|| a2 == a3 && a1 != a3){
                measureanswer2.value = ("This is a isoceles triangle");
            }
            else if (a1 != a3 && a2 != a3 && a1 != a2){
                measureanswer2.value = ("This is a scalene triangle");
            }
        }
    }

}