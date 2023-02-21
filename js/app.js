// **Globals

let productArray = [];
let votingRounds = 25;

//CSS containers

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsButton = document.getElementById('show-results');
let resultList = document.getElementById('results-container');


//constructor funtion

function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.imagePath = `assets/${name}.${fileExtension}`;
  this.timesShown = 0;
  this.votes = 0;
}

//** Helper functions **/

//Shows 3 functions and makes sure they're not the same//
function renderImg(){
  let imgOneIndex = randomIndex();
  let imgTwo = randomIndex();
  let imgThree =randomIndex();
}

while (true) {
  imgOneIndex = randomIndex();
  imgTwoIndex = randomIndex();
  imgThreeIndex = randomIndex();

  if (imgOneIndex !== imgTwoIndex && imgOneIndex !== imgThreeIndex && imgTwoIndex !== imgThreeIndex) {
    break; // All three indexes are different, exit the loop
  }

imgOne.src = productArray[imgOneIndex].imagePath;
imgOne.title = productArray[imgOneIndex].name;
imgOne.alt = `This is an image of ${productArray[imgOneIndex].name}`;
imgTwo.src = productArray[imgTwoIndex].imagePath;
imgTwo.title = productArray[imgTwoIndex].name;
imgTwo.alt = `This is an image of ${productArray[imgTwoIndex].name}`;
imgThree.src = productArray[imgThreeIndex].imagePath;
imgThree.title = productArray[imgThreeIndex].name;
imgThree.alt = `This is an image of ${productArray[imgThreeIndex].name}`;

productArray[imgOneIndex].views++;
productArray[imgTwoIndex].views++;
productArray[imgThreeIndex].views++;
}

function randomIndex(){
  return Math.floor(Math.random() * productArray.length);
}

function handleImageClicks (event){
  let imgClicked = event.target.title;
  console.dir(imgClicked);

  for (let i=0; i< productArray.length; i++){
    if(imgClicked === productArray[i].name){
      productArray[i].votes++;
    }
  }
  
  //voting increment
  votingRounds--;

  //render image
  renderImg();

  if (votingRounds === 0){
    imgContainer.removeEventListener(`click`, handleImageClicks);
  }
}

function ShowResults(){
  if(votingRounds === 0){
    for (let i = 0; i < productArray.length; i++){
      let productListItem = document.createElement('li');
      productListItem.textContent = `${productArray[i].name}: Views: ${productArray[i].views} & votes: ${productArray[i].votes}`;
      resultList.appendChild(productListItem);
    }
    resultsButton.removeEventListener('click', ShowResults);
  }
}

//Executable Code

let bagItem = new Item('bag');
let bananaItem = new Item('banana');
let bathroomItem = new Item('bathroom');
let bootsItem = new Item('boots');
let breakfastItem = new Item('breakfast');
let bubblegumItem = new Item('bubblegum');
let chairItem = new Item('chair');
let cthulhuItem = new Item('cthulhu');
let dogduckItem = new Item('dog-duck');
let dragonItem = new Item('dragon');
let penItem = new Item('pen');
let petsweepItem = new Item('pet-sweep');
let scissorsItem = new Item('scissors');
let sharkItem = new Item('shark');
let sweepItem = new Item('sweep', 'png');
let tauntaunItem = new Item('tauntaun');
let unicornItem = new Item('unicorn');
let watercanItem = new Item('water-can');
let wineglassItem = new Item('wine-glass');

productArray.push(bagItem,bananaItem,bathroomItem,bootsItem,breakfastItem,bubblegumItem,chairItem,cthulhuItem,dogduckItem,dragonItem,penItem,petsweepItem,scissorsItem,sharkItem,sweepItem,tauntaunItem,unicornItem,watercanItem,wineglassItem);

renderImg();

imgContainer.addEventListener('click', handleImageClicks);
resultsButton.addEventListener('click', ShowResults);
