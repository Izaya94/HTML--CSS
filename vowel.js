
function checkforvowel(){
    userinput = document.getElementById("vowelorno").value;
    useroutput = document.getElementById("answerifvowelorno");

    userinputnew = userinput.toLowerCase();

    console.log(userinputnew);

    if (userinputnew == 'a' || userinputnew == 'e' || userinputnew == 'i' || userinputnew == 'o' || userinputnew == 'u')
    {
        useroutput.value = ("The given value is a vowel");
    }
    else 
    {
        useroutput.value = ("The given value is a consonant");
    }
}