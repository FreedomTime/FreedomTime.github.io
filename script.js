// Code goes here
var counter = 0;

function timerLoop() {
  counter += 1;
  
  var m1 = moment();
  var m2 = moment('2015-11-04 17:00:00','YYYY-MM-DD HH:mm:ss');
  var diff = moment.preciseDiff(m1, m2); // '1 month 2 days 3 hours 4 minutes 5 seconds'
  
  $("#timeleft").text(diff);
  $("#freedomat").text(m2);
}

$(document).ready(function () {
  setInterval(timerLoop, 1000);
});