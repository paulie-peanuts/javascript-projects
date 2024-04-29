//TODO: Add Your Code Below
window.addEventListener("load", function() {
    async function fetchData() {
        let res = await this.fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        let data = await res.json();
        let astro = document.getElementById("astro")
        astro.innerHTML = `hi ${data.length} wonderful space cadets`
        data.sort(function (a, b) {
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
        })
        for (let i=0; i<data.length; i++) {
            container.innerHTML += `<div class="astronaut">
            <div class="bio">
            <h3>${data[i].firstName} ${data[i].lastName}</h3>
            <ul>
            <li>Hours in space: ${data[i].hoursInSpace}</li>
            <li>Active: <span id="active${i}">${data[i].active}</span></li>
            <li>Skills: ${data[i].skills}</li>
            </ul>
            </div>
            <img class="avatar" src="${data[i].picture}">
            </div>`
            const active1 = document.getElementById(`active${i}`)
            if (data[i].active === true) {
                active1.style.color = "green"
        }
        }
        
        console.log(data)
        // return data
    }
    
    let data1 = fetchData()
    console.log(data1)
    // const container = getElementById("container")
    // container.innerHTML = 
    // for (keys in data["value"])
})