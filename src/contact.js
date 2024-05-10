export function generateContact() {
    let container = document.getElementById("content");
    
    let title = document.createElement("h1");
    title.textContent = "Contact Us";
    container.appendChild(title);

    let name = document.createElement("h2");
    name.textContent = "Whimsy Delights";
    container.appendChild(name);

    let contactInfo = document.createElement("pre");
    contactInfo.textContent = 
    `
    Address: 123 Magical Lane, Enchantville, Wonderland
    Phone: +1 (555) 123-4567
    Email: info@whimsydelights.com
    `;
    container.appendChild(contactInfo);
}