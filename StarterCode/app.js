


d3.json('samples.json').then(function(data) {
  console.log(data)
});

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function buildPlots() {

  // Fetch the JSON data
  d3.json("samples.json").then(function(data) {
    
    var selected_sample = data.samples[1];
    // console.log(selected_sample)
    var sample_id = data.samples[1].id
    // console.log(sample_id)
    var otu_ids = data.samples[1].otu_ids
    // console.log(otu_ids)
    var otu_labels = data.samples[1].otu_labels
    // console.log(otu_labels)
    var sample_values = data.samples[1].sample_values

    var top10_sample_values = sample_values.slice(0, 10).reverse();
    var top10_otu_ids = otu_ids.slice(0, 10).reverse();
    var top10_otu_labels = otu_labels.slice(0, 10).reverse();

    var otu_id_labels = []

    for (var i = 0; i < top10_otu_ids.length; i++) {
      otu_id_labels.push("OTU " + top10_otu_ids[i]);
    }

    // Create the Trace
    var trace1 = {
      x: top10_sample_values,
      y: otu_id_labels,
      text: top10_otu_labels,
      type: "bar",
      orientation: "h",
      marker: {
          color: "#1978B5"
      }
    };

    var bar_layout = {
      height: 500,
      width: 400,
    };

    bar_data = [trace1];

    Plotly.newPlot("bar", bar_data, bar_layout);

    // create trace
    var trace2 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: 'YlGnBu'
      }
    };

    // create the data array for the plot
    var bubble_data = [trace2];

    // plot the bubble chat to the appropriate div
    Plotly.newPlot('bubble', bubble_data);


    // Function used to filter for the sample that contains the same id as the selected id
    // function filterSamples(sample_id) {
    //   return sample_id = selectedId;
    // }

    // Grab values from json object to build the plots
    // var filteredSample = data.samples.id.filter(filterSamples);
    // console.log(filteredSample)

  });

}


buildPlots();

// function init(){
//   // Submit Button handler
//   function selectedData() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     // Set '940' as the default Test Subject ID No.
//     d3.select("#selDataset").node().value = "940";

//     // Select the input value from the form
//     var selectedId = d3.select("#selDataset").node().value;
//     console.log(selectedId);

//     // Build the plot with the new stock
//     buildPlots(selectedId);
//   }
// }

// init();