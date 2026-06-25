console.log("Race planner JS loaded");


function generateTimeline() {

    let raceTime = document.getElementById("raceTime").value;

    if (!raceTime) {

        alert("Please enter race start time");

        return;

    }

    let raceStart = new Date(
        "2026-01-01T" + raceTime
    );


    function calculateTime(offset) {

        let eventTime = new Date(
            raceStart.getTime() + (offset * 60000)
        );

        return eventTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    }


    document.getElementById("time-t4").innerHTML =
        calculateTime(-240);

    document.getElementById("time-t3").innerHTML =
        calculateTime(-180);

    document.getElementById("time-t1").innerHTML =
        calculateTime(-60);

    document.getElementById("time-t45").innerHTML =
        calculateTime(-45);

    document.getElementById("time-t40").innerHTML =
        calculateTime(-40);

    document.getElementById("time-t30").innerHTML =
        calculateTime(-30);

    document.getElementById("time-t15").innerHTML =
        calculateTime(-15);

    document.getElementById("time-t10").innerHTML =
        calculateTime(-10);

    document.getElementById("time-t5").innerHTML =
        calculateTime(-5);

    document.getElementById("time-t0").innerHTML =
        calculateTime(0);

}
