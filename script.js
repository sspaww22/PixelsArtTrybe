
let pixelBoard = document.querySelector('#pixel-board');
let liColor = document.querySelectorAll('.color');
let clearBoard = document.querySelector('#clear-board');
let boardSize = document.querySelector('#board-size');
let generateBoard = document.querySelector('#generate-board');

liColor[0].style.backgroundColor = 'black';
liColor[1].style.backgroundColor = 'blue';
liColor[2].style.backgroundColor = 'red';
liColor[3].style.backgroundColor = 'rgb(0, 226, 0)';


for (let index = 1; index <= 25; index += 1) {
  pixelBoard.innerHTML += "<li class='pixel'> </li>";

}

let pixels = document.querySelectorAll('.pixel');
for (const key of pixels) {
  key.style.backgroundColor = 'white';
}

let board = 0;
let remove = false;
let size = 0;
function changeBoardSize() {
  let pixels2 = document.querySelectorAll('.pixel');
  let pixelBoard2 = document.querySelector('#pixel-board');

  if (boardSize.value == '') {
    window.alert('Board inválido!');

  } else if (boardSize.value < 5) {
    board = 5 * 5;
    size = 5;

  } else if (boardSize.value > 50){
    board = 50 * 50;
    size = 50;
    remove = true;

  } else {
    board = boardSize.value * boardSize.value;
    size = boardSize.value;
    remove = true;

  }

  if (remove === true) {
    for (const key of pixels2) {
      pixelBoard2.removeChild(key);
    }

    for (let index = 1; index <= board; index += 1) {
      pixelBoard2.innerHTML += "<li class='pixel'> </li>";
  
    }

    pixelBoard2.style.width = size * 42 + 'px';

  }

  pixels = document.querySelectorAll('.pixel');
  for (const key of pixels) {
    key.style.backgroundColor = 'white';
  }

}

let color = 'black';
function selectColor(event) {
  let selectedElement = event.target;
  for (const iterator of selectedElement.classList) {
    if (iterator === 'selected') {
    
    } else {
      for (const key in liColor) {
        liColor[key].className = 'color';
      }

      event.target.classList.add('selected');
      color = event.target.style.backgroundColor;
    }
  }
  
}

function colorPixels(event) {
  event.target.style.backgroundColor = color;
  
}

function cleanPixels() {
  pixels = document.querySelectorAll('.pixel');
  for (const key of pixels) {
    key.style.backgroundColor = 'white';

  }

}

function generateRandomColors() {
  liColor = document.querySelectorAll('.color');
  
  for (let index = 1; index < liColor.length; index += 1) {
    let random1 = Math.random() * 120;
    let random2 = Math.random() * 120;
    let random3 = Math.random() * 120;
    
    if (random1 < 1) {
      random1 = 0;

    } else if (random2 < 1) {
      random2 = 0;

    } else if (random3 < 1) {
      random3 = 0;

    }

    random1 = parseInt(random1);
    random2 = parseInt(random2);
    random3 = parseInt(random3);

    liColor[index].style.backgroundColor = 'rgb(' + random1 + ', ' + random2 + ', ' + random3 + ')';

  }

}

document.addEventListener('click', function(event) {
  let classList = event.target.classList;
  for (const iterator of classList) {
    if (iterator === 'color') {
      selectColor(event)
    };

  }
  
});

document.addEventListener('click', function(event) {
  let classList = event.target.classList;
  for (const iterator of classList) {
    if (iterator === 'pixel') {
      colorPixels(event)
    };

  }
  
});
document.addEventListener("DOMContentLoaded", function() {
  // const Primarecolors = "#000000"; 
  
  // for (let i = 0; i < getColors().length; i+= 1 ) {
  //   const colorDiv = document.createElement("div");
  //   colorDiv.className = "color";
  //   colorDiv.style.backgroundColor = getColors()[i];
    


  //   colorPalette.appendChild(colorDiv);
  }
);
const button = document.getElementById("button-random-color");
button.addEventListener("click", function CorAleatoria() {
  let liColor = document.querySelectorAll('.color');
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
  console.log("Cor Aleatória");
  liColor[0].style.backgroundColor = 'black';
  liColor[1].style.backgroundColor = "#"+randomColor;
  liColor[2].style.backgroundColor = "#"+randomColor2;
  liColor[3].style.backgroundColor = "#"+randomColor3;

  localStorage.setItem("colorPalette", JSON.stringify([liColor[0], liColor[1], liColor[2], liColor[3]]));
  });
  

clearBoard.addEventListener('click', cleanPixels);

generateBoard.addEventListener('click', changeBoardSize);

window.onload = generateRandomColors;