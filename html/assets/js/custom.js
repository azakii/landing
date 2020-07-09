// new type of chart


var options = {
    series: [{
        data: [44, 55, 41, 64, 22, 43, 23, 58, 85, 19]
    }, {
    data: [53, 32, 33, 52, 13, 44, 22, 45, 70, 10]
    },{
    data: [44, 55, 41, 64, 22, 43, 21, 54, 85, 17]
    }, {
    data: [53, 32, 33, 52, 13, 44, 32, 55, 80, 15]
    }],
    chart: {
    type: 'bar',
    width: '100%',
    height:300,
    borderRadius: 10
  },
  dataLabels: {
    enabled: false,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff']
  },
  axisBorder: {
    show: false,
    color: '#78909C',
    height: 1,
    width: '100%',
    offsetX: 0,
    offsetY: 0
},

legend: {show: false},
yaxis: {show: false},
grid: {show: false},
  xaxis: {
    categories: ['31 May', '30 Apr', '31 Mar', '29 Feb', '20 Dec', '1 jan', '29 sep', '29 July', '29 Nov', '29 Jun'],
  },

  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


  //chart2


  
var options = {
    series: [{
        data: [44, 55, 41, 64, 22, 43, 23, 58, 85, 19]
    }, {
    data: [53, 32, 33, 52, 13, 44, 22, 45, 70, 10]
    },{
    data: [44, 55, 41, 64, 22, 43, 21, 54, 85, 17]
    }, {
    data: [53, 32, 33, 52, 13, 44, 32, 55, 80, 15]
    }],
    chart: {
    type: 'bar',
    width: '100%',
    height:300,
    borderRadius: 10
  },
  dataLabels: {
    enabled: false,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff']
  },
  axisBorder: {
    show: false,
    color: '#78909C',
    height: 1,
    width: '100%',
    offsetX: 0,
    offsetY: 0
},

legend: {show: false},
yaxis: {show: false},
grid: {show: false},
  xaxis: {
    categories: ['31 May', '30 Apr', '31 Mar', '29 Feb', '20 Dec', '1 jan', '29 sep', '29 July', '29 Nov', '29 Jun'],
  },

  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();




// Horizontal

  var options = {
    series: [{
    data: ['12.2%', '93.75%', '34.53%', '31.79%', '23.87%']
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: 25,
    }
  },
  
  dataLabels: {
    enabled: false
  },
    legend: {show: false},
    // yaxis: {show: false},
    grid: {show: false},
  xaxis: {
    categories: ['New confirmed cases', 'New Deaths', 'Total cured cases', 'Total confirmed cases', 'Total Deaths'],
    labels: {
        show: false,
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#HorizontalChart"), options);
  chart.render();

// Horizontal2

var options = {
    series: [{
    data: ['12.2%', '93.75%', '34.53%', '31.79%', '23.87%']
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: 25,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {show: false},
  // yaxis: {show: false},
  grid: {show: false},

  xaxis: {
    categories: ['New confirmed cases', 'New Deaths', 'Total cured cases', 'Total confirmed cases', 'Total Deaths'],
    labels: {
        show: false,
    }
  },
  };

  var chart = new ApexCharts(document.querySelector("#HorizontalChart2"), options);
  chart.render();



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
