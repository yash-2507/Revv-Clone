var cars = JSON.parse(localStorage.getItem("carDataBase"));

var dayDuration = JSON.parse(localStorage.getItem("dayDuration01"));

console.log(dayDuration);


document.querySelector("#selectCity").value = JSON.parse(localStorage.getItem("cityName001"));

let date1 = dayDuration.date1;
let date2 = dayDuration.date2;

document.querySelector("#timeSt").innerHTML=date1;
document.querySelector(".endDate001").innerHTML=date2;

document.querySelector("#downNav > div:nth-child(4)").addEventListener("click",function()
{
      window.location.href="index.html";
})







function displayCar(cars)
{
      document.getElementById("container").innerHTML="";
      cars.map(function (ele) {
       
        var mainDiv = document.createElement("div");

        var name=document.createElement("h4");
        name.innerText=ele.name;

        var img = document.createElement("img");
         img.setAttribute("src",ele.Image);
         img.setAttribute("id","carImage");

        
  

       var typeMainDiv = document.createElement("div");

       typeMainDiv.setAttribute("id","typeMain");


       var typeSubDiv1 = document.createElement("div");       //  subdiv1

       var logo1 = document.createElement("img");
       logo1.setAttribute("src","https://www.revv.co.in/imgs/car-card/automatic.svg");

       var type = document.createElement("p");
       type.innerText=ele.function;

       typeSubDiv1.append(logo1,type);

       var typeSubDiv2 = document.createElement("div");           // subdiv2

       var logo2 = document.createElement("img");
       logo2.setAttribute("src","https://www.revv.co.in/imgs/car-card/petrol.svg");
       var fuel_type = document.createElement("p");
       fuel_type.innerText=ele.fuel_type;

       typeSubDiv2.append(logo2,fuel_type);

       var typeSubDiv3 = document.createElement("div");                 //subdiv3

       var logo3 = document.createElement("img");
       logo3.setAttribute("src","https://www.revv.co.in/imgs/car-card/seat.svg");
       var seat = document.createElement("p");
       seat.innerText=ele.seat+" "+"Seats";

       typeSubDiv3.append(logo3,seat);

       typeMainDiv.append(typeSubDiv1,typeSubDiv2,typeSubDiv3);

     

       priceTypeMainDiv = document.createElement("div");
       priceTypeMainDiv.setAttribute("id","PriceMain");


        var priceSubDiv1 = document.createElement("div");
        priceSubDiv1.setAttribute("class","priceRange");
        priceSubDiv1.setAttribute("id","firstP");

        priceSubDiv1.addEventListener("click",function()
        {
          updateFirst();
        });

      
        var price_270_Kms = document.createElement("p");
        price_270_Kms.innerText="₹"+" "+ele.kms_270;

        

         var Kms_range1 = document.createElement("p")
         Kms_range1.setAttribute("id","kmsPTag");
         Kms_range1.innerText="270Kms";
         
         priceSubDiv1.append(price_270_Kms,Kms_range1);

         
         var priceSubDiv2 = document.createElement("div");
         priceSubDiv2.setAttribute("class","priceRange");
         

      
         var price_450_Kms = document.createElement("p");
         price_450_Kms.innerText="₹"+" "+ele.kms_450;
 
       
 
          var Kms_range2 = document.createElement("p")
          Kms_range2.setAttribute("id","kmsPTag");
          Kms_range2.innerText="450Kms";
          
          priceSubDiv2.append(price_450_Kms,Kms_range2);


          var priceSubDiv3 = document.createElement("div");
          priceSubDiv3.setAttribute("class","priceRange");

        
          var price_675_Kms = document.createElement("p");
          price_675_Kms.innerText="₹"+" "+ele.kms_675;
  
        
  
           var Kms_range3 = document.createElement("p")
           Kms_range3.setAttribute("id","kmsPTag");
           Kms_range3.innerText="675Kms";
           
           priceSubDiv3.append(price_675_Kms,Kms_range3);

           // appending all different range in mainprice div

           priceTypeMainDiv.append(priceSubDiv1,priceSubDiv2,priceSubDiv3);

          var extraChargeDiv = document.createElement("div");
          extraChargeDiv.setAttribute("class","charge");

          var extraCharge = document.createElement("p");
          extraCharge.innerText="Extra km charge @ ₹"+ele.exChargePerKms +"/km";

          var availButton = document.createElement("button");
          availButton.setAttribute("id","bookButton");
          availButton.textContent=ele.available;
          availButton.addEventListener("click",function()
          {
            addCar(ele);
          });
   
          extraChargeDiv.append(extraCharge,availButton);
          



        mainDiv.append(name,img,typeMainDiv,priceTypeMainDiv,extraChargeDiv);

      if(ele.duration>=dayDuration.day)
      {
        document.getElementById("container").append(mainDiv);
      }

        
           
    });
 
}

