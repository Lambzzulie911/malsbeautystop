// Accordion
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.classList.toggle("active");
    });
});

// Lightbox for gallery with toggle behavior
const galleryImages = document.querySelectorAll(".lightbox-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const caption = lightbox.querySelector(".lightbox-caption");
let currentImageSrc = "";

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        if (lightbox.style.display === "flex" && lightboxImg.src === img.src) {
            lightbox.style.display = "none";
            lightboxImg.src = "";
            currentImageSrc = "";
        } else {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            if (caption) caption.textContent = img.alt;
            currentImageSrc = img.src;
        }
    });
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImg.src = "";
        currentImageSrc = "";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
        lightboxImg.src = "";
        currentImageSrc = "";
    }
});
const closeGalleryBtn = document.getElementById("closeGalleryBtn");
const gallerySection = document.getElementById("gallery");

closeGalleryBtn.addEventListener("click", () => {
  gallerySection.style.display = "none";
  document.getElementById("showGalleryBtn").style.display = "block"; // Optionally show button again
});
document.getElementById("showGalleryBtn").style.display = "block";

// Form Validation
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








