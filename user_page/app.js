const men = document.querySelector(".men")
const women = document.querySelector(".women")
const men_p = document.querySelector(".men p")
const women_p = document.querySelector(".women p")
const one = document.querySelector("input_two .one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")


men.addEventListener("click",function(){
    if(men.classList.contains("jummi")){
        $(".men_img").html('<img src="images/user/T-Time/Man.svg" alt="#">'),
        men.classList.remove("jummi")
        men_p.classList.remove("black_p")

    }
    else{
        $(".men_img").html('<img src="images/user/Man.svg" alt="#"></img>'),
        men.classList.add("jummi")
        men_p.classList.add("black_p")
        $(".women_img").html(' <img src="images/user/Women.svg" alt="#">'),
        women.classList.remove("jummi")
        women_p.classList.remove("black_p")
    }
})

women.addEventListener("click",function(){
    if(women.classList.contains("jummi")){
        $(".women_img").html(' <img src="images/user/Women.svg" alt="#">'),
        women.classList.remove("jummi")
        women_p.classList.remove("black_p")
    }
    else{
        $(".women_img").html('<img src="images/user/T-Time/Women.svg" alt="#">'),
        women.classList.add("jummi")
        women_p.classList.add("black_p")
        $(".men_img").html('<img src="images/user/T-Time/Man.svg" alt="#">'),
        men.classList.remove("jummi")
        men_p.classList.remove("black_p")
        
        
    }
})

one.addEventListener("click",function(){
    if(this.classList.contains('see')){
        $("input_two .one").html('<ion-icon name="eye-outline"></ion-icon>')
    }
})