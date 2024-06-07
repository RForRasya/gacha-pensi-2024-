document.getElementById('generateBtn').addEventListener('click', () => {
    const min = 1;
    const max = 850; // You can adjust the range as needed
    const randomNumber = Math.floor(Math.random() * (max - min + 5)) + min;
    document.getElementById('result').textContent = `Congratulation To..: ${randomNumber}`;

});

function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  document.getElementById('generatez').addEventListener('click', function() {
    // Disable the button to prevent multiple clicks
    this.disabled = true;

    // Set a timer for 10 seconds
    var timer = setTimeout(function() {
        // Re-enable the button after 10 seconds
        document.getElementById('clickButton').disabled = false;
        console.log("No number found within 10 seconds.");
    }, 10000);

    // Start generating random numbers and check if any meets the criteria
    var interval = setInterval(function() {
        var randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
        console.log("Generated number: " + randomNumber);

        // Check if the generated number meets your criteria
        if (randomNumber % 2 === 0) { // Example criteria: divisible by 2
            clearTimeout(timer); // Stop the timer
            clearInterval(interval); // Stop generating numbers
            console.log("Number found within 10 seconds: " + randomNumber);
            // Perform your desired action here
            // For example, display the number or do something else
            document.getElementById('clickButton').disabled = false; // Re-enable the button
        }
    }, 500); // Generate a number every 0.5 seconds
});