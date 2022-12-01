const mainElement= document.querySelector("main");
const buttonSmall= document.getElementById("small");
buttonSmall.classList.add("btn", "btn-secondary");
const buttonMedium= document.getElementById("medium");
buttonMedium.classList.add("btn", "btn-secondary", "my-3");
const buttonBig= document.getElementById("big");
buttonBig.classList.add("btn", "btn-secondary");

function getNewDivElement(){
  const divElement= document.createElement("div");
  return divElement;
}

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

function getSquare(squareSize, tot, bomb){

  mainElement.innerHTML="";
  
  const bigSquare= getNewDivElement();
  bigSquare.classList.add("big-Square", "m-auto", "d-flex", "flex-wrap", "p-0");
  
  mainElement.append(bigSquare);

  let sum = 0;

  const score= getNewDivElement();
  mainElement.append(score);
  score.append(sum);

  const squareArray= []

  let areWinner;

  for(let i = 1; i <= tot; i++){
    let smallSquare= getNewDivElement();
    squareArray.push(smallSquare)
    smallSquare.classList.add("small-Square", "d-flex", "justify-content-center", "align-items-center", squareSize);
    bigSquare.append(smallSquare);
    smallSquare.append(i);

    smallSquare.addEventListener("click", function(){

      if (bomb.includes(i)){
        console.log(bomb);
        bomb.forEach(function (bom){
          squareArray[bom-1].classList.add("bomb");
        })
        squareArray.forEach(function (square){
          square.classList.add("active");
        })
        areWinner = "HAI PERSO, RIPROVA";
        getEndGrame(areWinner);

      } else{
        smallSquare.classList.add("active");
        sum++;
        score.innerHTML="";
        score.append(sum);
        if (sum === tot - bomb.length){
          areWinner= "HAI VINTO, GIOCA ANCORA"
          getEndGrame(areWinner);
        }
      }
      
    },{once:true})
  }
  console.log(squareArray);
  return mainElement;
}

function getEndGrame(win){
  const div=getNewDivElement();
  div.classList.add("end-game");
  div.innerHTML= win;
  console.log(div);
  mainElement.append(div);
  div.append(buttonSmall, buttonMedium, buttonBig)
}


buttonSmall.addEventListener("click", function(){
  let randomBomb= getCasualBombPosition(16, 1, 49);
  console.log(randomBomb);
  getSquare("forty-nine", 49, randomBomb);
})

buttonMedium.addEventListener("click", function(){
  let randomBomb= getCasualBombPosition(16, 1, 81);
  console.log(randomBomb);
  getSquare("eighty-one", 81, randomBomb);
})

buttonBig.addEventListener("click", function(){
  let randomBomb= getCasualBombPosition(16, 1, 100);
  console.log(randomBomb);
  getSquare("hundred", 100, randomBomb);
})
