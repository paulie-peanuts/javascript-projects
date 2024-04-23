function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    missionAbort.addEventListener('mouseover', function() {
        missionAbort.style.background = "red";
    });
    missionAbort.addEventListener('mouseout', function() {
        missionAbort.style.background = "";
    });  
    missionAbort.addEventListener('click', function() {
        if (confirm('Are you sure you want to abort the mission?')) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home';
        }
    });   
}

window.addEventListener("load", init);
