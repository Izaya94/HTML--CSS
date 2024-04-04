
function daysubmit(){
    daynum = +document.getElementById("daynum").value;

    dayoutput = document.getElementById("dayoutput");

    switch(daynum){
        case 1:
            dayoutput.value = ("Sunday"); 
            break;
        case 2:
            dayoutput.value = ("Monday");
            break;
        case 3:
            dayoutput.value = ("Tuesday");
            break;
        case 4:
            dayoutput.value = ("Wednesday");
            break;
        case 5:
            dayoutput.value = ("Thursday");
            break;
        case 6:
            dayoutput.value = ("Friday");
            break;
        case 7:
            dayoutput.value = ("Saturday");
            break;
        default:
            dayoutput.value = ("Please enter between 1 and 7");
        
    }



    // if (daynum == 1)
    // {
    //     dayoutput.value = ("Sunday"); 
    // } 
    // else if (daynum == 2)
    // {
    //     dayoutput.value = ("Monday"); 
    // }
    
    // else if (daynum == 3)
    // {
    //     dayoutput.value = ("Tuesday"); 
    // }
    
    // else if (daynum == 4)
    // {
    //     dayoutput.value = ("Wednesday"); 
    // }
    
    // else if (daynum == 5)
    // {
    //     dayoutput.value = ("Thursday"); 
    // }
    
    // else if (daynum == 6)
    // {
    //     dayoutput.value = ("Friday"); 
    // }
    
    // else if (daynum == 7)
    // {
    //     dayoutput.value = ("Saturday"); 
    // }

    // else {
    //     dayoutput.value = ("Please enter between 1 and 7");
    // }
}

