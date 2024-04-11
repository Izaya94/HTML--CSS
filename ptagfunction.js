
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
        }
        numberoffactors.value = totalfactors(userinput);
        
    }
    isnumberprime.value  = isPrime(userinput);
}



function clearuserinput(){
    
    document.getElementById("userinput").value = "";

    document.getElementById("numberoffactors").value = "";

    document.getElementById("isnumberprime").value = "";
}

function totalfactors(n)
{
    let count = 0;
    for(let i=1;i<=n;i++) 
        if (n%i == 0)
        {
            count += 1;    
        }
    return count;
}

function isPrime(n){

    let x = totalfactors(n);
    return (x==2);
    // if (x == 2)
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }
}

function isPrime1(n){
    for (let i=2;i<=n/2;i++)
    {
        if(n%i == 0)
        {
            return false;
        }
    }
    return true;
}

function factorialfortwo(){

    console.log("The Prime numbers in 2-20 are :");

    for (let i=2;i<=20;i++)
    {
        let a = isPrime(i);
        if(a)
        {
            console.log(i);
        }
        else if (!a)
        {

        }
    }
}
