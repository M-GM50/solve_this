//Variables


var button = document.getElementById("solveThisButton");
var math = document.getElementById("math");
var createSubmitButton = document.createElement("button");
createSubmitButton.className ="submit";
createSubmitButton.textContent = "Submit";
var secondsText = document.getElementById("seconds");
var x = 0;
var timer = null


// Press To Start

var countUp = function() {
    x++;
    seconds.innerHTML = x;
};


var startGame = function(){
    document.body.innerHTML = math.innerHTML;
    
    timer = window.setInterval(countUp, 1000);

    document.body.appendChild(createSubmitButton);
}

button.addEventListener("click", startGame);


// Validate your Answer

createSubmitButton.onclick = function(){
    var answer = document.getElementById("answer")

    if (answer.value === "26112") {
        alert("🎉 Well Done!! You have solved this problem in " + x + " seconds");
        window.clearInterval(timer);
    }
    else {
      alert("Try Again...");
    }
}
