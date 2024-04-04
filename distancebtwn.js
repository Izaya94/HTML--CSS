
function finddistance(){
    x1 = +document.getElementById("x1").value;
    x2 = +document.getElementById("x2").value;
    y1 = +document.getElementById("y1").value;
    y2 = +document.getElementById("y2").value;

    let distance1 = (x2-x1);
    console.log(distance1);
    let distance2 = (y2-y1);
    console.log(distance2);
    let distance3 = Math.pow(distance1,2);
    console.log(distance3);
    let distance4 = Math.pow(distance2,2);
    console.log(distance4);
    let distance5 = distance3 + distance4;
    console.log(distance5);
    let distance6 = Math.sqrt(distance5);
    console.log(distance6);

    let distance = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));

    // qwe = Math.pow((x2-x1), 2);
    // console.log(qwe);
    // console.log(Math.pow((x2-x1), 2)) + (Math.pow((y2-y1), 2));


    document.getElementById("distance").value = distance;
    console.log(distance);
}   