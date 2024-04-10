function textareaexec(){
    textarea1 = document.getElementById("textarea1");

    for (let i=1;i<=10;i++)
    {
        textarea1.value += "\n" + (i);
        console.log("Hello");
    }
}