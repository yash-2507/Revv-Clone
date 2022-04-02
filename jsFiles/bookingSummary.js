let bookedCar = JSON.parse(localStorage.getItem("bookedCar"));
let n = bookedCar.length - 3;
obj = {
    name: "Maruti Alto K10",
    Image: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Altok10.png",
    function: "Manual",
    fuel_type: "Petrol",
    seat: 5,
    kms_270: 4275,
    kms_450: 6730,
    kms_675: 8250,
    exChargePerKms: 10,
    available: "available",
}
let name = obj.name;
let image = obj.Image;
let function0 = obj.function;
let feulType = obj.fuel_type;
let seat = obj.seat;
let kms_270 = obj.kms_270;
let kms_450 = obj.kms_450;
let kms_675 = obj.kms_675;
let exChargePerKms = obj.exChargePerKms;
let available = obj.available;

let hname = document.querySelector("#brand");
let himage = document.querySelector("#view > img");
let hfunction0 = document.querySelector("#view > div:nth-child(3) > div:nth-child(2)");
let hfeulType = document.querySelector("#view > div:nth-child(3) > div:nth-child(3)");
let hseat = document.querySelector("#view > div:nth-child(3) > div:nth-child(1)");
// let hkms_270 = obj.kms_270;
// let hkms_450 = obj.kms_450;
// let hkms_675 = obj.kms_675;
// let hexChargePerKms = obj.exChargePerKms;
// let havailable = obj.available;
hname.innerText = obj.name;
himage.src = obj.Image;
hfunction0.innerText = obj.function;
hfeulType.innerText = obj.fuel_type;
hseat.innerText = obj.seat + " seats";