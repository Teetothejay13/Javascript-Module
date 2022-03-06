

async function showOtherProjects(){
    // We'll need to create a new div for the other projects, 
    const otherProjects = document.createElement("div");
    otherProjects.setAttribute("id", "otherProjects");
    document.body.querySelector("#main").appendChild(otherProjects);

    // First, we need to retrieve the data from the first json file
    var origamiHarryPotter = await fetch('./3D-harry-potter.json').then(res => res.json());
    // Then, we need to create the elements we're going to be entering.
    const origamiHarryPotterTitle = origamiHarryPotter.name;
    const origamiHarryPotterDescription = origamiHarryPotter.description;
    var origamiHarryPotterTutorial = origamiHarryPotter.tutorial;
    // For many of the 3D projects, there won't be a tutorial, so...
    if (origamiHarryPotterTutorial == "None") {
        origamiHarryPotterTutorial = "There is no tutorial for this project.";
    }
    const origamiHarryPotterImage = origamiHarryPotter.img;
    // Now we need to get the div we created, and insert the new items
    document.getElementById("otherProjects").innerHTML += 
    `
    <h2>${origamiHarryPotterTitle}</h2>
    <img id = "origamiHarryPotterImage" src = "${origamiHarryPotterImage}">
    <p>${origamiHarryPotterDescription}</p>
    <a>${origamiHarryPotterTutorial}</a>
    `;
    // Lastly, we need to adjust the margin for the image, so that it doesn't overlap the title
    document.getElementById("origamiHarryPotterImage").style.marginTop = "40px";
    document.getElementById("origamiHarryPotterImage").style.maxWidth = "50%";

    // This is where we divulge from normal-origami.js. We want to add a second project, with a slideshow
    // but we need the info first
    var origamiTanjiro = await fetch('./3D-tanjiro.json').then(res => res.json());

    const origamiTanjiroTitle = origamiTanjiro.name;
    const origamiTanjiroDescription = origamiTanjiro.description;
    var origamiTanjiroTutorial = origamiTanjiro.tutorial;
    if (origamiTanjiroTutorial == "None") {
        origamiTanjiroTutorial = "There is no tutorial for this project.";
    }
    const origamiTanjiroImage1 = origamiTanjiro.img1;
    const origamiTanjiroImage2 = origamiTanjiro.img2;
    const origamiTanjiroImage3 = origamiTanjiro.img3;
    // Now we can add them to the document, with some sorta complicated html
    document.getElementById("otherProjects").innerHTML += 
    `
        <h2>${origamiTanjiroTitle}</h2>
        <!-- Slideshow container -->
        <div class="slideshow-container">
            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade" style = "display: block;">
                <div class="numbertext">1 / 3</div>
                <img id = "origamiTanjiroImage1" src = "${origamiTanjiroImage1}" style = "width: 100%">
            </div>
            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img id = "origamiTanjiroImage2" src = "${origamiTanjiroImage2}" style = "width: 100%">
            </div>
            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img id = "origamiTanjiroImage3" src = "${origamiTanjiroImage3}" style = "width: 100%">
            </div>
            <!-- next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br>
            <!-- image indicators -->
            <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
        <p>${origamiTanjiroDescription}</p>
        <a>${origamiTanjiroTutorial}</a>
    `
    // Lastly lastly, we need to get rid of the button
    var buttonElement = document.getElementById("threeDShowOtherProjects");
    buttonElement.parentNode.removeChild(buttonElement);

}

// Now we need to show the projects once we click the button
document.getElementById("threeDShowOtherProjects").addEventListener("click", showOtherProjects);

// We also need code to control the slideshow
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}