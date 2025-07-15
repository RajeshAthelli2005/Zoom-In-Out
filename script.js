let promise = new Promise((resolve, reject) => {
    let img = document.getElementById("zoomableImage");
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Image failed to load"));
}); 
promise.then((img) => {
    console.log("Image loaded successfully", img);  
}).catch((error) => {
    console.error("Error loading image:", error);
});
document.getElementById("zoomIn").addEventListener("click", () => {
    let img = document.getElementById("zoomableImage");
    let currentWidth = img.clientWidth;
    img.style.width = (currentWidth * 1.2) + "px";
});
document.getElementById("zoomOut").addEventListener("click", () => {
    let img = document.getElementById("zoomableImage");
    let currentWidth = img.clientWidth;
    img.style.width = (currentWidth / 1.2) + "px";
});
document.getElementById("resetZoom").addEventListener("click", () => {  
    let img = document.getElementById("zoomableImage");
    img.style.width = "100%"; // Reset to original size
});
document.addEventListener("DOMContentLoaded", () => {   
    let img = document.getElementById("zoomableImage");
    img.style.width = "100%"; // Set initial width to 100%
});
document.addEventListener("DOMContentLoaded", () => {
    let img = document.getElementById("zoomableImage");
    img.style.width = "100%"; // Set initial width to 100%
});
document.addEventListener("DOMContentLoaded", () => {
    let img = document.getElementById("zoomableImage");
    img.style.width = "100%"; // Set initial width to 100%
});