import {loadPage} from './loadPage';
import { contactPage} from "./contact";
import  { aboutPage} from "./about";
import {homePage} from "./home"


loadPage();


const tabSwitch = function(){
    let home = document.querySelector(".home");
    let contact = document.querySelector(".contact");
    let about = document.querySelector(".about");

    home.addEventListener("click",homePage);
    contact.addEventListener("click",contactPage);
    about.addEventListener("click",aboutPage);
}




tabSwitch();

