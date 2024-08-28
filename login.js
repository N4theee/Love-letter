document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (username === "" || password === "") {
        alert("Both fields are required!");
        return;
    }

    // Simulate a successful login
    if (username === "edlynaguilar" && password === "N4the") {
        alert("Login successful! Redirecting...");
        window.location.href = "hays.html"; // Redirect to the new page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});