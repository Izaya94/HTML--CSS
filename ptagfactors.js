
function checkuserinput(){
    userinput = +document.getElementById("userinput").value;

    numberoffactors = document.getElementById("numberoffactors");

    isnumberprime = document.getElementById("isnumberprime");

    let amtoffactors = 0;
    for(let i=1;i<=userinput;i++)
    {
        if (userinput%i == 0)
        {
            document.getElementById('factorpara').innerHTML += (i) + ", " ;
            amtoffactors += 1; 
        }
        numberoffactors.value = amtoffactors;
    }
    if (amtoffactors > 2)
    {
        isnumberprime.value = ("not prime"); 
    }
    else
    {
        isnumberprime.value = ("prime");
    }
}


function clearuserinput(){
    
    document.getElementById("userinput").value = "";

    document.getElementById("factorpara").innerHTML = "";

    document.getElementById("numberoffactors").value = "";

    document.getElementById("isnumberprime").value = "";
}