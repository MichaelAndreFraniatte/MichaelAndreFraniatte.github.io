function getUsedSpaceOfLocalStorageInBytes() {
    // Returns the total number of used space (in Bytes) of the Local Storage
    var b = 0;
    for (var key in window.localStorage) {
        if (window.localStorage.hasOwnProperty(key)) {
            b += key.length + localStorage.getItem(key).length;
        }
    }
    return b;
}
function getUnusedSpaceOfLocalStorageInBytes() {
    var maxByteSize = 10485760; // 10MB
    var minByteSize = 0;
    var tryByteSize = 0;
    var testQuotaKey = 'testQuota';
    var timeout = 20000;
    var startTime = new Date().getTime();
    var unusedSpace = 0;
    do {
        runtime = new Date().getTime() - startTime;
        try {
            tryByteSize = Math.floor((maxByteSize + minByteSize) / 2);
            localStorage.setItem(testQuotaKey, new Array(tryByteSize).join('1'));
            minByteSize = tryByteSize;
        } catch (e) {
            maxByteSize = tryByteSize - 1;
        }
    } while ((maxByteSize - minByteSize > 1) && runtime < timeout);
    localStorage.removeItem(testQuotaKey);
    if (runtime >= timeout) {
        console.log("Unused space calculation may be off due to timeout.");
    }
    // Compensate for the byte size of the key that was used, then subtract 1 byte because the last value of the tryByteSize threw the exception
    unusedSpace = tryByteSize + testQuotaKey.length - 1;
    return unusedSpace;
}
function getLocalStorageQuotaInBytes() {
    // Returns the total Bytes of Local Storage Space that the browser supports
    var unused = getUnusedSpaceOfLocalStorageInBytes();
    var used = getUsedSpaceOfLocalStorageInBytes();
    var quota = unused + used;
    return "Total : " + quota / 1000 + ", Unused : " + unused / 1000 + ", Used : " + used / 1000 + ", in Kilo Bytes.";
}
$(document).ready(function() {
    var div = document.getElementById('info');
    div.innerHTML = getLocalStorageQuotaInBytes();
});