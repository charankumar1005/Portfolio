document.addEventListener("DOMContentLoaded", function () {
    // Progress Bar Animation
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        setTimeout(() => {
            bar.style.width = level + "%"; // Set progress bar width dynamically
        }, 500);
    });

    // Form Submission to Google Sheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyGgltGakNssYi_RGFwxNL7oWnD08GFwnMHPlSqgMq2Uf_OlRI45gNNI_cBnmXYRc_o1g/exec';
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Fetch form values
        const formData = new FormData(form);

        fetch(scriptURL, { method: "POST", body: formData })
            .then(response => {
                if (response.ok) {
                    alert("Thank you! Your message has been sent successfully.");
                    form.reset(); // Clear the form after submission
                } else {
                    throw new Error("Failed to send message.");
                }
            })
            .catch(error => {
                alert("Error sending message: " + error.message);
            });
    });
});
