
function submitofsubject(){

    let subjects = document.getElementById('subjects');
    let valuefromselect = document.getElementById('valuefromselect');
    
    let selectedoptions = [];

    for(let i = 0; i < subjects.options.length; i++)
    {
        if (subjects.options[i].selected)
        {
            selectedoptions.push(subjects.options[i].value);
        }
    }

    if (selectedoptions.length > 4 || selectedoptions.length < 4)
    {
        valuefromselect.value = ("Select 4 subjects only, no less and no more.");
        return;
    }
    else
    {
        valuefromselect.value = ("Selected Subjects: "+ selectedoptions.join(", "));
    }
    
}