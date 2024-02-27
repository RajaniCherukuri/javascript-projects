function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
     missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "Red";
     });
     missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });
     let button = document.getElementById("abortMission");
     button.addEventListener("click", function (event) {
         console.log("Are you sure you want to abort the mission?");
        });
          
     
    
}

window.addEventListener("load", init);


// function changeColor(newColor) {
//     const elem = document.getElementById("para");
//     elem.style.color = newColor;
//   }
  
