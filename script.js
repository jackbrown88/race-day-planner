function generateTimeline() {
    const raceTimeValue = document.getElementById("raceTime").value;

    if (!raceTimeValue) {
        alert("Please enter your race start time.");
        return;
    }

    const raceStart = new Date("2000-01-01T" + raceTimeValue);

    function timeAt(offsetMinutes) {
        const t = new Date(raceStart.getTime() + offsetMinutes * 60000);
        return t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    document.getElementById("time-t4").textContent  = timeAt(-240);
    document.getElementById("time-t3").textContent  = timeAt(-180);
    document.getElementById("time-t1").textContent  = timeAt(-60);
    document.getElementById("time-t45").textContent = timeAt(-45);
    document.getElementById("time-t40").textContent = timeAt(-40);
    document.getElementById("time-t30").textContent = timeAt(-30);
    document.getElementById("time-t15").textContent = timeAt(-15);
    document.getElementById("time-t10").textContent = timeAt(-10);
    document.getElementById("time-t5").textContent  = timeAt(-5);
    document.getElementById("time-t0").textContent  = timeAt(0);
}

// Allow Enter key to trigger
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("raceTime").addEventListener("keydown", function (e) {
        if (e.key === "Enter") generateTimeline();
    });
});
