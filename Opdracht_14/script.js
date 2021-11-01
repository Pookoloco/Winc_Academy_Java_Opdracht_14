const btnAlert = document.getElementById("btn1");

btnAlert.addEventListener("click", function () {

  alert("button clicked");

});

// const changeBckgrnd = document.getElementById("btn2");

// changeBckgrnd.addEventListener("click", function () {

//   document.body.classList.add("red-background");

// });

const toggleColor = function() {

    document.body.classList.toggle("red-background");

};

const toggleBckgrnd = document.getElementById("btn2");

toggleBckgrnd.addEventListener("click", function () {

  toggleColor();

});