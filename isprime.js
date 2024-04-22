
function output(){
    let inputval = +document.getElementById("userinput").value;

    debugger;
    inputval = Math.abs(inputval);

    submit = document.getElementById("showoutput"); 

    newinputval = inputval+1;

    newnewinputval = newinputval + 1;

    count = 0;

    for(let i=newinputval; i <= newnewinputval; i++)
    {
        if (totalfactors(i) == 2){
            console.log(i);
            submit.value = ("The next prime number is : ") + i;
            break;
        }
        newnewinputval += 1;
    }
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


input = document.getElementById("userinput");

input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("mybtn").click();
    }
})
