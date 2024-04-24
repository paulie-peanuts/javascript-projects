// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeoff = document.getElementById('takeoff');
    const landing = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');
    rocket.style.position = "absolute";
    // rocket.style.left = "0px";
    // rocket.style.bottom = "0px";
    
    
    takeoff.addEventListener('click', function(event) {
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            flightStatus.innerHTML = 'Shuttle in flight';
            shuttleBackground.style.background = 'blue';
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        };
    });
    landing.addEventListener('click', function(event) {
        if (confirm('The shuttle is landing. Landing gear engaged.')) {
            flightStatus.innerHTML = 'The shuttle is landed';
            shuttleBackground.style.background = 'green';
            spaceShuttleHeight.innerHTML = 0;
        };
    });
    missionAbort.addEventListener('click', function(event) {
        if (confirm('Confirm that you want to abort the mission.')) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.background = 'green';
            spaceShuttleHeight.innerHTML = 0;
        };
    });

    up.addEventListener('click', function(event) {
        if (parseInt(rocket.style.bottom) < 250) {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });
    down.addEventListener('click', function(event) {
        if (parseInt(rocket.style.bottom) > 0) {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        }
    });
    left.addEventListener('click', function(event) {
        if (parseInt(rocket.style.left) > 0) {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        // console.log(parseInt(rocket.style.left))
        // spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });
    right.addEventListener('click', function(event) {
        // console.log((rocket.style.left))

        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        // spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });

    // console.log(parseInt(rocket.style.bottom))
    // console.log(Number(spaceShuttleHeight.innerHTML)+100)
    // console.log
    // console.log(rocket.style.bottom)
}
document.addEventListener("click", function(event) {
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
    // right.addEventListener('click', function(event) {
        // console.log((rocket.style.left))
    if (event.target.id === "right" && parseInt(rocket.style.left) < (bkgWidth / 2 - 40)) {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";

    }
        // spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    // });
})
function resetRocket() {

}
window.addEventListener('load', init)
