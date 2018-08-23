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
presidentsArray[0] = new President("George", "Washington", 1732, 1799, 1789, 1797, "none", "assets/images/pres01.jpg");
presidentsArray[1] = new President("John", "Adams", 1735, 1826, 1797, 1801, "Federalist", "assets/images/pres02.jpg");
presidentsArray[2] = new President("Thomas", "Jefferson", 1743, 1826, 1801, 1809, "assets/images/pres03.jpg");
presidentsArray[3] = new President("James", "Madison", 1751, 1836, 1809, 1817, "Democratic-Republican", "assets/images/pres04.jpg");
presidentsArray[4] = new President("James", "Monroe", 1758, 1831, 1817, 1825, "Democratic-Republican", "assets/images/pres05.gif");
presidentsArray[5] = new President("John Quincy", "Adams", 1767, 1848, 1825, 1829, "Democratic-Republican", "assets/images/pres06.jpeg");
presidentsArray[6] = new President("Andrew", "Jackson", 1767, 1845, 1829, 1837, "Democratic", "assets/images/pres07.jpg");
presidentsArray[7] = new President("Martin", "Van Buren", 1782, 1862, 1837, 1841, "Democratic", "assets/images/pres08.jpg");
presidentsArray[8] = new President("William", "Harrison", 1773, 1841, 1841, 1841, "Whig", "assets/images/pres09.jpg");
presidentsArray[9] = new President("John", "Tyler", 1790, 1862, 1841, 1845, "none", "assets/images/pres10.jpg");
presidentsArray[10] = new President("James", "Polk", 1795, 1849, 1845, 1849, "Democratic", "assets/images/pres11.jpg");
presidentsArray[11] = new President("Zachary", "Taylor", 1784, 1850, 1849, 1850, "Whig", "assets/images/pres12.png");
presidentsArray[12] = new President("Millard", "Fillmore", 1800, 1874, 1850, 1853, "Whig", "assets/images/pres13.jpg");
presidentsArray[13] = new President("Franklin", "Pierce", 1804, 1869, 1853, 1857, "Democratic", "assets/images/pres14.jpg");
presidentsArray[14] = new President("James", "Buchanan", 1791, 1868, 1857, 1861, "Democratic", "assets/images/pres15.jpg");
