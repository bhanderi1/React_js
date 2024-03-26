var startTime;
var stopwatchInterval;
var elapsedPausedTime = 0;

function startWatch(){
  if(!stopwatchInterval){
    startTime =new Date().getTime() - elapsedPausedTime
    stopwatchInterval = setInterval(updatewatch ,1000)
  }
}
startWatch()
function stopwatch(){
clearInterval(stopwatchInterval)
elapsedPausedTime =new Date().getTime() - startTime()
stopwatchInterval = null
}
stopwatch()

function resetwatch(){
  startWatch()
  elapsedPausedTime = 0
  document.getElementById("stopwatch").innerHTML = "00:00:00"
}
resetwatch()

function updatewatch(){
 var currentTime = new Date.getTime()
 var elapsedTime = currentTime - startTime;
 var seconds = Math.floor(elapsedTime / 1000) % 60;
 var Minutes = Math.floor(elapsedTime / 1000 /60) %60;
 var hours = Math.floor(elapsedTime /1000 / 60 /60)
 var displayTime = pad(hours)+ ":" +pad(Minutes) +":" + pad(seconds)
  document.getElementById("stopwatch").innerHTML =displayTime
}
updatewatch()

function pad(number){
  return(number < 10 ? "0" : " ") +number
}