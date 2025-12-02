//mobile toggle
const navItems = document.querySelectorAll("nav li");

// If navigation exists, make items clickable for mobile
navItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".portfolio-box").classList.toggle("open");
    });
});





// Create the progress bar dynamically
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.background = "rgb(16, 77, 220)";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";
document.body.appendChild(progressBar);

// Update bar on scroll
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
});


// Select inputs
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const msgInput = document.querySelector('input[type="message"]');




const msgDiv = document.createElement("div");
msgDiv.style.textAlign = "center";
msgDiv.style.marginTop = "10px";
msgDiv.style.fontWeight = "bold";

document.querySelector(".table-container").appendChild(msgDiv);

// Validate on input
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
