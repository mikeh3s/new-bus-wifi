let i = 0;
let images = [];
let time = 3000;

// Image List
images[0] = '../../advertisement/images/had1.jpg';
images[1] = '../../advertisement/images/had2.jpg';
images[2] = '../../advertisement/images/had3.jpg';

// Change Image

function changeImg(){
    document.slide.src = images[i];

    if (i < images.length -1)
    {
        i++;
    }
    else
    {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;