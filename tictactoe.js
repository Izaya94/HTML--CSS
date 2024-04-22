

let step = true;
let count = 0;

function buttonclick(e){
    let topleft = document.getElementById('topleft');
    let topmid = document.getElementById('topmid');
    let topright = document.getElementById('topright');
    let midleft = document.getElementById('midleft');
    let midmid = document.getElementById('midmid');
    let midright = document.getElementById('midright');
    let botleft = document.getElementById('botleft');
    let botmid = document.getElementById('botmid');
    let botright = document.getElementById('botright');

    let steps = e.target;

    if (step == true)
    {
        steps.innerHTML = 'X';
    }
    else
    {
        steps.innerHTML = 'O';
    }

    count += 1;
    step = !step;

    steps.disabled = true;

    // console.log(topleft.innerHTML);

    // if (topleft.innerHTML == 'X' && topmid.innerHTML == 'X' && topright.innerHTML == 'X' || //row
    //     midleft.innerHTML == 'X' && midmid.innerHTML == 'X' && midright.innerHTML == 'X' ||
    //     botleft.innerHTML == 'X' && botmid.innerHTML == 'X' && botright.innerHTML == 'X' || 
    //     topleft.innerHTML == 'X' && midmid.innerHTML == 'X' && botright.innerHTML == 'X' || //diagonal
    //     topright.innerHTML == 'X' && midmid.innerHTML == 'X' && botleft.innerHTML == 'X' ||
    //     topleft.innerHTML == 'X' && midleft.innerHTML == 'X' && botleft.innerHTML == 'X' || //column
    //     topmid.innerHTML == 'X' && midmid.innerHTML == 'X' && botmid.innerHTML == 'X' ||
    //     topright.innerHTML == 'X' && midright.innerHTML == 'X' && botright.innerHTML == 'X'
    // )
    // {
    //     alert('X won');
    // }
    // else if (topleft.innerHTML == 'O' && topmid.innerHTML == 'O' && topright.innerHTML == 'O' || //row
    // midleft.innerHTML == 'O' && midmid.innerHTML == 'O' && midright.innerHTML == 'O' ||
    // botleft.innerHTML == 'O' && botmid.innerHTML == 'O' && botright.innerHTML == 'O' || 
    // topleft.innerHTML == 'O' && midmid.innerHTML == 'O' && botright.innerHTML == 'O' || //diagonal
    // topright.innerHTML == 'O' && midmid.innerHTML == 'O' && botleft.innerHTML == 'O' ||
    // topleft.innerHTML == 'O' && midleft.innerHTML == 'O' && botleft.innerHTML == 'O' || //column
    // topmid.innerHTML == 'O' && midmid.innerHTML == 'O' && botmid.innerHTML == 'O' ||
    // topright.innerHTML == 'O' && midright.innerHTML == 'O' && botright.innerHTML == 'O')
    // {
    //     alert ('O won');
    // }
    if (topleft.innerHTML == topmid.innerHTML && topleft.innerHTML == topright.innerHTML && topleft.innerHTML != '_')
    {
        console.log(topleft.innerHTML + " won");
        alert(topleft.innerHTML + " won");
    }
    else if (midleft.innerHTML == midmid.innerHTML && midleft.innerHTML == midright.innerHTML && midleft.innerHTML != '_')
    {

        alert(midleft.innerHTML + " won");
    }
    else if (botleft.innerHTML == botmid.innerHTML && botleft.innerHTML == botright.innerHTML && botleft.innerHTML != '_')
    {
        alert(botleft.innerHTML + " won");
    }
    else if (topleft.innerHTML == midmid.innerHTML && topleft.innerHTML == botright.innerHTML && topleft.innerHTML != '_')
    {
        alert(topleft.innerHTML + " won");
    }
    else if (topright.innerHTML == midmid.innerHTML && topright.innerHTML == botleft.innerHTML && topright.innerHTML != '_')
    {
        alert(topright.innerHTML + " won");
    }
    else if (topleft.innerHTML == midleft.innerHTML && topleft.innerHTML == botleft.innerHTML && topleft.innerHTML != '_')
    {
        alert(topleft.innerHTML + " won");
    }
    else if (topmid.innerHTML == midmid.innerHTML && topmid.innerHTML == botmid.innerHTML && topmid.innerHTML != '_')
    {
        alert(topmid.innerHTML + " won");
    }
    else if (topright.innerHTML == midright.innerHTML && topright.innerHTML == botright.innerHTML && topright.innerHTML != '_')
    {
        alert(topright.innerHTML + " won");
    }
    else if (count == 9)
    {
        alert('Draw');
    }
}   

function reset1(){
    // topleft = document.getElementById('topleft') = "";
    // topmid = document.getElementById('topmid') = "";
    // topright = document.getElementById('topright') = "";
    // midleft = document.getElementById('midleft') = "";
    // midmid = document.getElementById('midmid') = "";
    // midright = document.getElementById('midright') = "";
    // botleft = document.getElementById('botleft') = "";
    // botmid = document.getElementById('botmid') = "";
    // botright = document.getElementById('botright') = "";

    t = document.getElementById('top');
    // console.log(t);
    mid = document.getElementById('mid');
    bot = document.getElementById('bot');

    topchildren = t.children;
    midchildren = mid.children;
    botchildren = bot.children;

    // console.log(topchildren.length);
    // console.log(midchildren);
    // console.log(botchildren);

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
    // game = document.getElementById('game');

    // game.disabled = false;

    // gametop = game.children[0];

    // console.log(gametop);

    count = 0;

} 