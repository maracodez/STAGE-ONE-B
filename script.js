const btn = document.getElementById("toggleBtn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
    // text.classList.toggle("show");
    // btn.textContent = text.classList.contains("show") ? "Read less" : "Read more"


    if (text.style.display = "none") {
        text.style.display = "block";
        btn.textContent = "Read less"
    } else {
        btn.textContent = "Read more"
        text.style.display = "block"
    }

})



function updateUTCTime() {
    const utcTimeElement = document.querySelector(".current-time");

    function refreshTime() {
        const now = new Date();
        utcTimeElement.textContent = "Time: " + now.toTimeString();
    }

    // Update immediately when the page loads
    refreshTime();

    // Set an interval to update the time every second
    setInterval(refreshTime, 1000);
}

// Call the function when the page loads
updateUTCTime();
