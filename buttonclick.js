

let count = 1;
let step = false;
function button1(e) {

    console.log(e.target);
    console.log(e);

    let x = e.target;
    
    if (step == false){
        x.innerHTML = 'X';
        // step = true;
    }
    else {
        x.innerHTML = 'O';
        // step = false;
    }
    
    step = !step;
    x.disabled = true;

    // let button1 = document.getElementById('button1');


    // if (count % 2 == 0) {
    //     button1.innerHTML = 'O';
    //     count += 1;
    //     debugger;
    // }
    // else {
    //     button1.innerHTML = 'X';
    //     count += 1;
    //     debugger;
    }
