const dark = document.querySelector(".wrapper")
const user_page = document.querySelector(".user_page")
const sun = document.querySelector(".dark_logo")
const user = document.querySelector(".user .icon")
const menu = document.querySelector(".menu_logo")
const menu_open = document.querySelector(".menu_open")
const lang_open = document.querySelector(".lang_open")
const lang_p = document.querySelector(".lang_open p")
const til = document.querySelector(".til")
const footer = document.querySelector("footer")
const main = document.querySelector("main")
const big_card = document.querySelector(".big_card")
const bg_img = document.querySelector(".bg_img")

const put = document.querySelector(".search")
const oppen = document.querySelector('.poisc_open')

sun.addEventListener("click", function(){
  
if(dark.classList.contains("darck")){
    $(".dark_logo").html('<ion-icon class="icon" name="moon-outline"></ion-icon>')
    dark.classList.remove("darck"),
    big_card.classList.remove("darck")
    user_page.classList.add("active")
    user_page.classList.remove("night")
 
    $(".bg_img").html('<img class="bg" src="images/user/photo_2021-12-15_14-49-05.jpg" alt="#">')
   
}
 else{
    $(".dark_logo").html('<ion-icon class="icon" name="sunny-outline"></ion-icon>'),
   
    $(".bg_img").html(' <img class="bg" src="images/user/Rectangle 712.png" alt="#">')
    dark.classList.add("darck")
    big_card.classList.add("darck")
    user_page.classList.add("night")
    user_page.classList.remove("active")
 }  
   
})

menu.addEventListener("click",function(){
if(menu_open.classList.contains("none")){
    menu_open.classList.remove("none"),
    oppen.classList.add("none")
   
    $(".search").html('  <ion-icon  class="icon" name="search-outline"></ion-icon>')
    $(".menu_logo").html('<ion-icon class="icon red" name="close-outline"></ion-icon>')
}
else{
    menu_open.classList.add("none"),
  
    $(".menu_logo").html('<ion-icon  class="icon" name="list-outline"></ion-icon>')
}
})


til.addEventListener("click",function(){
    if(lang_open.classList.contains("none")){
        lang_open.classList.remove("none"),
        lang_open.classList.add("block")
    }
    else{
       
        
        lang_open.classList.remove("block"),
        lang_open.classList.add("none")
    }
})



put.addEventListener("click",function(){
    if(oppen.classList.contains("none")){
        oppen.classList.remove("none")
        menu_open.classList.add("none"),
        $(this).html('<ion-icon class="icon red" name="close-outline"></ion-icon>')
        $(".menu_logo").html('<ion-icon  class="icon" name="list-outline"></ion-icon>')

    }
    else{
        oppen.classList.add("none")
        $(this).html('  <ion-icon  class="icon" name="search-outline"></ion-icon>')
    }
    
})