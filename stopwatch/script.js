
// Get the HTML elements for hours, minutes, and seconds
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Initialize variables for hour, minute, and second
let hour = 0;
let minute = 0;
let second = 0;

// Boolean variable for timer state
let isTimer = false;

// Function to start the stopwatch
function start() {
    isTimer = true;
    stopWatch();
}

// Function to stop the stopwatch
function stop() {
    isTimer = false;
}

// Function to reset the stopwatch
function reset() {
    isTimer = false;
    hour = 0;
    minute = 0;
    second = 0;
    updateDisplay();
}

// Function to update the display of hours, minutes, and seconds
function updateDisplay() {
    hr.innerText = "00";
    min.innerText = "00";
    sec.innerText = "00";
}

// Function to update the stopwatch every second
function stopWatch() {
    if (isTimer) {
        second++;

        // Increment minute if seconds reach 60
        if (second == 60) {
            minute++;
            second = 0;
        }

        // Increment hour if minutes reach 60
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        // Convert hour, minute, and second to string with leading zero if necessary
        let hString = hour;
        let mString = minute;
        let sString = second;

        if (hour < 10) {
            hString = "0" + hour;
        }

        if (minute < 10) {
            mString = "0" + minute;
        }

        if (second < 10) {
            sString = "0" + second;
        }

        // Update the display with the updated time
        hr.innerText = hString;
        min.innerText = mString;
        sec.innerText = sString;

        // Call the stopWatch function again after 1 second (1000 milliseconds)
        setTimeout(stopWatch, 1000);
    }
}