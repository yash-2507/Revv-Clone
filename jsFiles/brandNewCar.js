
// js for swaping

function newcar()
{
    
    
    var brandNew ="brandNewCar.html";
    window.location.href=brandNew;
    
}
function unBox()
{
    
    var brandNew ="hunMahiPage.html";
    window.location.href=brandNew;
    

}

// for showing car data 

var car = JSON.parse(localStorage.getItem("hyundaiElite"));
console.log(car);
var count=1;

function showcar(car)
{
    car.map(function(ele)
    {
        var mainDiv = document.createElement("div");
         mainDiv.setAttribute("id","child"+count++)
         mainDiv.addEventListener("click",function()
         {
             addCar(ele);
         });
        var carName=document.createElement("p");
        carName.innerText=ele.name;
        carName.setAttribute("id","carName")

        var carVersion=document.createElement("b");
        carVersion.innerText=ele.version;
        carVersion.setAttribute("id","version")


    
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


        var priceDiv = document.createElement("div");

        var perMonPrice = document.createElement("h1");
         perMonPrice.innerHTML="₹"+ele.perMonthPrice+"<sub style='fontWeight:100; color:#808080; font-size:20px;'>/month</sub>";

         var originalP = document.createElement("h2");
         originalP.innerText="₹"+ele.originalPrice;
         originalP.style.textDecoration="line-through";
         originalP.style.color="#808080";
        
         priceDiv.append(perMonPrice,originalP);

         mainDiv.append(carName,carVersion,typeDiv,priceDiv);

         document.getElementById("varient").append(mainDiv);


    });
}

showcar(car);



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


function searchFun()
{
        var text = document.getElementById("search").value;
        var searchResult = car.filter(function(ele)
        {
            return ele.name.includes(text.toUpperCase());
        })

        showcar(searchResult);
        console.log(searchResult);
     
}

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





var left=1;
var right=3;
function show()
{   
    for(var i=left;i<=right;i++)
    {
    document.getElementById("child"+i).style.display="inline-block";
    }
}


   function moveLeft()
    {

      if(left<=3&&right<=5)
      {

        document.getElementById("child"+left).style.display="none";
        left+=1;
        right+=1;
        for(var i=left;i<=right;i++)
       {
         document.getElementById("child"+i).style.display="inline-block";
       }

    }
    else
    {
        return;
    }
}

function moveRight()
{

  if(left>=3&&right>=4)
  {

    document.getElementById("child"+right).style.display="none";
    left-=1;
    right-=1;

    for(var i=left;i<=right;i++)
   {
     document.getElementById("child"+i).style.display="inline-block";
   }

}
else
{
    return;
}
}


var unbox = [];

function addCar(ele)
{
      unbox.push(ele);
      localStorage.setItem("unBoxData",JSON.stringify(unbox));

      var get = JSON.parse(localStorage.getItem("unBoxData"));
     window.location.href="firstPayment.html";
}
