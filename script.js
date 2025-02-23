document.addEventListener("DOMContentLoaded", function() {
    const imgElement = document.createElement("img");
    imgElement.width = 300;
    document.body.appendChild(imgElement);

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            imgElement.src = data.message;
        })
        .catch(error => console.error("Error fetching dog image:", error));
});

document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    document.body.style.backgroundColor = `rgb(${x * 255}, ${y * 255}, 200)`;
});