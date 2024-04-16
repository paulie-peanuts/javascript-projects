//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores=[]) {
        this.name = name;
        this.mass = mass;
        this.scores = scores
    }
    addScore (newScore) {
        this.scores.push(newScore)
    }
    average() {
        let total = 0
        for (let i=0; i<this.scores.length; i++)
        total += this.scores[i];
        return Math.round(total/this.scores.length*10)/10;
    }
    status() {
        let status = ''
        if (this.average() >= 90) {
            status = "Accepted";
        } else if (this.average() >= 80 && this.average() < 90) {
            status = "Reserved";
        } else if (this.average() >= 70 && this.average() < 80) {
            status = "Probationary";
        } else {
            status = "Rejected";
        }
        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`)
    }
    advancement() {
        let additionalTests = 0
        while (this.average() < 80) {
            this.scores.push(100)
            additionalTests += 1
        }
        console.log(`It will take ${additionalTests} more tests for ${this.name} to achieve Reserved status.`)
    }
}
let bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubba, merry, gator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubba.addScore(83)
console.log(bubba.scores)
console.log(gator.average())
bubba.status()
console.log(gator.average())
gator.advancement()

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.