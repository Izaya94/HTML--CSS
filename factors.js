
function checkuserinput(){
    userinput = +document.getElementById("userinput").value;

    factorsfromuserdata = document.getElementById("factorsfromuserdata");

    numberoffactors = document.getElementById("numberoffactors");

    isnumberprime = document.getElementById("isnumberprime");

    let amtoffactors = 0;
    for(let i=1;i<=userinput;i++)
    {
        if (userinput%i == 0)
        {
            factorsfromuserdata.value += (i) + "\n" ;
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

    document.getElementById("factorsfromuserdata").value = "";

    document.getElementById("numberoffactors").value = "";

    document.getElementById("isnumberprime").value = "";

}