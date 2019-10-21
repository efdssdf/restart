var schedule = require("node-schedule");
var exec = require('child_process').exec;1

function restart() {
    var cmdStr1 = 'pm2 restart tuitui'
    var cmdStr2 = 'pm2 restart tuitui_1'
    var cmdStr3 = 'pm2 restart tuitui_2'
    var cmdStr4 = 'pm2 restart tuitui_3'
    exec(cmdStr1, function (err, stdout, stderr) {
        console.log("restart tuitui")
    })
    exec(cmdStr2, function (err, stdout, stderr) {
        console.log("restart tuitui_1")
    })
    exec(cmdStr3, function (err, stdout, stderr) {
        console.log("restart tuitui_2")
    })
    exec(cmdStr4, function (err, stdout, stderr) {
        console.log("restart tuitui_3")
    })
}
var rule = new schedule.RecurrenceRule();
var times1 = [2, 4, 6];
var times2 = [1];
rule.dayOfWeek = times1;
rule.hour = times2;
var j = schedule.scheduleJob(rule, function () {
    console.log('重启服务');
    restart();
});