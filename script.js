// Wait until the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("inquiry-form");
    const displayArea = document.getElementById("confirmation-container");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            // Prevent the default browser reload/submission
            event.preventDefault();

            // Extract form field values
            const fullName = document.getElementById("studentName").value.trim();
            const email = document.getElementById("email").value.trim();
            const grade = document.getElementById("gradeLevel").value;
            const message = document.getElementById("notes").value.trim();

            // Hide the original form
            contactForm.style.display = "none";

            // Render the confirmation page state
            displayArea.innerHTML = `
                <div class="confirmation-box">
                    <h2>Application / Inquiry Processed!</h2>
                    <p>Thank you, <strong>${fullName}</strong>. We have received your inquiry for <strong>Grade ${grade}</strong>.</p>
                    <p>A confirmation has been sent to <strong>${email}</strong>.</p>
                    ${message ? `<p><em>Your note:</em> "${message}"</p>` : ""}
                    <br>
                    <button onclick="window.location.reload();">Submit Another Inquiry</button>
                </div>
            `;
        });
    }
});
