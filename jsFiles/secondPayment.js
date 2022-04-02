

 var clickCar = JSON.parse(localStorage.getItem("unBoxData"));

 function show(clickCar)
 {
    
    clickCar.map(function(ele)
    {
        
        document.getElementById("OriCarImage").setAttribute("src",ele.image);
        document.getElementById("CName").textContent = ele.name;
        document.getElementById("fType").textContent = ele.function;
        document.getElementById("diType").textContent = ele.fuel_type;
        document.getElementById("monthFee").textContent = ele.currentPrice;
        document.getElementById("monthNo").textContent = ele.month;

        document.getElementById("totalMonth").textContent =7900+Number(ele.currentPrice);

        var final = document.getElementById("totalMonth").innerText;

        document.getElementById("bookingAmt").textContent=10000+Number(final);

        
        
        
    });

 }

 show(clickCar);



 function reserveFun()
 {
     var fPrice = document.getElementById("bookingAmt").innerText;
     
     var get = JSON.parse(localStorage.getItem("unBoxData"));

     get[0]["finalPrice"]=fPrice;
     localStorage.setItem("unBoxData",JSON.stringify(get));

     window.location.href="thirdPayment.html";
 }




