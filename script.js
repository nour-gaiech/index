 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

header {
    background-color: #1f2937;
    color: white;
    padding: 1.5rem;
    text-align: center;
}

header h1 {
    margin-bottom: 1rem;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color .3s;
}

nav a:hover {
    color: #60a5fa;
}

section {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: white;
    border-radiu…
[1:31 AM, 21/06/2026] +216 28 049 995: script.js
[1:32 AM, 21/06/2026] +216 28 049 995: document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("show");
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    document.querySelectorAll(".project-card img").forEach(image => {

        image.addEventListener("click", () => {

            const modal = document.createElement("div");

            modal.className = "lightbox";

            modal.innerHTML = `
                <img src="${image.src}" alt="${image.alt}">
            `;

            document.body.appendChild(modal);

            modal.addEventListener("click", () => {
                modal.remove();
            });

        });

    });

    const form = document.querySelector("form");

    form.addEventListener("submit", e => {

        e.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            alert("Please complete all fields.");
            return;
        }

        alert("Message sent successfully.");
        form.reset();
    });

    document.querySelectorAll("input, textarea").forEach(field => {

        field.addEventListener("input", () => {

            field.style.borderColor =
                field.value.trim() === ""
                    ? "red"
                    : "green";

        });

    });

});

function filterProjects(category) {

    document.querySelectorAll(".project-card").forEach(project => {

        if (
            category === "all" ||
            project.dataset.category === category
        ) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });

}