displayCar(cars);


function sortFun()
{
    var value = document.getElementById("sorting").value;
    if(value=='h2l')
    {
         cars.sort(function(a,b)
         {
             return b.kms_270-a.kms_270;
         })
         displayCar(cars);
    }
    else if(value=='l2h')
    {
        cars.sort(function(a,b)
        {
            return a.kms_270-b.kms_270;
        })
        displayCar(cars);
        console.log(cars)
    }
    else if(value=='exKmChrgh2l')
    {
      cars.sort(function(a,b)
      {
        return b.kms_675-a.kms_675;
      })
      displayCar(cars);
    }
    else if(value=='exKmChrgl2h')
    {
      cars.sort(function(a,b)
      {
        return a.kms_675-b.kms_675;
      })
      displayCar(cars);
    }
}


function changeText()
{
  var value = document.getElementById("fuel").innerText;
  console.log(value);

  if(value=='exclude')
  {
    document.getElementById("fuel").innerText="include";
    var result = cars.filter(function(ele)
    {
      return ele.kms_270+5310;
    });
    console.log(result);
    displayCar(result);
  }
  else{
    document.getElementById("fuel").innerText="exclude";
    document.getElementById("fuel").style.textDecoration="underline";
  }
}


function resetFun()
{
    var car = JSON.parse(localStorage.getItem("carDataBase"));
    displayData(car);
    document.getElementById("sorting").value="";
    document.getElementById("fuel").innerText="include";
    document.getElementById("fuel").style.textDecoration="underline";
}

// add element function

var newArr = [];

// function addCar(ele)
// {
//     newArr.push(ele);
//     localStorage.setItem("bookedCar",JSON.stringify(newArr));

//     var get = JSON.parse(localStorage.getItem("bookedCar"));
//     console.log(get);
// }
function addCar(ele)
{
  newArr.push(ele);
  localStorage.setItem("unBoxData",JSON.stringify(newArr));
  window.location.href="firstPayment.html";
}


function filFun(value)
{
     
      if(value=='Petrol'||value=='Diesel')
      {
        var result=cars.filter(function(ele)
        {
          return ele.fuel_type==value;
        })
        displayCar(result);
      }
      else if(value=='Automatic'||value=='Manual')
      {
        var result=cars.filter(function(ele)
        {
          return ele.function==value;
        })
        displayCar(result);
      }
      else if(value==5||value==7)
      {
        var result=cars.filter(function(ele)
        {
          return ele.seat==value;
        })
        displayCar(result);
      }
}


function filHun()
{
  var value= document.getElementById("hun").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.name.includes(value);
  })
  displayCar(result);
  console.log(result);


}

function filMaru()
{
  var value= document.getElementById("maru").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.name.includes(value);
  })
  displayCar(result);
  console.log(result);
}

function filMahi()
{
  var value= document.getElementById("mahi").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.name.includes(value);
  })
  displayCar(result);
  console.log(result);
}

function filTata()
{
  var value= document.getElementById("tata").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.name.includes(value);
  })
  displayCar(result);
  console.log(result);
}

function filHonda()
{
  var value= document.getElementById("hon").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.name.includes(value);
  })
  displayCar(result);
  console.log(result);
}

function filToyo()
{
  var value= document.getElementById("toy").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.name.includes(value);
  })
  displayCar(result);
  console.log(result);
}

function filHatch()
{
  var value= document.getElementById("hatch").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.type.includes(value);
  })
  displayCar(result);
  console.log(result);
}

function filSedan()
{
  var value= document.getElementById("sedan").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.type.includes(value);
  })
  displayCar(result);
  console.log(result);
}

function filSUV()
{
  var value= document.getElementById("suv").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.type.includes(value);
  })
  displayCar(result);
  console.log(result);
}

function filMUV()
{
  var value= document.getElementById("muv").value;

   console.log(value);
  var result=cars.filter(function(ele)
  {
    return ele.type.includes(value);
  })
  displayCar(result);
  console.log(result);
}


function updateFirst()
{
  document.getElementById("firstP").style.backgroundColor="white";
}



// document.getElementById("filter").addEventListener("click",menuBtn);
// var btn2 = true;
// function menuBtn()
// {
//    if(document.querySelector("body").style.width <="400px")
//    {
//     if(btn2)
//     {
//       document.getElementById("filter").style.display="block";
//       btn2=false;
//     }
//     else{
//       document.getElementById("filter").style.display="none";
//       btn2=true;
//     }

//   }

//   }
 
  




// document.getElementById("menu").addEventListener("dblclick",menuFun);

// function menuFun()
// {
  
// }