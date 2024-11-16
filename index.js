// This is JS to create a carousel to shift through the images on the hero page

// Set the counting varible to the first slide
var currentSlide = 1;
carousel();



function carousel()
{
    var i;
    // Get the images from the class
    var x = document.getElementsByClassName("slideshow");
    // For loop to not display certain images
    for(i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    currentSlide++;
    //Verify the slide has not gone over the limit
    if(currentSlide > x.length) 
        {
        currentSlide = 1
        }

    //Display current slide
    x[currentSlide - 1].style.display = "block";
    setTimeout(carousel,3000);
}