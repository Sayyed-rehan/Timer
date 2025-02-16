let container = document.querySelector(".container");

let hrs_input = document.querySelector(".hrs");
let mins_input = document.querySelector(".mins");
let secs_input = document.querySelector(".secs");
let timerID;
let start_button = document.querySelector("#start")
let h3 = document.querySelector('h3')


container.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") == "start") {
    start_button.innerText = 'pause'
    start_button.id = 'pause'
    console.log(start_button);
    let hrs = hrs_input.value || 0;
    let mins = mins_input.value || 0;
    let secs = secs_input.value || 0;
    let total_time_in_sec = ConvertTimeToSec(hrs, mins, secs);
    Timer(total_time_in_sec)
  }else if(e.target.getAttribute("id") == "reset"){
    start_button.innerText = 'Start'
    start_button.id = 'start'
    clearInterval(timerID)
    hrs_input.value = 0;
    mins_input.value = 0;
    secs_input.value = 0;
  }else if(e.target.getAttribute('id') == 'pause'){
    clearInterval(timerID)
    start_button.innerText = 'Start'
    start_button.id = 'start'
    // hrs_input.value = 0;
    // mins_input.value = 0;
    // secs_input.value = 0;
  }
});

function ConvertTimeToSec(hrs, mins, secs) {
    // console.log( parseInt(hrs)*3600 + parseInt(mins)*60 + parseInt(secs));
  let total_time_in_sec =  parseInt(hrs)*3600 + parseInt(mins)*60 + parseInt(secs);
  console.log(total_time_in_sec);
  return total_time_in_sec
}

function Timer(total_time_in_sec){
    timerID = setInterval(()=>{
        if(total_time_in_sec > 0){
            total_time_in_sec--
            displayTime(total_time_in_sec)
            console.log(total_time_in_sec);
        }else{
            clearInterval(timerID)
            h3.innerText = "Time's Up🎉"
            start_button.innerText = 'Start'
            start_button.id = 'start'
        }
    },1000)
}


function displayTime(timeInSeconds){
    let hrs = parseInt(timeInSeconds/3600) ;
    let remainingMins = parseInt(timeInSeconds%3600);
    let mins = parseInt(remainingMins/60);
    let secs = remainingMins%60 ; 

    hrs_input.value = hrs;
    mins_input.value = mins;
    secs_input.value = secs;

}