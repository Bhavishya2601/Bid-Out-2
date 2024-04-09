document.addEventListener('DOMContentLoaded', function() {
    var lineGraph; // Declare lineGraph variable
    var newDataValue;
    var minValue;
    var interval; // Variable to hold the interval
    var currentValue; // Variable to hold the current value

    // Function to prompt user for new data
    function updateData() {
      newDataValue = 25000;
      minValue = 20000;
      currentValue = newDataValue; // Set current value to initial value
      var initialData = {
        labels: [getCurrentTime()], // Initial label is current time and date
        datasets: [{
          label: 'Price Trend (in $)',
          backgroundColor: 'rgb(219, 55, 101)',
          borderColor: 'rgb(219, 55, 101)',
          borderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: 'rgb(219, 55, 101)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(219, 55, 101)',
          data: [newDataValue] // Initial data
        }]
      };

      // Configuration options
      var options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return '$' + value; // Add '$' prefix to y-axis values
              }
            }
          }],
          xAxes: [{
            type: 'time', // X-axis type is time
            time: {
              unit: 'second', // Display unit as second
              displayFormats: {
                second: 'h:mm:ss a' // Format for displaying seconds
              }
            }
          }]
        },
        legend: {
          display: false // Hide legend
        }
      };

      // Get the context of the canvas element we want to select
      var ctx = document.getElementById('lineGraph').getContext('2d');

      // Create the line graph with initial data
      lineGraph = new Chart(ctx, {
        type: 'line',
        data: initialData,
        options: options
      });

      // Update the chart
      lineGraph.update();

      // Display the last value
      document.getElementById('bidAmount').textContent = newDataValue;

      // Start updating the graph automatically every 20 seconds
      interval = setInterval(updateGraph, 20000);
    }

    // Event listener for manual data input button
    document.getElementById('manualInputButton').addEventListener('click', function() {
      // Get the value from the input field
      var inputValue = parseFloat(document.getElementById('newBid').value);
      // Check if entered value is greater than current value
      if (inputValue > currentValue) {
        // Add the value to the graph
        addData(inputValue);
      }
    });

    // Function to add data to the graph
    function addData(value) {
      // Add the value to the graph data
      lineGraph.data.datasets[0].data.push(value);
      lineGraph.data.labels.push(getCurrentTime()); // Add current time and date as label
      lineGraph.update(); // Update the chart
      // Display the last value
      document.getElementById('bidAmount').textContent = value;
      // Update the current value
      currentValue = value;
      // Stop the graph update interval
      stopGraph();
    }

    // Function to stop the graph
    function stopGraph() {
      clearInterval(interval); // Stop the interval
    }

    // Function to update the graph data
    function updateGraph() {
      newDataValue -= 500;
      lineGraph.data.datasets[0].data.push(newDataValue);
      lineGraph.data.labels.push(getCurrentTime()); // Add current time and date as label
      lineGraph.update(); // Update the chart
      // Display the last value
      document.getElementById('bidAmount').textContent = newDataValue;
      // Update the current value
      currentValue = newDataValue;
      if (newDataValue <= minValue) {
        clearInterval(interval); // Stop the interval
      }
    }

    // Function to get current time and date
    function getCurrentTime() {
      var now = new Date();
      return now.toLocaleTimeString('en-US', {hour12: true}) + ' ' + now.toLocaleDateString('en-US');
    }

    // Prompt user for new data when the page loads
    updateData();
  });