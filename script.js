alert("Race planner loaded");


function generateTimeline(){

    let raceTime = document.getElementById("raceTime").value;


    if (!raceTime) {
        alert("Please enter race start time");
        return;
    }


    let raceStart = new Date(
        "2026-01-01T" + raceTime
    );


    let events = [
        {
            label: "T−4:00",
            name: "Check urine colour & hydrate",
            offset: -240
        },
        {
            label: "T−3:00",
            name: "High-carbohydrate meal",
            offset: -180
        },
        {
            label: "T−1:00",
            name: "Caffeine (optional)",
            offset: -60
        },
        {
            label: "T−45",
            name: "Setup pain cave",
            offset: -45
        },
        {
            label: "T−40",
            name: "Carbohydrate snack & hydrate",
            offset: -40
        },
        {
            label: "T−30",
            name: "Warm-up begins",
            offset: -30
        },
        {
            label: "T−15",
            name: "Priming efforts",
            offset: -15
        },
        {
            label: "T−10",
            name: "Neural activation",
            offset: -10
        },
        {
            label: "T−5",
            name: "Easy spin & hydrate",
            offset: -5
        },
        {
            label: "T−0",
            name: "Race start",
            offset: 0
        }
    ];


    let output = "";


    events.forEach(event => {


        let eventTime = new Date(
            raceStart.getTime() + event.offset * 60000
        );


        let formattedTime = eventTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });


        output += `
        
        <div class="plan-item">

            <h3>
                ${event.label} — ${formattedTime}
            </h3>

            <p>
                ${event.name}
            </p>

        </div>

        `;

    });


    document.getElementById("timeline").innerHTML = output;

}
