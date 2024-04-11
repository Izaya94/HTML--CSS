
function checkuserinput(){
    userinput = +document.getElementById("userinput").value;

    numberoffactors = document.getElementById("numberoffactors");

    isnumberprime = document.getElementById("isnumberprime");

    newparagraph = document.createElement("p");

    document.getElementById("paradiv").appendChild(newparagraph);

    newparagraph.setAttribute("id", "factorpara");

    ulist = document.createElement("ul");
    document.getElementById("factorpara").appendChild(ulist);
    ulist.setAttribute("id", "factorul"); 

    let amtoffactors = 0;

    for(let i=1;i<=userinput;i++)
    {
        if (userinput%i == 0)
        {
            const li = document.createElement("li");
            li.innerText = i;
            document.getElementById("factorul").appendChild(li);
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

    document.getElementById("numberoffactors").value = "";

    document.getElementById("isnumberprime").value = "";
}