
let currentimageindex = 1;

function changeimage()
{
    // let image1 = document.getElementById('image1');
    // let image2 = document.getElementById('image2');
    // let image3 = document.getElementById('image3');

    let currentimage = document.getElementById(`image${currentimageindex}`);

    if(currentimage)
    {
        currentimage.hidden = true;

        currentimageindex++;

        let nextimage = document.getElementById(`image${currentimageindex}`);

        if(!nextimage) 
        {
            currentimageindex = 1;
            nextimage = document.getElementById(`image${currentimageindex}`);
        }
        nextimage.hidden = false;
    }
        
}