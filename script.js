var jumbotron = document.querySelector(".jumbotron");
var lead = document.querySelector(".lead");

var currentDate = document.getElementById("#currentDate");

var containerDiv = document.getElementsByClassName("container");
var timeTable = document.querySelector("time-table");

var contentInput = document.querySelectorAll(".content-input");
var time = document.querySelectorAll("#time");


var saveButton = document.querySelectorAll(".svBtn");
for (var i = 0; i < saveButton.length; i++) {

  saveButton[i].addEventListener("click", function() {

    var contentInput = document.getElementById("content-input1").value;
    localStorage.setItem("content-input1", contentInput);

    var contentInput = document.getElementById("content-input2").value;
    localStorage.setItem("content-input2", contentInput);

    var contentInput = document.getElementById("content-input3").value;
    localStorage.setItem("content-input3", contentInput);

    var contentInput = document.getElementById("content-input4").value;
    localStorage.setItem("content-input4", contentInput);

    var contentInput = document.getElementById("content-input5").value;
    localStorage.setItem("content-input5", contentInput);

    var contentInput = document.getElementById("content-input6").value;
    localStorage.setItem("content-input6", contentInput);

    var contentInput = document.getElementById("content-input7").value;
    localStorage.setItem("content-input7", contentInput);

    var contentInput = document.getElementById("content-input8").value;
    localStorage.setItem("content-input8", contentInput);

    var contentInput = document.getElementById("content-input9").value;
    localStorage.setItem("content-input9", contentInput);
  })
}

