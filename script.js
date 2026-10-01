// ==============================
// Appointment Form
// ==============================

const appointmentForm = document.getElementById("appointmentForm");

const formMessage = document.getElementById("formMessage");


appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value;


    if (name === "") {

        formMessage.textContent = "Please enter your name.";

        return;
    }


    if (phone.length !== 10 || isNaN(phone)) {

        formMessage.textContent =
            "Please enter a valid 10-digit phone number.";

        return;
    }


    if (service === "") {

        formMessage.textContent =
            "Please select a service.";

        return;
    }


    formMessage.innerHTML =
    "<strong>Appointment Request Received!</strong><br>" +
    "Thank you " + name + ".<br>" +
    "Service: " + service + "<br>" +
    "We will contact you soon.";

formMessage.classList.add("success-message");
appointmentForm.reset();
});


// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelectorAll("nav a");


menuBtn.addEventListener("click", function() {

    navLinks.forEach(function(link) {

        if (link.style.display === "block") {

            link.style.display = "none";

        } else {

            link.style.display = "block";

        }

    });

});
// ==============================
// Back To Top Button
// ==============================

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});