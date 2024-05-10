import { generateHome } from './home.js';
import { generateMenu } from './menu.js';
import { generateContact } from './contact.js';
import './style.css';

function clearDom() {
    document.getElementById("content").innerHTML = "";
}

let homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", function(){
    clearDom();
    generateHome();

});

let menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", function(){
    clearDom();
    generateMenu();
});

let contactBtn = document.getElementById("contact");
contactBtn.addEventListener("click", () => {
    clearDom();
    generateContact();
});

generateHome();



