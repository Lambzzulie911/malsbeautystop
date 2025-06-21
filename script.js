
}
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.classList.toggle("active");
    });
});


document.querySelectorAll(".lightbox-img").forEach(img => {
    img.addEventListener("click", () => {
        const viewer = document.querySelector("#lightbox");
        viewer.querySelector("img").src = img.src;
        viewer.style.display = "block";
    });
});

document.querySelector("#lightbox").addEventListener("click", () => {
    document.querySelector("#lightbox").style.display = "none";
});

function validateForm(formId) {
    const form = document.getElementById(formId);
    form.addEventListener("submit", function (e) {
        let valid = true;
        const email = form.querySelector("input[type='email']");
        const phone = form.querySelector("input[name='phone']");
        const message = form.querySelector("textarea");

        if (!/^\d{10}$/.test(phone.value)) {
            alert("Phone must be 10 digits.");
            valid = false;
        }

        if (message.value.length < 10) {
            alert("Message must be at least 10 characters.");
            valid = false;
        }

        if (!valid) e.preventDefault();
    });
}

validateForm("contactForm");
validateForm("enquiryForm");






