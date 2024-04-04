window.onload = (event) => {
    console.log("page is fully loaded");
    document.getElementById("subject").selectedIndex = -1;
  };
  


function getSelectedValue() {
    let selectedValue = document.getElementById("subject").value;
    alert("The selected value is: " + selectedValue);
}
