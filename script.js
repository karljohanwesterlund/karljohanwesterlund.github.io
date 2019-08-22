var songRunTime = (20 + (7 * 20) * 1000); // 7 min 20 sec in milliseconds
var releaseTime = new Date("2019-08-27T00:00:01").getTime();

function setInsaneCount() {
    var dateNow = new Date().getTime();

    var getDiff = releaseTime - dateNow;
    var getCount = getDiff / songRunTime;

    var presentableNumber = (getCount + '').split('.');
    console.log(presentableNumber);
    document.getElementById('time').innerHTML = presentableNumber[0];
}

function run() {
    // Initial function call
    setInsaneCount();
    // 10 second interval is more than enough to seem "snappy" enough
    setInterval(setInsaneCount, 10000);
}

run();
