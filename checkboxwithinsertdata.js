
window.onload = (event) => {
    console.log("page is fully loaded");
    document.getElementById("cars").selectedIndex = -1;
  };
  

function getSelectedValue() {
    let selectedValue = document.getElementById("cars").value;
    alert("The selected value is: " + selectedValue);
}

