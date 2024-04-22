
function list(type) {
    let html = `<${type}l><li>`;
    const args = Array.prototype.slice.call(arguments, 1);
    html += args.join("</li><li>");
    html += `</li></${type}l>`; // end list
    return html;
}


function clearuserinput(){
    
    // document.getElementById("userinput").value = "";

    document.getElementById("paragraph").innerHTML = "";

}

function checkuserinput(){

    let ordered = document.getElementById("ordered");

    if (ordered.checked){
        // Call the list function with the type of list you want ('u' for unordered or 'o' for ordered) and the list items as arguments
        const myList = list('o', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5');
        // You can then insert the generated HTML into your document wherever you need it
        document.getElementById('paragraph').innerHTML = myList;
    }
    else{
        // Call the list function with the type of list you want ('u' for unordered or 'o' for ordered) and the list items as arguments
        const myList = list('u', 'Item 1', 'Item 2', 'Item 3');
        // You can then insert the generated HTML into your document wherever you need it
        document.getElementById('paragraph').innerHTML = myList;
    }
}