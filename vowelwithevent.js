function checkforvowel() {
    userinput = document.getElementById("vowelorno").value;
    useroutput = document.getElementById("answerifvowelorno");
  
    userinputnew = userinput.toLowerCase();
  
    console.log(userinputnew);

    // let letters = /^[a-z]+$/;
  
    // if (userinputnew.match(letters)) {
    //   if (
    //     userinputnew == "a" ||
    //     userinputnew == "e" ||
    //     userinputnew == "i" ||
    //     userinputnew == "o" ||
    //     userinputnew == "u"
    //   ) {
    //     useroutput.value = "The given value is a vowel";
    //   } else {
    //     useroutput.value = "The given value is a consonant";
    //   }
    // }
    // else
    // {
    //   useroutput.value = "Enter a alphabet to get proper response.";
    // }
  }

function checkinput(e){
    console.log("Hello world!");
    console.log(e);


    if (e.keyCode >= 48 && e.keyCode <= 57)
    {
        
    }   
    else
    {
        e.preventDefault();
    }
}