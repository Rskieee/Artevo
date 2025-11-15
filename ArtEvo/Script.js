// Simple functional examples

// Login form handler
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Login successful! (This is sample functionality)");
    }
});

// Forgot password
document.getElementById("forgotBtn").addEventListener("click", function() {
    alert("Redirecting to password recovery page…");
});

// Create account button
document.getElementById("createBtn").addEventListener("click", function() {
    alert("Redirecting to create account page…");
});
