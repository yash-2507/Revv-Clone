

var finalData = JSON.parse(localStorage.getItem("unBoxData"));

console.log(finalData);
function show(finalData)
{
   
    finalData.map(function(ele)
    {
        document.getElementById("finalP").textContent=ele.finalPrice;
        document.getElementById("Cname").textContent=ele.name;
        document.getElementById("Cfuel").textContent=ele.fuel_type;
        document.getElementById("Cfun").textContent=ele.function;
        document.getElementById("Ccity").textContent=ele.city;
        
    })


}

show(finalData);