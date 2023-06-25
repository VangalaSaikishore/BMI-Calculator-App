var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi() {
  var age = parseFloat(document.getElementById("age").value);
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var isMale = document.getElementById("m").checked;

  if (isNaN(age) || isNaN(height) || isNaN(weight) || (!isMale && !isFemale)) {
    showModal("All fields are required!!!");
    return;
  }

  var bmi = weight / ((height / 100) ** 2);

  var result = "";
  if (bmi < 18.5) {
    result = "Underweight!!";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = "$ Healthy";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = "Overweight!!!";
  } else if (bmi >= 30 && bmi <= 34.9) {
    result = "Obese!!!";
  } else if (bmi >= 35) {
    result = "Extremely obese!!!";
  }

  var gender = isMale ? "Male" : "Female";
  var resultText = `Your BMI is ${bmi.toFixed(2)}. You are ${result} (${gender}).`;

  displayResult(resultText);
  
resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}
function displayResult(resultText) {
  var resultArea = document.querySelector(".comment");
  resultArea.style.display = "block";
  resultArea.innerHTML = resultText;
}










// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
