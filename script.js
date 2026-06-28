const timeIds = ["time-t4","time-t3","time-t1","time-t45","time-t40","time-t30","time-t15","time-t10","time-t5","time-t0"];
const offsets = [-240, -180, -60, -45, -40, -30, -15, -10, -5, 0];

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
        alert("Please enter your race start time and hit Go first.");
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
        logging: false
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "zwift-race-day-timeline.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

        btn.textContent = "⬇ Download";
        btn.disabled = false;
    }).catch(() => {
        alert("Sorry, download failed. Try taking a screenshot instead.");
        btn.textContent = "⬇ Download";
        btn.disabled = false;
    });
}

function shareTimeline() {
    const shareData = {
        title: "Zwift Race Day Timeline",
        text: "My personalised Zwift race day countdown — built with Jack Brown Endurance",
        url: "https://jackbrownendurance.github.io/zwift-race-day-planner/"
    };

    if (navigator.share) {
        navigator.share(shareData).catch(() => {});
    } else {
        navigator.clipboard.writeText(shareData.url).then(() => {
            const btn = document.querySelector(".share-btn");
            btn.textContent = "✓ Link Copied";
            setTimeout(() => { btn.textContent = "↗ Share"; }, 2000);
        }).catch(() => {
            alert("Share link: https://jackbrownendurance.github.io/zwift-race-day-planner/");
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    timeIds.forEach(id => document.getElementById(id).classList.add("placeholder"));

    document.getElementById("raceTime").addEventListener("keydown", function (e) {
        if (e.key === "Enter") generateTimeline();
    });
});
