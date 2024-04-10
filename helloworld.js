function buttonpress(){
    console.log("Hello World");
}

eventTarget = document.getElementById("testkeydown");

eventTarget.addEventListener("keydown", () => {
        console.log("Hello World!");
    });
  