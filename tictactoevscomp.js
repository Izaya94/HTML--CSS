
let step = 1;
let countnumber = 0;
let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');

function buttonclick(e) {

    console.log(e.target);

    let buttonclick = e.target;

    if (step % 2 == 0) {
        buttonclick.innerHTML = 'O';
    }
    else {
        buttonclick.innerHTML = 'X';
    }

    countnumber += 1;
    step += 1;

    buttonclick.disabled = true;


    if (cell1.innerHTML == 'X' && cell2.innerHTML == 'X' && cell3.innerHTML == 'X' || //row
        cell4.innerHTML == 'X' && cell5.innerHTML == 'X' && cell6.innerHTML == 'X' ||
        cell7.innerHTML == 'X' && cell8.innerHTML == 'X' && cell9.innerHTML == 'X' ||
        cell1.innerHTML == 'X' && cell5.innerHTML == 'X' && cell9.innerHTML == 'X' || //diagonal
        cell3.innerHTML == 'X' && cell5.innerHTML == 'X' && cell7.innerHTML == 'X' ||
        cell1.innerHTML == 'X' && cell4.innerHTML == 'X' && cell7.innerHTML == 'X' || //column
        cell2.innerHTML == 'X' && cell5.innerHTML == 'X' && cell8.innerHTML == 'X' ||
        cell3.innerHTML == 'X' && cell6.innerHTML == 'X' && cell9.innerHTML == 'X'
        
    ) {
        alert('X won');
        cell1.disabled = true;
        cell2.disabled = true;
        cell3.disabled = true;
        cell4.disabled = true;
        cell5.disabled = true;
        cell6.disabled = true;
        cell7.disabled = true;
        cell8.disabled = true;
        cell9.disabled = true;
        return;
    }
    else if (cell1.innerHTML == 'O' && cell2.innerHTML == 'O' && cell3.innerHTML == 'O' || //row
        cell4.innerHTML == 'O' && cell5.innerHTML == 'O' && cell6.innerHTML == 'O' ||
        cell7.innerHTML == 'O' && cell8.innerHTML == 'O' && cell9.innerHTML == 'O' ||
        cell1.innerHTML == 'O' && cell5.innerHTML == 'O' && cell9.innerHTML == 'O' || //diagonal
        cell3.innerHTML == 'O' && cell5.innerHTML == 'O' && cell7.innerHTML == 'O' ||
        cell1.innerHTML == 'O' && cell4.innerHTML == 'O' && cell7.innerHTML == 'O' || //column
        cell2.innerHTML == 'O' && cell5.innerHTML == 'O' && cell8.innerHTML == 'O' ||
        cell3.innerHTML == 'O' && cell6.innerHTML == 'O' && cell9.innerHTML == 'O') {
        alert('O won');
        cell1.disabled = true;
        cell2.disabled = true;
        cell3.disabled = true;
        cell4.disabled = true;
        cell5.disabled = true;
        cell6.disabled = true;
        cell7.disabled = true;
        cell8.disabled = true;
        cell9.disabled = true;
        return;

    }

    computerStep();

}


console.log(step);


function computerStep() {
    let emptyCells = [];

    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById('cell' + i);
        if (cell.innerHTML === '_') {
            emptyCells.push(cell);
        }
    }

    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let randomCell = emptyCells[randomIndex];
    randomCell.innerHTML = 'O';
    randomCell.disabled = true;
    countnumber += 1;
    step += 1;

    if (cell1.innerHTML == 'X' && cell2.innerHTML == 'X' && cell3.innerHTML == 'X' || //row
        cell4.innerHTML == 'X' && cell5.innerHTML == 'X' && cell6.innerHTML == 'X' ||
        cell7.innerHTML == 'X' && cell8.innerHTML == 'X' && cell9.innerHTML == 'X' ||
        cell1.innerHTML == 'X' && cell5.innerHTML == 'X' && cell9.innerHTML == 'X' || //diagonal
        cell3.innerHTML == 'X' && cell5.innerHTML == 'X' && cell7.innerHTML == 'X' ||
        cell1.innerHTML == 'X' && cell4.innerHTML == 'X' && cell7.innerHTML == 'X' || //column
        cell2.innerHTML == 'X' && cell5.innerHTML == 'X' && cell8.innerHTML == 'X' ||
        cell3.innerHTML == 'X' && cell6.innerHTML == 'X' && cell9.innerHTML == 'X'
    ) {
        cell1.disabled = true;
        cell2.disabled = true;
        cell3.disabled = true;
        cell4.disabled = true;
        cell5.disabled = true;
        cell6.disabled = true;
        cell7.disabled = true;
        cell8.disabled = true;
        cell9.disabled = true;
        alert('X won');
        return;
    }
    else if (cell1.innerHTML == 'O' && cell2.innerHTML == 'O' && cell3.innerHTML == 'O' || //row
        cell4.innerHTML == 'O' && cell5.innerHTML == 'O' && cell6.innerHTML == 'O' ||
        cell7.innerHTML == 'O' && cell8.innerHTML == 'O' && cell9.innerHTML == 'O' ||
        cell1.innerHTML == 'O' && cell5.innerHTML == 'O' && cell9.innerHTML == 'O' || //diagonal
        cell3.innerHTML == 'O' && cell5.innerHTML == 'O' && cell7.innerHTML == 'O' ||
        cell1.innerHTML == 'O' && cell4.innerHTML == 'O' && cell7.innerHTML == 'O' || //column
        cell2.innerHTML == 'O' && cell5.innerHTML == 'O' && cell8.innerHTML == 'O' ||
        cell3.innerHTML == 'O' && cell6.innerHTML == 'O' && cell9.innerHTML == 'O') {
        alert('O won');
        cell1.disabled = true;
        cell2.disabled = true;
        cell3.disabled = true;
        cell4.disabled = true;
        cell5.disabled = true;
        cell6.disabled = true;
        cell7.disabled = true;
        cell8.disabled = true;
        cell9.disabled = true;
        return;
    }


}

function reset1(){


    topcells = document.getElementById('top');
    midcells = document.getElementById('mid');
    botcells = document.getElementById('bot');

    topchildren = topcells.children;
    midchildren = midcells.children;
    botchildren = botcells.children;

    for( let i = 0; i < topchildren.length ; i++ ) {
        topchildren[i].disabled = false;
        topchildren[i].innerHTML = '_';
    }
  
    for( let i = 0; i < midchildren.length ; i++ )
    {
        midchildren[i].disabled = false;
        midchildren[i].innerHTML = '_';
    }
    
    for( let i =0; i < botchildren.length ; i++ ){
        botchildren[i].disabled = false;
        botchildren[i].innerHTML = '_';
    }

    count = 0;

} 