
d3.json('samples.json').then(function(data) {
  console.log(data)
});

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function buildPlots(id) {

  // Fetch the JSON data and console log it
  d3.json('samples.json').then(function(data) {

    var sample_values = data.samples.sample_values;
    console.log(sample_values)

  });

}