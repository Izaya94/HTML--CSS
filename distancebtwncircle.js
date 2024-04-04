
function calcdistance(){

    radius = +document.getElementById("radius").value;
    x1 = +document.getElementById("x1").value;
    x2 = +document.getElementById("x2").value;
    y1 = +document.getElementById("y1").value;
    y2 = +document.getElementById("y2").value;

    let distance = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));

    document.getElementById("distance").value = distance;

    if (distance < radius){
        document.getElementById("pointlocation").value = "Point is inside the circle.";
    }
    else if (distance > radius){
        document.getElementById("pointlocation").value = "Point is outside the circle.";
    }
    else{
        document.getElementById("pointlocation").value = "Point is on the circle.";
    }
}