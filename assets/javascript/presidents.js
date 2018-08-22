/* This file is for storing all of the data about the presidents so that it can be accessed in the game */

/* Define function for constructing objects of type President */
function President(first, last, born, died, pres_start, pres_end, party, img) {
    this.firstName = first;
    this.lastName = last;
    this.yearBorn = born;
    this.yearDied = died;
    this.officeBegan = pres_start;
    this.officeEnded = pres_end;
    this.party = party;
    this.imageLink = img;
    this.fullName = function () {return this.firstName + " " + this.lastName;};
}

/* Create array for storing the data */
var presidentsArray = [];

/* Create objects for each President and store them in an array. */
