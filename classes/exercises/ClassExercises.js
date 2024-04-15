class Felidae {
    constructor() {
       this.claws = "retractable";
    }
 }
 class Panthera extends Felidae {
    constructor() {
       super();
       this.roar = "loud";
    }
 }
 class Tiger extends Panthera {
    constructor() {
       super();
       this.hasStripes = "true";
    }
 }
 let tigger = new Tiger();
//  console.log(tigger);
 // Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, iSBN, numberOfPages, checkOutTimes, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.iSBN = iSBN;
        this.numberOfPages = numberOfPages;
        this.checkOutTimes = checkOutTimes;
        this.discarded = discarded;
    }
    checkOut (uses) {
        this.checkOutTimes += uses
    }
}
class Manual extends Book {
    constructor(title, author, copyrightDate, iSBN, numberOfPages, checkOutTimes, discarded) {
        super(title, author, copyrightDate, iSBN, numberOfPages, checkOutTimes, discarded);
    }
    disposal (currentYear) {
        if (currentYear-this.copyrightDate > 5) {
            this.discarded = 'yes';
        }
    }
}
class Novel extends Book {
    constructor(title, author, copyrightDate, iSBN, numberOfPages, checkOutTimes, discarded) {
        super(title, author, copyrightDate, iSBN, numberOfPages, checkOutTimes, discarded);
    }
    disposal () {
        if (this.checkOutTimes > 100) {
            this.discarded = 'yes';
        }
    }
}
// Define your Manual and Novel classes here:
let pAndP = new Novel('Pride and Predjudice','Jane Austen', 1813, 1111111111111, 432, 32, 'no')
let shuttleBuild = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0o00000000000, 1147, 1, 'no')
// Declare the objects for exercises 2 and 3 here:
// currentYear = 2024
shuttleBuild.disposal(2024)
console.log(shuttleBuild)
pAndP.checkOut(5)
console.log(pAndP)
// Code exercises 4 & 5 here: