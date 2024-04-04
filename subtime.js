
function secondsToTime(){
    // console.log("1231qwew");
    seconds = +document.getElementById("seconds").value;

    hours = Math.floor(seconds/3600);
    newseconds = seconds % 3600;
    document.getElementById("hours").value = hours; 

    minutes = Math.floor(newseconds/60);
    newerseconds = newseconds % 60;
    document.getElementById("minutes").value = minutes; 

    document.getElementById("secondss").value = newerseconds; 

    // hours = Math.floor(seconds/3600);
    // newseconds = seconds - (hours*3600);
    // document.getElementById("hours").value = hours; 

    // minutes = Math.floor(newseconds/60);
    // newerseconds = newseconds - (minutes*60);
    // document.getElementById("minutes").value = minutes; 

    // document.getElementById("secondss").value = newerseconds; 

    // if (seconds > 3600){
    //     hours = Math.floor(seconds/3600);
    //     newseconds = seconds - (hours*3600);
    //     document.getElementById("hours").value = hours; 
        
    //     if(newseconds >= 60){
    //         minutes = Math.floor(newseconds/60);
    //         newerseconds = newseconds - (minutes*60);
    //         document.getElementById("minutes").value = minutes; 
    //     }
    //     if (newerseconds > 0)
    //     {
    //         document.getElementById("secondss").value = newerseconds; 
    //     }
    // }
    // else if (seconds < 3600 && seconds >= 60) {
    //         minutes = Math.floor(seconds/60);
    //         newseconds = seconds - (minutes*60);
    //         document.getElementById("minutes").value = minutes; 
    //         if (newseconds > 0)
    //         {
    //             document.getElementById("secondss").value = newseconds; 
    //         }
    // }
    // else 
    // {
    //     document.getElementById("secondss").value = seconds; 
    // }



    // console.log(hours);
    // console.log(newseconds);

}