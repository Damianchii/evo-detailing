// Realizcje - wysuwany box
$(".arrow-up").on("click", function () {
    $(this).toggleClass("active");
    if($(this).hasClass("first-arrow")){
        $(".first-box").toggleClass("active")
    }else if($(this).hasClass("second-arrow")){
        $(".second-box").toggleClass("active")
    }else if($(this).hasClass("third-arrow")){
        $(".third-box").toggleClass("active")
    }
})

// Modal Gallery

const imgs = [...document.querySelectorAll(".img-gallery img")];
const expandedImg = [...document.querySelectorAll(".expandedImg")];
const globalModal = [...document.querySelectorAll(".modal")];
const offersBar = [...document.querySelectorAll(".offer-bar")];

offersBar.forEach(offer => {
    offer.addEventListener("click", (e)=>{
        for (let i = 0; i < globalModal.length; i++) {
            offer.dataset.match === globalModal[i].dataset.match ? globalModal[i].style.display = "flex":globalModal[i].style.display = "none"
        }
    })
})

globalModal.forEach(modal =>{
    window.addEventListener("click", (e) =>{
        if(e.target == modal || e.target.classList == "close"){
            modal.style.display = "none";
        }
    })
})

imgs.forEach(img =>{
    img.addEventListener("click", function(){
        for (let i = 0; i < expandedImg.length; i++) {
            if(this.dataset.img === expandedImg[i].dataset.img){
                expandedImg[i].src = this.src;
            } 
        }
    })
})


// Cennik 

const btnResult =  document.querySelector("#count");

const carSize = document.querySelector("#carSize");
const range =  document.querySelector("#rangeInput");
const polishStep = document.querySelector("#polishStep");
const paintProtect = document.querySelector("#paintProtect");
const wash = document.querySelector("#wash");
const seatsWashing = document.querySelector("#seatsWashing");
const interiorDetailing = document.querySelector("#interiorDetailing");
const result = document.querySelector(".result span");

let servicePrice = 0;

const countServicePrice = function(e){
    e.preventDefault();
    servicePrice = 0;

    document.querySelector("#roofWrap").checked == true ? servicePrice = servicePrice + 650:servicePrice;
    document.querySelector("#mirrorsWrap").checked == true ? servicePrice = servicePrice + 300:servicePrice;
    document.querySelector("#dechroming").checked == true ? servicePrice = servicePrice + 1000:servicePrice;
    document.querySelector("#dimming").checked == true ? servicePrice = servicePrice + 600:servicePrice;
    document.querySelector("#wheelsProtect").checked == true ? servicePrice = servicePrice + 350:servicePrice;
    document.querySelector("#bonnet").checked == true ? servicePrice = servicePrice + 70:servicePrice;
    document.querySelector("#interiorPolishing").checked == true ? servicePrice = servicePrice + 300:servicePrice;
    document.querySelector("#carLining").checked == true ? servicePrice = servicePrice + 70:servicePrice;
    document.querySelector("#trunkClean").checked == true ? servicePrice = servicePrice + 70:servicePrice;
    document.querySelector("#engineClean").checked == true ? servicePrice = servicePrice + 70:servicePrice;
    document.querySelector("#headlight").checked == true ? servicePrice = servicePrice + 120:servicePrice;
    document.querySelector("#wipe").checked == true ? servicePrice = servicePrice + 80:servicePrice;
    document.querySelector("#glassPolish").checked == true ? servicePrice = servicePrice + 140:servicePrice;
    document.querySelector("#serviceCeramic").checked == true ? servicePrice = servicePrice + 120:servicePrice;


    if(carSize.value == 0){
        polishStep.value == 0 ? servicePrice = servicePrice + 550: servicePrice;
        polishStep.value == 1 ? servicePrice = servicePrice + 700: servicePrice;
        polishStep.value == 2 ? servicePrice = servicePrice + 950: servicePrice;
        document.querySelector("#sellCar").checked == true ? servicePrice = 650:servicePrice;
    }else if(carSize.value == 1){
        polishStep.value == 0 ? servicePrice = servicePrice + 700: servicePrice;
        polishStep.value == 1 ? servicePrice = servicePrice + 900: servicePrice;
        polishStep.value == 2 ? servicePrice = servicePrice + 1400: servicePrice;
        document.querySelector("#sellCar").checked == true ? servicePrice = 800:servicePrice;
    }else if(carSize.value == 2){
        polishStep.value == 0 ? servicePrice = servicePrice + 800: servicePrice;
        polishStep.value == 1 ? servicePrice = servicePrice + 1050: servicePrice;
        polishStep.value == 2 ? servicePrice = servicePrice + 1500: servicePrice;
        document.querySelector("#sellCar").checked == true ? servicePrice = 950:servicePrice;
    }else{
        servicePrice;
    }

    if(paintProtect.value == 0){
        servicePrice = servicePrice + 400;
    }else if(paintProtect.value == 1){
        servicePrice = servicePrice + 550;
    }else if(paintProtect.value == 2){
        servicePrice = servicePrice + 100;
    }else{
        servicePrice;
    }

    if(wash.value == 0){
        servicePrice = servicePrice + 70;
    }else if(wash.value == 1){
        servicePrice = servicePrice + 100;
    }else{
        servicePrice;
    }

    if(seatsWashing.value == 0){
        servicePrice = servicePrice + 250;
    }else if(seatsWashing.value == 1){
        servicePrice = servicePrice + 220;
    }else{
        servicePrice;
    }

    if(interiorDetailing.value == 0){
        servicePrice = servicePrice + 70;
    }else if(interiorDetailing.value == 1){
        servicePrice = servicePrice + 120;
    }else{
        servicePrice;
    }

    result.textContent = servicePrice;
    console.log(servicePrice)
}

btnResult.addEventListener("click", countServicePrice);

// Menu hamburger

const ulHamburger = document.querySelector("nav ul")
const liHamburger = [...document.querySelectorAll("nav ul li")];

document.querySelector(".hamburger-menu").addEventListener("click", () =>{
    ulHamburger.style.display = "flex";
    liHamburger.forEach(li =>{
        li.addEventListener("click", () =>{
            ulHamburger.style.display = "none";
        })
    })
})

document.querySelector(".exit-menu").addEventListener("click", () =>{
    ulHamburger.style.display = "none";
})



