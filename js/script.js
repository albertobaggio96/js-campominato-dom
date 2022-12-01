// function getNewDivElement(){
//   const divElement= document.createElement("div");
//   return divElement;
// }

// function getSquare(squareSize, tot){
//   const mainElement= document.querySelector("main");

//   mainElement.innerHTML=""
  
//   const bigSquare= getNewDivElement();
//   bigSquare.classList.add("big-Square", "m-auto", "d-flex", "flex-wrap", "p-0");
  
//   mainElement.append(bigSquare);
  
//   for(let i = 1; i <= tot; i++){
//     let smallSquare= getNewDivElement();
//     smallSquare.classList.add("small-Square", "d-flex", "justify-content-center", "align-items-center", squareSize);
//     bigSquare.append(smallSquare);
//     smallSquare.append(i);

//     smallSquare.addEventListener("click", function(){
//       smallSquare.classList.toggle("active");
//     })
//   }
//   return mainElement
// }

function getCasualBombPosition(howMany, minNum, maxNum){
  
  let arr= [];
  
  while(arr.length < howMany){
    const randomNumber= Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    if(!arr.includes(randomNumber)){
      arr.push(randomNumber);
    }
  }

  return arr;
}

console.log(getCasualBombPosition(16, 1, 100));

// const buttonSmall= document.getElementById("small");
// const buttonMedium= document.getElementById("medium");
// const buttonBig= document.getElementById("big");


// buttonSmall.addEventListener("click", function(){
//   getSquare("forty-nine", 49)
// })

// buttonMedium.addEventListener("click", function(){
//   getSquare("eighty-one", 81)
// })

// buttonBig.addEventListener("click", function(){
//   getSquare("hundred", 100)
// })
