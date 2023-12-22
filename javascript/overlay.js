// Create an overlay of all images with class zoom

let images = document.getElementsByClassName("zoom");
for (let i = 0; i < images.length; i++) {
     images[i].addEventListener("click", createOverlay);
}

function createOverlay() {
     let overlay = document.createElement("div");
     overlay.id = "lbOverlay";

     // Add the figure box to the overlay
     let figureBox = document.createElement("figure");
     overlay.appendChild(figureBox);

     // Add the image to the figure box
     let overlayImage = this.cloneNode("true");
     figureBox.appendChild(overlayImage);
 
     // Add the caption to the figure box
     let overlayCaption = document.createElement("figcaption");
     overlayCaption.textContent = this.alt;
     figureBox.appendChild(overlayCaption);
 
     // Add a close button to the overlay
     let closeBox = document.createElement("div");
     closeBox.id = "lbOverlayClose";
     closeBox.innerHTML = "&times;";
     closeBox.onclick = function () {
         document.body.removeChild(overlay);
     }
     overlay.appendChild(closeBox);
 
     document.body.appendChild(overlay);
}