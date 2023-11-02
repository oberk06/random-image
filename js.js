const üst = document.querySelector("h1");
const resimler = document.querySelector("div");

const myurl = "https://source.unsplash.com/random/";

let adet = 6;

function mat() {
  return Math.floor(Math.random() * 10) + 300;
}

function ekle() {
  return ` ${mat()} × ${mat()}`;
}

for (i = 0; i < adet * 3; i++) {
  let image = document.createElement("img");
  image.src = ` ${myurl} ${ekle()}`;
  resimler.appendChild(image);
  image.setAttribute("id", "fotolar");
}
