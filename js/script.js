const rader = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];

for (let i = 0; i < rader.length; i++) {
  const h1El = document.createElement("h1");

  h1El.style.textAlign = "center";

  h1El.innerText = rader[i];

  document.body.append(h1El);

  if (i === 0) {
    h1El.style.fontSize = "20px";
    h1El.style.backgroundColor = "hsl(180, 100%, 50%)";
  } else if (i === 1) {
    h1El.style.fontSize = "34px";
    h1El.style.backgroundColor = "hsl(200, 100%, 50%)";
  } else if (i === 2) {
    h1El.style.fontSize = "42px";
    h1El.style.backgroundColor = "hsl(210, 100%, 50%)";
  } else if (i === 3) {
    h1El.style.fontSize = "50px";
    h1El.style.backgroundColor = "hsl(220, 100%, 50%)";
  } else if (i === 4) {
    h1El.style.fontSize = "58px";
    h1El.style.backgroundColor = "hsl(230, 100%, 50%)";
  }
}

const maindivEl = document.createElement("div");

const div1El = document.createElement("div");

const div2El = document.createElement("div");

const div3El = document.createElement("div");

maindivEl.appendChild(div1El);

maindivEl.appendChild(div2El);

maindivEl.appendChild(div3El);

maindivEl.style.border = "2px solid black";

maindivEl.style.display = "flex";
maindivEl.style.margin = "0 auto";
maindivEl.style.justifyContent = "space-evenly";
maindivEl.style.alignItems = "center";


maindivEl.style.width = "1000px";

maindivEl.style.height = "400px";

div1El.style.backgroundColor = "LightSteelBlue";
div1El.style.width = "55px";
div1El.style.height = "250px";


div2El.style.backgroundColor = "LightSteelBlue";
div2El.style.width = "55px";
div2El.style.height = "250px";

div3El.style.backgroundColor = "LightSteelBlue";
div3El.style.width = "55px";
div3El.style.height = "250px";

document.body.append(maindivEl);

const kolum1El = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (let y = 0; y < kolum1El.length; y++) {
  const pEl = document.createElement("p");
  pEl.style.display = "flex";
  pEl.style.paddingLeft = "10px";
  

  
  pEl.style.width = "35px";
  pEl.style.margin = "0 0 0"
  pEl.style.marginLeft = "5px";
  

  pEl.innerText = kolum1El[y];

  div1El.appendChild(pEl);

  if (kolum1El[y] % 2 === 0) {
    pEl.style.backgroundColor = "black";
    pEl.style.color = "white";
  } else {
    pEl.style.backgroundColor = "white";
  }

  if( y === 4){
    pEl.style.backgroundColor = "";
    pEl.style.color = "white";

  }
  if (y === 0){
    pEl.style.marginTop = "35px"
  }
}

const kolum2El = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

for (let x = 0; x < kolum2El.length; x++) {
  const p2El = document.createElement("p");
  p2El.style.display = "flex";
  p2El.style.paddingLeft = "10px";
  p2El.style.margin = "0 0 0"
  p2El.style.marginLeft = "7px";
  
  


  p2El.style.textAlign = "center";
  p2El.style.justifyContent = "center";
  p2El.style.width = "30px";

  p2El.innerText = kolum2El[x];

  div2El.appendChild(p2El);

  if (kolum2El[x] % 2 === 0) {
    p2El.style.backgroundColor = "black";
    p2El.style.color = "white";
  } else {
    p2El.style.backgroundColor = "white";
  }

  if( x === 1){
    p2El.style.backgroundColor = "";
    p2El.style.color = "white";

  }

  if (x === 0){
    p2El.style.marginTop = "35px"
  }

  

  }


const kolum3El = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (let z = 0; z < kolum3El.length; z++) {
  const p3El = document.createElement("p");
  p3El.style.display = "flex";
  p3El.style.paddingLeft = "10px";
  p3El.style.textAlign = "end";
  p3El.style.justifyContent = "end";
  p3El.style.width = "30px";
  p3El.style.margin = "0 0 0"
  p3El.style.marginLeft = "7px";


  p3El.innerText = kolum3El[z];

  div3El.appendChild(p3El);

  if (z === 0) {
    p3El.style.backgroundColor = "black";
    p3El.style.color = "white"
  }
  if (z === 1) {
    p3El.style.backgroundColor = "white";
    p3El.style.color = "black"
  }
  if (z === 2) {
    p3El.style.backgroundColor = "black";
    p3El.style.color = "white"
  }
  if (z === 3) {
    p3El.style.backgroundColor = "white";
    p3El.style.color = "black"
  }
  if (z === 4) {
    p3El.style.backgroundColor = "black";
    p3El.style.color = "white"
  }
  
  if (z === 6) {
    p3El.style.backgroundColor = "black";
    p3El.style.color = "white"
  }
  if (z === 7) {
    p3El.style.backgroundColor = "white";
    p3El.style.color = "black"
  }
  if (z === 8) {
    p3El.style.backgroundColor = "black";
    p3El.style.color = "white"
  }
  if (z === 9) {
    p3El.style.backgroundColor = "white";
    p3El.style.color = "black"
  }
  if (z === 0){
    p3El.style.marginTop = "35px"
  }

}
