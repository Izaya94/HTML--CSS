function checkforvowel() {
    userinput = document.getElementById("vowelorno").value;
    useroutput = document.getElementById("answerifvowelorno");
  
    userinputnew = userinput.toLowerCase();
  
    console.log(userinputnew);

    switch(userinputnew){
      case 'a':
        useroutput.value = ("vowel");
        break;
      case 'e':
        useroutput.value = ("vowel");
        break;
      case 'i':
        useroutput.value = ("vowel");
        break;
      case'o':
        useroutput.value = ("vowel");
        break;
      case 'u':
        useroutput.value = ("vowel");
        break;
      default:
        useroutput.value = ("consonant");
        break;

    }
  }
  