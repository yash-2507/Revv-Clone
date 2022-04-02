let selectNext = document.querySelectorAll(".openSecond");
let toSelect = document.querySelectorAll(".toOpen");
let j = 0;
let btn = document.querySelector("#openList");
let bankList = document.querySelector("#bankList");
let selectedBank = document.querySelector("#slectedBank");
let bankstr = "none";
let fiveBanks = document.querySelectorAll(".fiveBank");
let bankNames = document.querySelectorAll(".bName");
let bankList2 = document.querySelectorAll("div.bn2");
console.log(bankList2);
btn.addEventListener("click", function () {
    if (bankstr === "none") {
        bankstr = "block";
    } else {
        bankstr = "none";
    }
    bankList.style.display = bankstr;
});





for (let i = 0; i < 5; i++) {
    selectNext[i].addEventListener("click", function () {
        toSelect[i].style.display = "block";
        selectNext[i].style.borderBottom = "none";
        if (j !== i) {
            toSelect[j].style.display = "none";
            selectNext[j].style.borderBottom = "1px solid gray";

        }
        j = i;
    });
}

for (let i in fiveBanks) {
    fiveBanks[i].addEventListener("click", function () {
        selectedBank.value = fiveBanks[i].innerText + " bank";
    })
}
for (let i in bankList2) {
    bankList2[i].addEventListener("click", function () {
        console.log(i);
        // selectedBank.value = bankList2[i].innerHTML + " bank";
    })
}