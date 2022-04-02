// SEARCHBAR CONTAINER
var searchbarContainer = document.getElementById("searchbarContainer");
var searchBar = document.getElementById("searchBar");
window.onscroll = function () {
  if (window.pageYOffset >= 582) {
    searchBar.style.display = "grid";
    searchbarContainer.style.display = "block";
  } else {
    searchBar.style.display = "none";
    searchbarContainer.style.display = "none";
  }
};

// SELECTCITY BOX POPUP WINDOW

var selectCity = document.querySelector("#selectcity");
selectCity.addEventListener("click", function () {
  var searchBox = document.querySelector("#subContainer");
  var container = document.querySelector("#container");
  searchBox.style.display = "block";
  container.style.display = "flex";
  container.style.backgroungcolor = "rgba(0,0,0,0.3)";
});
var close = document.querySelector(".fa-xmark");
close.addEventListener("click", function () {
  var searchBox = document.querySelector("#subContainer");
  var container = document.querySelector("#container");
  searchBox.style.display = "none";
  container.style.display = "none";
});
var citiesDiv = document.querySelectorAll(".city-div");
// console.log(citiesDiv)
citiesDiv.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var cityText = document.querySelector(".cityText");
    var check = document.querySelectorAll(".fa-check");
    var citySpan = document.querySelector(".citySpan");
    check.forEach(function (data) {
      data.classList.remove("active");
    });
    cityText.innerText = event.target.innerText;
    citySpan.innerText = event.target.innerText;
    elem.querySelector(".fa-check").classList.add("active");
  });
});


// signin or login section 
document.querySelector("#right > div.loginOrSignup").addEventListener("click",redirectToSignIn);
function redirectToSignIn(){
  secondwindow =open('signIn.html', 'yahoo', 'left=500px,top=500px,height=500,width=360,scrollbars=yes');
}


  var startTime = document.querySelector(".initialTime");
  startTime.addEventListener("click",function() {
    document.querySelector(".sTime").style.display="block";
    
  })
  

  var duration ;
  document.querySelector("#leftContainer > div.searchBtn > button").addEventListener("click",function() {
    window.location.href="cars.html";
  })
  var searchBtn = document.querySelector("#cityAndTime > div.timeDiv > div.finalTime > input");
  searchBtn.addEventListener("input",function() {
    var date = document.querySelector("#cityAndTime > div.timeDiv > div.initialTime > input").value;
    var date1 = new Date(date);
    var date2 = new Date(document.querySelector("#cityAndTime > div.timeDiv > div.finalTime > input").value);
    var dura = date2 - date1;
    dura = dura/60000;
    var day  = dura;
    localStorage.setItem("dayDuration01",JSON.stringify({day:Math.floor(day/1440),date1:date1,date2:date2}));
    duration = " " + Math.floor(dura/1440);
    dura = dura % 1440;
    duration = duration + "day " + Math.floor(dura/60)  + "hours ";
    dura = dura%60;
    duration = duration + dura + "minutes";
    console.log(duration);
    document.querySelector(".duration").innerText = "Duration " + duration;
    document.querySelector(".duration").style= "color:red;text-align:center;padding:30px 20px";

    var get = JSON.parse(localStorage.getItem("carDataBase"));
    var day1001 = JSON.stringify(date1).split("T");
    day1001[1] = day1001[1].split(".");
    document.querySelector("#searchBar > div.startTime").innerText = document.querySelector("#searchBar > div.startTime").innerText + ":" + day1001[0] + " " + day1001[1][0];
    day1001 = JSON.stringify(date2).split("T");
    day1001[1] = day1001[1].split(".");
    document.querySelector("#searchBar > div.endTime").innerText = document.querySelector("#searchBar > div.endTime").innerText + ":" + day1001[0] + " " + day1001[1][0];
  })
  var endTime = document.querySelector(".initialTime");
  endTime.addEventListener("click",function() {
    document.querySelector(".eTime").style.display="block";
  })
 
  var cityName001 = document.querySelectorAll("#topCities > div")   
  cityName001.forEach(function(elem) {
    elem.addEventListener("click",function() {
      localStorage.setItem("cityName001",JSON.stringify(elem.innerText));
      let str001 = document.querySelector("#searchBar > div.city.city-box").innerHTML
      document.querySelector("#searchBar > div.city.city-box").innerHTML=str001 + elem.innerText;
    })
  })