var margin = {top: 20, right: 20, bottom: 50, left: 50},
    width = 1100 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";

var formatDate = d3.time.format("%Y-%m-%d"); // convert date string to a Date object,
var formatDate2  = d3.time.format("%Y - %b")
var y = d3.scale.linear().range([height,0]); //function scale data
var x = d3.time.scale().range([0, width]);
/*var x = d3.time.scale();*/

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
    
var xAxis = d3.svg.axis() // add axis at tge bottom orientation
        .scale(x)
        .orient('bottom')
        .ticks(d3.time.years, 5)
        .tickSize(5)
        .tickFormat(d3.time.format("%Y")); // <-- format


  var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<span style='color:red'> $" + d[1] + " Billion </span> </br> <strong>" + formatDate2(d[0])+ "</strong>";
  });

  //create a chart
  var chart = d3.select('.chart')
          .attr('width',width + margin.left + margin.right)
          .attr('height',height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //SVG container
  
  chart.call(tip);
  
  // get JSON data, and build bars based on values
  d3.json(url, function (json) {
      
       //get the max value in data for scale
   y.domain([0, d3.max(json.data, function(d){
                return d[1];})]);
    // format the data
         json.data.forEach(function(d) {
        d[0] = formatDate.parse(d[0]);
        d[1] = +d[1];
    });
    
  x.domain(d3.extent(json.data, function (d) {  return d[0]; }));
  /*x.range([width/json.data.length/2, width-width/json.data.length/2]);*/
  
  chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
  
  //  chart.append("g")
  //       .attr("class", "y axis")
  //       .call(yAxis)
   chart.selectAll(".bar")
        .data(json.data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d[0]); })
        .attr("width", width/json.data.length)
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return height - y(d[1]); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
  });
  


//create a chart
var chart2 = d3.select('.chart2')
        .attr('width',width + margin.left + margin.right)
        .attr('height',height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //SVG container

chart2.call(tip);

// get JSON data, and build bars based on values
d3.json(url, function (json) {
    
     //get the max value in data for scale
 y.domain([0, d3.max(json.data, function(d){
              return d[1];})]);
  // format the data
       json.data.forEach(function(d) {
      d[0] = formatDate.parse(d[0]);
      d[1] = +d[1];
  });
  
x.domain(d3.extent(json.data, function (d) {  return d[0]; }));
/*x.range([width/json.data.length/2, width-width/json.data.length/2]);*/

chart2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

//  chart2.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
 chart2.selectAll(".bar")
      .data(json.data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d[0]); })
      .attr("width", width/json.data.length)
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return height - y(d[1]); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
});

//init AOS

AOS.init();


// number animtaion
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 400) {
        $(window).off("scroll", startCounter);
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3300,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    }
}
