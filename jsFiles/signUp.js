
let email=document.querySelector("#undefined-Pleaseenteryouremail-EmailID-50932");
let btn=document.querySelector("body > div > div.text-center.mr-t-12 > button");
let img=document.querySelector("body > div > div.sign-up-title > img");
let lable1=document.querySelector("body > div > div:nth-child(5) > div > label");
let hr2=document.querySelector("body > div > div:nth-child(5) > div > div:nth-child(4) > hr:nth-child(2)");
let emailCompleted=false;
let passMsg=document.querySelector("#passMsg");
let emailvalue="";
let passValue="";

let validEmailFormate=false;
email.addEventListener("input",alerting);
function alerting(){
    if(!emailCompleted){
        alerting1();
    }else{
        
        if(JSON.stringify(email.value)!==""){
            lable1.innerText="";
            console.log("enetered Pass")
        }else{
            lable1.innerText="Enter Password";
        }
    }
}
function alerting1(){
    if(email.value!==""){
        lable1.innerText="";
    }else{
        lable1.innerText="Enter Email";
    }
    
    if(email.value.substring(email.value.length-4,email.value.length)==".com"&&email.value.includes("@")){

        validEmailFormate=true;
        hr2.style="border-top: none green; border-left: none green; border-right: none green; border-bottom: 2px solid green; bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(1); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;";
    }else{
        validEmailFormate=false;
        hr2.style="border-top: none rgb(244, 67, 54); border-left: none rgb(244, 67, 54); border-right: none rgb(244, 67, 54); border-bottom: 2px solid rgb(244, 67, 54); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(1); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;"
        
    }
}

btn.addEventListener("click",signUpFunction2);
function signUpFunction2(event){
    if(!emailCompleted){
        if(validEmailFormate){
            emailvalue=email.value;
            email.type="password";
            email.value="";
            emailCompleted=true;
            passMsg.style+="display:block;color:red;text-align:center;";
            lable1.innerText="Enter Password";
        }else{
            alert("please enter a valid e-mail");
        }
    }else{
        passValue="";
        passValue=JSON.stringify(email.value);
        if(passValue!=='""'){
            signUpFunction1();
        }
        else{
            alert("Password can not be empty");
        }
        
    }
       
}
img.addEventListener("click",function(){
    window.close();

});
function signUpFunction1(){
    console.log(emailvalue,passValue,passValue.length);
    let userLoginDataRevv=JSON.parse(localStorage.getItem("userLoginDataRevv"))||[];
    userLoginDataRevv.push({email:emailvalue,password:JSON.stringify(email.value)});
    alert("you have signed up successfully");
    localStorage.setItem("userLoginDataRevv",JSON.stringify(userLoginDataRevv));
    window.close();
}















