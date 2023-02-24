// Retrieve the necessary data from localStorage
const productArray = JSON.parse(localStorage.getItem('productArray'));


// Print out Table 
function displayResultsInBarGraph(productNames, productVotes, productViews) {
  // Get the canvas element
  const canvas = document.getElementById('myChart');

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


