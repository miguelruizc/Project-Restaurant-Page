import {drinks} from './menuData.js';
import {food} from './menuData.js';

export function generateMenu() {
    // Container to append items
    let container = document.getElementById("content");

    // Title h1
    let title = document.createElement("h1");
    title.textContent = "Menu";
    container.appendChild(title);

    // Beverages
    let titleBev = document.createElement("h2");
    titleBev.textContent = "Beverages";
    container.appendChild(titleBev);    
    // UL
    let bevList = document.createElement("ul");
        drinks.forEach((item) => {
            let li = document.createElement("li");
            
            let drinkTitle = document.createElement("h3");
            drinkTitle.textContent = item.name;
            drinkTitle.classList.add("menuItemTitle");
            
            let drinkDescription = document.createElement("p");
            drinkDescription.textContent = item.description;
            drinkDescription.classList.add("menuItemDescription");
            
            let drinkPrice = document.createElement("p");
            drinkPrice.textContent = item.price;
            drinkPrice.classList.add("menuItemPrice");
            
            li.appendChild(drinkTitle);
            li.appendChild(drinkDescription);
            li.appendChild(drinkPrice);

            bevList.appendChild(li);
        })

    container.appendChild(bevList);
    // Food
    let titleFood = document.createElement("h2");
    titleFood.textContent = "Food";
    container.appendChild(titleFood);
    // UL
    let foodList = document.createElement("ul");
        food.forEach((item) => {
            let li = document.createElement("li");
            
            let foodTitle = document.createElement("h3");
            foodTitle.textContent = item.name;
            foodTitle.classList.add("menuItemTitle");
            
            let foodDescription = document.createElement("p");
            foodDescription.textContent = item.description;
            foodDescription.classList.add("menuItemDescription");
            
            let foodPrice = document.createElement("p");
            foodPrice.textContent = item.price;
            foodPrice.classList.add("menuItemPrice");
            
            li.appendChild(foodTitle);
            li.appendChild(foodDescription);
            li.appendChild(foodPrice);

            foodList.appendChild(li);
        })

    container.appendChild(foodList);
}