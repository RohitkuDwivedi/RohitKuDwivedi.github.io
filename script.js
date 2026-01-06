async function loadGallery() {
    const gallery = document.getElementById("gallery");

    try {
        const response = await fetch("description.json");
        const descriptions = await response.json();

        for (let key in descriptions) {
            const imgPath = `photos/${key}.jpeg`;

            const itemDiv = document.createElement("div");
            itemDiv.className = "gallery-item";

            const img = document.createElement("img");
            img.src = imgPath;
            img.alt = key;

            const desc = document.createElement("div");
            desc.className = "description";
            desc.textContent = descriptions[key];

            itemDiv.appendChild(img);
            itemDiv.appendChild(desc);

            itemDiv.onclick = () => openModal(imgPath, descriptions[key]);

            gallery.appendChild(itemDiv);
        }

    } catch (error) {
        gallery.innerHTML = "<p>Error loading gallery</p>";
    }
}

function openModal(image, description) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");

    modal.style.display = "block";
    modalImage.src = image;
    modalDescription.textContent = description;
}

document.getElementById("close").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

window.onclick = (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

loadGallery();
