
function submit(){
    let mobile = document.getElementById("mobile");

    let web = document.getElementById("web");

    let desktop = document.getElementById("desktop");




    if (mobile.checked && web.checked && desktop.checked){
        document.getElementById("selectiontext").value = ("Mobile, Web, Desktop");
    } else if (mobile.checked && web.checked){
        document.getElementById("selectiontext").value = ("Mobile, Web");
    } else if (mobile.checked && desktop.checked){
        document.getElementById("selectiontext").value = ("Mobile, Desktop");
    } else if (web.checked && desktop.checked){
        document.getElementById("selectiontext").value = ("Web, Desktop");
    } else if (mobile.checked) {
        document.getElementById("selectiontext").value = ("Mobile");
    } else if (web.checked) {
        document.getElementById("selectiontext").value = ("Web");
    } else if (desktop.checked) {
        document.getElementById("selectiontext").value = ("Desktop");
    }
}

function clearing(){
    document.getElementById("desktop").checked = false;
    document.getElementById("mobile").checked = false;
    document.getElementById("web").checked = false;
    document.getElementById("selectiontext").value = "";
}