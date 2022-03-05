// With this, I will create and add new items to the normal origami page, as if they had been submitted by
// others, and I was approving them. They will appear below the projects that are already part of the html
// file. However, we only want to display them if the user wants to, so we will have a button to indicate
// that desire.

// First we need to declare a function to add the items to the document, only called when a button is pressed
async function showOtherProjects(){
    // We'll need to create a new div for the other projects, 
    const otherProjects = document.createElement("div");
    otherProjects.setAttribute("id", "otherProjects");
    document.body.querySelector("#main").appendChild(otherProjects);
    // First, we need to retrieve the data from the json file
    var origamiHeart = await fetch('./normal-heart.json').then(res => res.json());
    // Then, we need to create the elements we're going to be entering.
    const origamiHeartTitle = origamiHeart.name;
    const origamiHeartDescription = origamiHeart.description;
    const origamiHeartTutorial = origamiHeart.tutorial;
    const origamiHeartImage = origamiHeart.img;
    // Now we need to get the div we created, and insert the new items
    document.getElementById("otherProjects").innerHTML += 
    `
    <h2>${origamiHeartTitle}</h2>
    <img id = "origamiHeartImage" src = "${origamiHeartImage}">
    <p>${origamiHeartDescription}</p>
    <a href = "${origamiHeartTutorial}">${origamiHeartTutorial}</a>
    `;
    // Lastly, we need to adjust the margin for the image, so that it doesn't overlap the title
    document.getElementById("origamiHeartImage").style.marginTop = "40px";
    // Lastly lastly, we need to get rid of the button
    var buttonElement = document.getElementById("showProjectsButton");
    buttonElement.parentNode.removeChild(buttonElement);
    
    
    
}

// Now we need to show the projects once we click the button
document.getElementById("showProjectsButton").addEventListener("click", showOtherProjects);