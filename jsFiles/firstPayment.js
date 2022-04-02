

   var flag=0;

   function control(x)
   {
       flag=flag+x;
       slideShow(flag);
   }
       
  
      function slideShow(num)
      {
          var slides = document.getElementsByClassName('item');
          for(let y of slides)
          {
              y.style.display="none";
          }
          if(num==slides.length)
          {
              num=0;
              flag=0;
          }
          if(num<0)
          {
              flag=slides.length-1;
              num=slides.length-1;
          }
          slides[num].style.display="block";

      }
  slideShow(flag);
  


  var clickData = JSON.parse(localStorage.getItem("unBoxData"));


  function show(clickData)
  {
     
     clickData.map(function(ele)
     {
         document.getElementById("cImage1").setAttribute("src",ele.image);
         document.getElementById("cImage2").setAttribute("src",ele.image1);
         document.getElementById("cImage3").setAttribute("src",ele.image2);
         document.getElementById("pay").textContent = ele.perMonthPrice;
         document.getElementById("cutPrice").textContent = ele.originalPrice;
         document.getElementById("carName").textContent = ele.name;
         document.getElementById("Cfunction").textContent = ele.function;
         document.getElementById("Cfunction").textContent = ele.function;
         document.getElementById("Cfuel").textContent = ele.fuel_type;
         
     });

  }

  show(clickData);

  var monthNo=3;
  function funSub(num)
    {
          if(num==1)
          {
            
             document.getElementById("oneMonth").style.backgroundColor="#1C8FA8";
             document.getElementById("percent").textContent="(10% Off)";
             var dis = document.getElementById("cutPrice").innerText;
             var x = Math.round(Number(dis*10/100));
            document.getElementById("pay").textContent=dis-x;

            monthNo=document.getElementById("p1").innerText;
            


             
             
             document.getElementById("twoMonth").style.backgroundColor="white";
             document.getElementById("threeMonth").style.backgroundColor="white";
             document.querySelector(".LTag").style.color="black";
             document.querySelector(".Lmon").style.color="black";

          }
          else if(num==2)
          {
            
             document.getElementById("oneMonth").style.backgroundColor="white";
             document.getElementById("percent").textContent="(11% Off)";
             var dis = document.getElementById("cutPrice").innerText;
            var x = Math.round(Number(dis*11/100));

            document.getElementById("pay").textContent=dis-x;
            
            monthNo=document.getElementById("p2").innerText;
             
             document.getElementById("twoMonth").style.backgroundColor="#1C8FA8";
             document.getElementById("threeMonth").style.backgroundColor="white";
             document.querySelector(".LTag").style.color="black";
             document.querySelector(".Lmon").style.color="black";
          }
          else if(num==3)
          {
            document.getElementById("oneMonth").style.backgroundColor="white";
            document.getElementById("percent").textContent="(12% Off)";
            var dis = document.getElementById("cutPrice").innerText;
            var x = Math.round(Number(dis*12/100));
           document.getElementById("pay").textContent=dis-x;

           monthNo=document.getElementById("p3").innerText;

             
            document.getElementById("twoMonth").style.backgroundColor="white";
            document.getElementById("threeMonth").style.backgroundColor="#1C8FA8";   
            document.querySelector(".LTag").style.color="white";
            document.querySelector(".Lmon").style.color="white";
            
            
          }
         
    }


function proceedFun()
{
    console.log("done");
      var price = document.getElementById("pay").innerText;
      

       var get = JSON.parse(localStorage.getItem("unBoxData"));

      get[0]["month"]=monthNo;
      get[0]["currentPrice"]=price;
      console.log(get[0]);

      localStorage.setItem("unBoxData",JSON.stringify(get));

   window.location.href="secondPayment.html";

}