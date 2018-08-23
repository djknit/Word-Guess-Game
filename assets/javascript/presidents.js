/* This file is for storing all of the data about the presidents so that it can be accessed in the game */

/* Define function for constructing objects of type President */
function President(first, last, born, died, pres_start, pres_end, party, img) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = first + " " + last;
    this.yearBorn = born;
    this.yearDied = died;
    this.officeBegan = pres_start;
    this.officeEnded = pres_end;
    this.party = party;
    this.imageLink = img;    
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
presidentsArray[15] = new President("Abraham", "Lincoln", 1809, 1865, 1861, 1865, "Republican", "assets/images/pres16.jpg");
presidentsArray[16] = new President("Andrew", "Johnson", 1808, 1875, 1865, 1869, "Democratic", "assets/images/pres17.jpg");
presidentsArray[17] = new President("Ulysses", "Grant", 1822, 1885, 1869, 1877, "Republican", "assets/images/pres18.jpg");
presidentsArray[18] = new President("Rutherford", "Hayes", 1822, 1893, 1877, 1881, "Republican", "assets/images/pres19.jpg");
presidentsArray[19] = new President("James", "Garfield", 1831, 1881, 1881, 1881, "Republican", "assets/images/pres20.jpg");
presidentsArray[20] = new President("Chester", "Arthur", 1829, 1889, 1881, 1885, "Republican", "assets/images/pres21.jpg");
presidentsArray[21] = new President("Grover", "Cleveland", 1837, 1908, 1885, 1889, "Democratic", "assets/images/pres22.jpg");
presidentsArray[22] = new President("Benjamin", "Harrison", 1833, 1901, 1889, 1893, "Republican", "assets/images/pres23.jpg");
presidentsArray[23] = new President("Grover", "Cleveland", 1837, 1908, 1893, 1897, "Democratic", "assets/images/pres22.jpg");
presidentsArray[24] = new President("William", "McKinley", 1843, 1901, 1897, 1901, "Republican", "assets/images/pres25.jpg");
presidentsArray[25] = new President("Theodore", "Roosevelt", 1858, 1919, 1901, 1909, "Republican", "assets/images/pres26.jpg");
presidentsArray[26] = new President("William", "Taft", 1857, 1930, 1909, 1913, "Republican", "assets/images/pres27.jpg");
presidentsArray[27] = new President("Woodrow", "Wilson", 1856, 1924, 1913, 1921, "Democratic", "assets/images/pres28.png");
presidentsArray[28] = new President("Warren", "Harding", 1865, 1923, 1921, 1923, "Republican", "assets/images/pres29.jpg");
presidentsArray[29] = new President("Calvin", "Coolidge", 1872, 1933, 1923, 1929, "Republican", "assets/images/pres30");
presidentsArray[30] = new President("Herbert", "Hoover", 1874, 1964, 1929, 1933, "Republican", "assets/images/pres31.jpg");
presidentsArray[31] = new President("Franklin", "Roosevelt", 1882, 1945, 1933, 1945, "Democratic", "assets/images/pres32.jpg");
presidentsArray[32] = new President("Harry", "Truman", 1884, 1972, 1945, 1953, "Democratic", "assets/images/pres33.jpg");
presidentsArray[33] = new President("Dwight", "Eisenhower", 1890, 1969, 1953, 1961, "Republican", "assets/images/pres34.jpg");
presidentsArray[34] = new President("John", "Kennedy", 1917, 1963, 1961, 1963, "Democratic", "assets/images/pres35.jpg");
presidentsArray[35] = new President("Lyndon", "Johnson", 1908, 1973, 1963, 1969, "Democratic", "assets/images/pres36.jpg");
presidentsArray[36] = new President("Richard", "Nixon", 1913, 1994, 1969, 1974, "Republican", "assets/images/pres37.jpg");
presidentsArray[37] = new President("Gerald", "Ford", 1913, 2006, 1974, 1977, "Republican", "assets/images/pres38.jpg");
presidentsArray[38] = new President("Jimmy", "Carter", 1924, "not yet", 1977, 1981, "Democratic", "assets/images/pres39.jpg");
presidentsArray[39] = new President("Ronald", "Reagan", 1911, 2004, 1981, 1989, "Republican", "assets/images/pres40.jpg");
presidentsArray[40] = new President("George", "Bush", 1924, "not yet", 1989, 1993, "Republican", "assets/images/pres41.jpg");
presidentsArray[41] = new President("Bill", "Clinton", 1946, "not yet", 1993, 2001, "Democratic", "assets/images/pres42.jpg");
presidentsArray[42] = new President("George", "Bush", 1946, "not yet", 2001, 2009, "Republican", "assets/images/pres43.jpg");
presidentsArray[43] = new President("Barack", "Obama", 1961, "not yet", 2009, 2017, "Democratic", "assets/images/pres44.jpg");
presidentsArray[44] = new President("Donald", "Trump", 1946, "not yet", 2017, "not yet", "Republican", "assets/images/pres45.jpg");