document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const passengers = document.getElementById("passengers").value;
        const flightCheckbox = document.querySelector('input[name="flight"]');

        
        if (name === "" || phone === "") {
            alert("Contact name and phone number cannot be empty.");
            return;
        }

        
        const numPassengers = parseInt(passengers, 10);
        if (isNaN(numPassengers) || numPassengers < 1 || numPassengers > 15) {
            alert("Number of travelers must be between 1 and 15.");
            return;
        }

        
        if (flightCheckbox.checked) {
            const confirmation = confirm("Do you want to purchase flight tickets?");
            if (confirmation) {
                alert("You have chosen to purchase flight tickets.");
            }
        }

        
    });
});
