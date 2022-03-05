

async function showOtherProjects(){
    // We'll need to create a new div for the other projects, 
    const otherProjects = document.createElement("div");
    otherProjects.setAttribute("id", "otherProjects");
    document.body.querySelector("#main").appendChild(otherProjects);
    // First, we need to retrieve the data from the json file
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


    // Lastly lastly, we need to get rid of the button
    var buttonElement = document.getElementById("threeDShowOtherProjects");
    buttonElement.parentNode.removeChild(buttonElement);

}

// Now we need to show the projects once we click the button
document.getElementById("threeDShowOtherProjects").addEventListener("click", showOtherProjects);