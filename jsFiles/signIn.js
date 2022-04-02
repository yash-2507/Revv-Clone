var form=document.querySelector("form");
let userLoginDataRevv=JSON.parse(localStorage.getItem("userLoginDataRevv"))||[];
let email=document.querySelector("#user-email");
let pass=document.querySelector("#password-login");
let validEmail=false;
let validPassword=false;
let validEmailFormate=false;

let lable1=document.querySelector("#lable1");
let hr1=document.querySelector("body > div > form > div:nth-child(2) > div:nth-child(3) > hr:nth-child(1)");
let hr2=document.querySelector("body > div > form > div:nth-child(2) > div:nth-child(3) > hr:nth-child(2)");
let lable2=document.querySelector("#lable2");
let div=document.querySelector("body > div > form > div:nth-child(2) > div:nth-child(4)");
let img=document.querySelector("#crossImage");

email.addEventListener("input",alerting);
function alerting(){
    if(email.value!==""){
        lable1.innerText="";
    }else{
        lable1.innerText="Enter Email";
    }
    
    if(email.value.substring(email.value.length-4,email.value.length)==".com"&&email.value.includes("@")){

        validEmailFormate=true;
        div.innerText="";
        hr2.style="border-top: none green; border-left: none green; border-right: none green; border-bottom: 2px solid green; bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(1); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;";
    }else{
        validEmailFormate=false;
        hr2.style="border-top: none rgb(244, 67, 54); border-left: none rgb(244, 67, 54); border-right: none rgb(244, 67, 54); border-bottom: 2px solid rgb(244, 67, 54); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(1); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;"
        div.innerText="Please enter valid email id";
    }
}


pass.addEventListener("input",function(){
    if(JSON.stringify(pass.value)!=""){
        lable2.innerText="";
    }else{
        lable2.innerText="Enter Password";
    }
});
img.addEventListener("click",function(){
    window.close();
});










form.addEventListener("submit",loginFunction2);
function loginFunction2(event){
    event.preventDefault();
    if(validEmailFormate){
        loginFunction();
    }
}


function loginFunction(){
    userLoginDataRevv.map(function(elem){
        console.log(elem.email,"entered",email.value)
        if(elem.email==email.value){
            validEmail=true;
            if(elem.password==JSON.stringify(pass.value)){
                validPassword=true;
            }
        }
        
    });
    validate();
}
    
function validate(){
    if(validEmail&&validPassword){
        alert("you have logged in successfully");
        window.close();
    }
    else if(validEmail){
        alert("login failed, wrong passwod")
    }else{
        alert("this emial address not registered yet,\n please enter validemail or sign-up first");
    }
    console.log(validEmail);
    console.log(userLoginDataRevv);
}
    
    
