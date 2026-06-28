const timeIds = ["time-t4","time-t3","time-t1","time-t45","time-t40","time-t30","time-t15","time-t10","time-t5","time-t0"];
const offsets = [-240, -180, -60, -45, -40, -30, -15, -10, -5, 0];

function generateTimeline() {
    const raceTimeValue = document.getElementById("raceTime").value;
    if (!raceTimeValue) return;

    const raceStart = new Date("2000-01-01T" + raceTimeValue);

    function timeAt(offsetMinutes) {
        const t = new Date(raceStart.getTime() + offsetMinutes * 60000);
        return t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    timeIds.forEach((id, i) => {
        const el = document.getElementById(id);
        el.textContent = timeAt(offsets[i]);
        el.classList.remove("placeholder");
    });
}

function resetTimeline() {
    document.getElementById("raceTime").value = "";
    timeIds.forEach(id => {
        const el = document.getElementById(id);
        el.textContent = "--:--";
        el.classList.add("placeholder");
    });
}

function downloadTimeline() {
    const firstEl = document.getElementById("time-t4");
    if (firstEl.classList.contains("placeholder")) {
        alert("Please enter your race start time first.");
        return;
    }

    const btn = document.querySelector(".download-btn");
    btn.textContent = "Generating...";
    btn.disabled = true;

    const planner = document.getElementById("planner");

    html2canvas(planner, {
        useCORS: true,
        scale: 2,
        backgroundColor: null,
