const resep = document.querySelector(".resep");
const h1 = document.getElementById("heading");
const container = document.querySelector(".container");
resep.innerHTML = `<ul><li>1 bungkus indomie</li>
<li>1 buah Telur</li>
<li>2 gelas air</li>
<li>garam</li>
<li>bawang</li>
<li>bakso</li><ul`;
const gambar = document.createElement("img");
const src = document.createAttribute("src");
src.value = "image.jpg";

gambar.setAttributeNode(src);
resep.appendChild(gambar);
// style
heading.style.textAlign = "center";
gambar.style.width = "300px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.height = "100VH";

container.style.backgroundColor = "#1ee3e5";
