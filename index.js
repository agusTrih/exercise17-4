// deklarasi
const h1 = document.getElementById("heading");
const container = document.querySelector(".container");

// add li in list
const arrList = ["1 bungkus indomie", "telur", "bawang", "bakso", "garam"];
const ul = document.createElement("ul");
document.querySelector(".list").appendChild(ul);
arrList.forEach((el) => {
    const itemList = document.createTextNode(el);
    const li = document.createElement("li");
    li.appendChild(itemList);
    ul.appendChild(li);
});

// image in image
const image = document.querySelector(".image");
const img = document.createElement("img");
const src = document.createAttribute("src");
// src join img and image
src.value = "image.jpg";
img.setAttributeNode(src);
image.appendChild(img);

// style

img.style.width = "300px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.height = "100VH";

container.style.backgroundColor = "#1ee3e5";
