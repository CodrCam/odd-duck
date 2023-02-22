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

// Create a canvas element for the bar chart
let canvas = document.createElement('canvas');
canvas.id = 'results-chart';
resultList.appendChild(canvas);

//constructor funtion

function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.image = `assets/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
}

//** Helper functions **/

//Shows 3 functions and makes sure they're not the same//
function renderImg(){
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex =randomIndex();


  while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex){
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }
      imgOne.src = productArray[imgOneIndex].image;
      imgOne.title = productArray[imgOneIndex].name;
      imgOne.alt = `This is an image of ${productArray[imgOneIndex].name}`;
      imgTwo.src = productArray[imgTwoIndex].image;
      imgTwo.title = productArray[imgTwoIndex].name;
      imgTwo.alt = `This is an image of ${productArray[imgTwoIndex].name}`;
      imgThree.src = productArray[imgThreeIndex].image;
      imgThree.title = productArray[imgThreeIndex].name;
      imgThree.alt = `This is an image of ${productArray[imgThreeIndex].name}`;

      productArray[imgOneIndex].views++;
      productArray[imgTwoIndex].views++;
      productArray[imgThreeIndex].views++;
  }

function randomIndex(){
  return Math.floor(Math.random() * productArray.length);
}

function displayResultsInBarGraph() {
  // Prepare data for the bar chart
  const productNames = productArray.map(product => product.name);
  const productVotes = productArray.map(product => product.votes);
  const productViews = productArray.map(product => product.views);

  // Create the bar chart
  const chartData = {
    labels: productNames,
    datasets: [
      {
        label: 'Votes',
        data: productVotes,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Views',
        data: productViews,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const barChart = new Chart(canvas, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });
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

    // Display the survey results in a bar graph
    displayResultsInBarGraph();
  }
}

//Executable Code

let bagItem = new Product('bag');
let bananaItem = new Product('banana');
let bathroomItem = new Product('bathroom');
let bootsItem = new Product('boots');
let breakfastItem = new Product('breakfast');
let bubblegumItem = new Product('bubblegum');
let chairItem = new Product('chair');
let cthulhuItem = new Product('cthulhu');
let dogduckItem = new Product('dog-duck');
let dragonItem = new Product('dragon');
let penItem = new Product('pen');
let petsweepItem = new Product('pet-sweep');
let scissorsItem = new Product('scissors');
let sharkItem = new Product('shark');
let sweepItem = new Product('sweep', 'png');
let tauntaunItem = new Product('tauntaun');
let unicornItem = new Product('unicorn');
let watercanItem = new Product('water-can');
let wineglassItem = new Product('wine-glass');

productArray.push(bagItem,bananaItem,bathroomItem,bootsItem,breakfastItem,bubblegumItem,chairItem,cthulhuItem,dogduckItem,dragonItem,penItem,petsweepItem,scissorsItem,sharkItem,sweepItem,tauntaunItem,unicornItem,watercanItem,wineglassItem);

renderImg();

imgContainer.addEventListener('click', handleImageClicks);
resultsButton.addEventListener('click', ShowResults);


