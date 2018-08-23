testIndex = 0;
writeInfo(presidentsArray[testIndex]);

document.onkeyup = function() {
    testIndex = testIndex + 1;
    writeInfo(presidentsArray[testIndex]);
}