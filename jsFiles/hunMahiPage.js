
// js for swaping
function newcar()
{
    var newValue = document.getElementById("newCar");
    newValue.style.borderBottom="4px solid #0EBABA";
    newValue.style.borderWidth="4px";
    var brandNew ="brandNewCar.html";
    window.location.href=brandNew;
    document.querySelector("#NH3").style.color="#0EBABA";
    var newValue = document.getElementById("unBoxedCar");
    newValue.style.borderBottom="none";
    document.querySelector("#UH3").style.color="black";
}
function unBox()
{
    var newValue = document.getElementById("unBoxedCar");
    newValue.style.borderBottom="4px solid #0EBABA";
    newValue.style.borderWidth="4px";
    var brandNew ="hunMahiPage.html";
    window.location.href=brandNew;
    document.querySelector("#UH3").style.color="#0EBABA";
    var newValue = document.getElementById("newCar");
    newValue.style.borderBottom="none";
    document.querySelector("#NH3").style.color="black";

}


// for showing car data 

var car = JSON.parse(localStorage.getItem("unBoxCars")) || [];

console.log(car);
function showcar(car)
{  
    document.getElementById("Cars").innerHTML="";
    document.getElementById("Cars").innerHTML="";

    car.map(function(ele)
    {
        var mainDiv = document.createElement("div");

        mainDiv.addEventListener("click",function(){
              unboxData(ele);
        })
         
        var carImage = document.createElement("img");
        carImage.setAttribute("src",ele.image);
        carImage.setAttribute("id","carImage");

        var subDiv1 = document.createElement("div");
        subDiv1.setAttribute("id","carInfo");

        var carName=document.createElement("h1");
        carName.innerText=ele.name;
        var carType = document.createElement("p");
        carType.innerText=ele.type;
        carType.setAttribute("class","carType");
        
        var typeDiv = document.createElement("div");
        typeDiv.setAttribute("id","typeDiv");

        var logo1 = document.createElement("img");
        logo1.setAttribute("src","https://www.revv.co.in/grapheneImages/CarsAndPricing/transmission-icon.svg");
        logo1.setAttribute("class","logo");
        var fuel_typo = document.createElement("p");
        fuel_typo.innerText=ele.fuel_type;
        fuel_typo.setAttribute("id","fuel");

        var logo2 = document.createElement("img");
        logo2.setAttribute("src","https://www.revv.co.in/grapheneImages/CarsAndPricing/automatic-icon.svg");
        logo2.setAttribute("class","logo");
        var carFuntion = document.createElement("p");
        carFuntion.innerText=ele.function;
        carFuntion.setAttribute("id","function");

        typeDiv.append(logo1,fuel_typo,logo2,carFuntion);

        subDiv1.append(carName,carType,typeDiv);

        var priceDiv = document.createElement("div");
        
        var perMonPrice = document.createElement("span");
         perMonPrice.innerHTML="₹"+ele.perMonthPrice+"<sub style='fontWeight:100; color:#808080; font-size:20px;'>/month</sub>";

         perMonPrice.style.fontWeight="900";
         perMonPrice.style.fontSize="28px";

         

         var originalP = document.createElement("h1");
         originalP.innerText="₹"+ele.originalPrice;
         originalP.style.textDecoration="line-through";
         originalP.style.color="#808080";

         priceDiv.append(perMonPrice,originalP);

         mainDiv.append(carImage,subDiv1,priceDiv);

         document.getElementById("Cars").append(mainDiv);


    });
}

showcar(car);

// function for sorting


function sortFun()
{
    var value = document.getElementById("sorting").value;
    if(value=='h2l')
    {
         car.sort(function(a,b)
         {
             return b.perMonthPrice-a.perMonthPrice;
         })
         showcar(car);
    }
    else if(value=='l2h')
    {
        car.sort(function(a,b)
        {
            return a.perMonthPrice-b.perMonthPrice;
        })
        showcar(car);
        console.log(car)
    }
}

// for searching

function searchFun()
{
        var text = document.getElementById("search").value;
        var searchResult = car.filter(function(ele)
        {
            return ele.name.includes(text.toUpperCase());
        })

        showcar(searchResult);
     
}


// function for filtering
// var cars = JSON.parse(localStorage.getItem("unBoxCars"));
function filFun(value)
{
    console.log(value);

    var valueSearch=car.filter(function(ele)
    {
        return ele.fuel_type.includes(value.toUpperCase());
    })
    showcar(valueSearch);
    console.log(valueSearch);
}


function byRange()
{
    var stRange = document.getElementById("startRange").value;
    var endRange = document.getElementById("endRange").value;
    
    var result = car.filter(function(ele)
    {
        return ele.perMonthPrice >=Number(stRange) && ele.perMonthPrice<=Number(endRange);
    })

    showcar(result);
    console.log(result);
}



function filHatch()
{
  var value= document.getElementById("hatch").value;

   console.log(value);
  var result=car.filter(function(ele)
  {
    return ele.type.includes(value);
  })
  showcar(result);
  console.log(result);
}

function filSedan()
{
  var value= document.getElementById("sedan").value;

   console.log(value);
  var result=car.filter(function(ele)
  {
    return ele.type.includes(value);
  })
  showcar(result);
  console.log(result);
}

function filSUV()
{
  var value= document.getElementById("suv").value;

   console.log(value);
  var result=car.filter(function(ele)
  {
    return ele.type.includes(value);
  })
   showcar(result);
  console.log(result);
}


function filFun(value)
{
     
      if(value=='Petrol'||value=='Diesel')
      {
        var result=car.filter(function(ele)
        {
          return ele.fuel_type==value;
        })
        showcar(result);
      }
      else if(value=='Automatic'||value=='Manual')
      {
        var result=car.filter(function(ele)
        {
          return ele.function==value;
        })
        showcar(result);
      }
     
}

var unbox = [];

function unboxData(ele)
{
      unbox.push(ele);
      localStorage.setItem("unBoxData",JSON.stringify(unbox));

      var get = JSON.parse(localStorage.getItem("unBoxData"));
     window.location.href="firstPayment.html";
}


    