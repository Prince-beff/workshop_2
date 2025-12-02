// Mobile menu toggle
const menuBtn = document.querySelector(".toggle");
const menuList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("open");
    menuBtn.textContent = menuList.classList.contains("open") ? "✕" : "☰";
});

// Close menu when nav link clicked
const navItems = document.querySelectorAll("nav li");
navItems.forEach(item => {
    item.addEventListener("click", () => {
        menuList.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});

// Create the progress bar
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.background = "rgb(16, 77, 220)";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";
document.body.appendChild(progressBar);

// Update progress bar on scroll
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});

// Contact form validation
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const msgInput = document.querySelector('input[placeholder="Your message"]');

const msgDiv = document.createElement("div");
msgDiv.style.textAlign = "center";
msgDiv.style.marginTop = "10px";
msgDiv.style.fontWeight = "bold";
document.querySelector(".table-container").appendChild(msgDiv);

function validateForm() {
    if (nameInput.value === "" || emailInput.value === "" || msgInput.value === "") {
        msgDiv.style.color = "red";
        msgDiv.textContent = "Fill the Contact Box";
    } else {
        msgDiv.style.color = "green";
        msgDiv.textContent = "Great";
    }
}

// Listen for input changes
[nameInput, emailInput, msgInput].forEach(input => {
    input.addEventListener("input", validateForm);
});
