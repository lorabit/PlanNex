/*   
Template Name: PlaNex - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.2.0
Version: 1.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.3/
*/

var blue		= '#348fe2',
    blueLight	= '#5da5e8',
    blueDark	= '#1993E4',
    aqua		= '#49b6d6',
    aquaLight	= '#6dc5de',
    aquaDark	= '#3a92ab',
    green		= '#00acac',
    greenLight	= '#33bdbd',
    greenDark	= '#008a8a',
    orange		= '#f59c1a',
    orangeLight	= '#e8ac6c',
    orangeDark	= '#c47d15',
    dark		= '#2d353c',
    grey		= '#c3c6cb',
    purple		= '#727cb6',
    purpleLight	= '#8e96c5',
    purpleDark	= '#5b6392',
    red         = '#ff5b57';

var handleVectorMap = function() {
	"use strict";
	if ($('#world-map').length !== 0) {
		$('#world-map').vectorMap({
		map: 'cn_mill_en',
		scaleColors: ['#e74c3c', '#0071a4'],
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.5,
		hoverColor: false,
		markerStyle: {
			initial: {
				fill: '#747178',
				stroke: 'transparent',
				r: 3
			}
    	},
        regions: [{
            scale: {
              red: '#ff0000',
              green: '#00ff00'
            },
            attribute: 'fill',
            values: {
              "CN-33": 'red',
              "CN-64": 'red',
              "CN-54": 'red',
              "CN-22": 'red',
              "CN-31": 'red',
              "CN-34": 'red'
            },
            legend: {
              horizontal: true,
              title: 'Color'
            }
          },{
            values: {
              "CN-33": 'blue',
              "CN-35": 'blue'
            },
            attribute: 'fill'
          },{
            scale: {
              redGreen: 'assets/bg-red-green.png',
              yellowBlue: 'assets/bg-yellow-blue.png'
            },
            values: {
              "US-TX": 'redGreen',
              "US-CA": 'yellowBlue'
            },
            attribute: 'fill',
            legend: {
              horizontal: true,
              cssClass: 'jvectormap-legend-bg',
              title: 'Pattern',
              labelRender: function(v){
                return {
                  redGreen: 'Low',
                  yellowBlue: 'High'
                }[v];
              }
            }
          }],
		regionStyle: {
			initial: {
				fill: 'rgb(116,113,120)',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0.4,
                "stroke-opacity": 1
			},
			hover: {
				"fill-opacity": 0.8
			},
			selected: {
				fill: 'yellow'
			},
			selectedHover: {
			}
		},
		focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 0
        },
		backgroundColor: 'transparent',
        colors : {
            "CN-33": "orange",
            "CN-35": green
        },
		markers: [
			{latLng: [41.90, 12.45], name: 'Xizang', fill :'white'},
			{latLng: [43.73, 7.41], name: 'Monaco'},
			{latLng: [-0.52, 166.93], name: 'Nauru'},
			{latLng: [-8.51, 179.21], name: 'Tuvalu'},
			{latLng: [43.93, 12.46], name: 'San Marino'},
			{latLng: [47.14, 9.52], name: 'Liechtenstein'},
			{latLng: [7.11, 171.06], name: 'Marshall Islands'},
			{latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
			{latLng: [3.2, 73.22], name: 'Maldives'},
			{latLng: [35.88, 14.5], name: 'Malta'},
			{latLng: [12.05, -61.75], name: 'Grenada'},
			{latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
			{latLng: [13.16, -59.55], name: 'Barbados'},
			{latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
			{latLng: [-4.61, 55.45], name: 'Seychelles'},
			{latLng: [7.35, 134.46], name: 'Palau'},
			{latLng: [42.5, 1.51], name: 'Andorra'},
			{latLng: [14.01, -60.98], name: 'Saint Lucia'},
			{latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
			{latLng: [1.3, 103.8], name: 'Singapore'},
			{latLng: [1.46, 173.03], name: 'Kiribati'},
			{latLng: [-21.13, -175.2], name: 'Tonga'},
			{latLng: [15.3, -61.38], name: 'Dominica'},
			{latLng: [-20.2, 57.5], name: 'Mauritius'},
			{latLng: [26.02, 50.55], name: 'Bahrain'},
			{latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
		]
		});
	}
};
var makeLegends = function(series){
    var tableHtml = $('<table style="font-size:smaller;color:#545454"><tbody>' + 
                    '</tbody></table>');
    for(var i = 0; i < series.length; i++){
        var se = series[i];
        var tr = $('<tr><td class="legendColorBox"><div style="border:1px solid #ccc;padding:1px">' + 
                 '<div style="width:4px;height:0;border:5px solid #fff;overflow:hidden"></div>' +
                 '</div></td><td class="legendLabel" style="color: #fff"></td></tr>');
        tr.find('.legendColorBox > div > div').css("border", "5px solid " + se.color);
        tr.find('.legendLabel').html(se.name);
        tr.appendTo(tableHtml.find("tbody"));
    }
    tableHtml.appendTo("#interactive-chart-legend");
};
var handleInteractiveChartHigh = function(){
    "use strict";
    $('#interactive-chart').highcharts({
        xAxis: {
            title: '',
            min: 0,
            max: 350,
            tickColor: '#7d6f71',
            lineColor: '#7d6f71',
            tickPosition: 'inside',
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            title: '',
            min: 0,
            max: 100,
            gridLineColor: '#7d6f71',
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },
        title: {
            text: ''
        },
        chart: {
            backgroundColor: 'transparent',
            events:{
                load: function(events){
                    // alert(this);
                    
                    var _this = this;
                    var series = _this.series;
                    console.log(series);
                    makeLegends(series)
                }
            }
        },
        legend:{
            x: 1000,
            floating: true,
            align: 'right'
        },
        series: [{
            color: orange,
            type: 'line',
            lineWidth: 5,
            name: '品牌A',
            data: [[0, 12], [25, 12], [50, 25], [75, 30], [100, 35], [125, 42], [150, 55], [175, 67], [200, 72], [225, 82], [250, 80], [275, 95], [300, 85]],
            marker: {
                radius: 4,
                symbol: 'circle'
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
        }, {
            color: grey,
            type: 'line',
            lineWidth: 5,
            name: '品牌B',
            data: [[0, 15], [25, 22], [50, 15], [75, 20], [100, 31], [125, 40], [150, 45], [175, 57], [200, 68], [225, 79], [250, 90], [275, 90], [300, 89]],
            marker: {
                radius: 4,
                symbol: 'circle'
            }
        }]
    });
};
var handleInteractiveChart = function () {
	"use strict";
    function showTooltip(x, y, contents) {
        $('<div id="tooltip" class="flot-tooltip">' + contents + '</div>').css( {
            top: y - 45,
            left: x - 55
        }).appendTo("body").fadeIn(200);
    }
	if ($('#interactive-chart').length !== 0) {
	
        var data1 = [ 
            [1, 40], [2, 50], [3, 60], [4, 60], [5, 60], [6, 65], [7, 75], [8, 90], [9, 100], [10, 105], 
            [11, 110], [12, 110], [13, 120], [14, 130], [15, 135],[16, 145], [17, 132], [18, 123], [19, 135], [20, 150] 
        ];
        var data2 = [
            [1, 10],  [2, 6], [3, 10], [4, 12], [5, 18], [6, 20], [7, 25], [8, 23], [9, 24], [10, 25], 
            [11, 18], [12, 30], [13, 25], [14, 25], [15, 30], [16, 27], [17, 20], [18, 18], [19, 31], [20, 23]
        ];
        var xLabel = [
            [1,''],[2,''],[3,'May&nbsp;15'],[4,''],[5,''],[6,'May&nbsp;19'],[7,''],[8,''],[9,'May&nbsp;22'],[10,''],
            [11,''],[12,'May&nbsp;25'],[13,''],[14,''],[15,'May&nbsp;28'],[16,''],[17,''],[18,'May&nbsp;31'],[19,''],[20,'']
        ];
        $.plot($("#interactive-chart"), [
                {
                    data: data1, 
                    label: "品牌A", 
                    color: "#fff",
                    lines: { show: true, fill:false, lineWidth: 4 },
                    // points: { show: true, radius: 3, fillColor: '#fff' },
                    points: { show: true, radius: 3 },
                    shadowSize: 0
                }, {
                    data: data2,
                    label: '品牌B',
                    color: orangeLight,
                    lines: { show: true, fill:false, lineWidth: 4 },
                    points: { show: true, radius: 3, fillColor: '#fff' },
                    shadowSize: 0
                }
            ], 
            {
                xaxis: {  ticks:xLabel,  lineWidth: 1,  tickDecimals: 0, tickColor: 'transparent' },
                yaxis: {  ticks: 10, tickColor: '#7c6f71', min: 0, max: 160 },
                grid: {
                    hoverable: true, 
                    clickable: true,
                    tickColor: "#ddd",
                    borderWidth: {
                        top: 1,
                        right: 0,
                        bottom: 1,
                        left: 0
                    },
                    // backgroundColor: '#fff',
                    // show: false,
                    borderColor: '#7c6f71'
                },
                legend: {
                    // labelBoxBorderColor: '#ddd',
                    color: "#fff",
                    margin: 10,
                    noColumns: 1,
                    // show: true,
                    container: $("#interactive-chart-legend"),
                    labelFormatter: function(label, series) {
                        // series is the series object for the label
                        return '<span style="color: #fff">' + label + '</span>';
                    }
                }
            }
        );
        var previousPoint = null;
        $("#interactive-chart").bind("plothover", function (event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));
            if (item) {
                if (previousPoint !== item.dataIndex) {
                    previousPoint = item.dataIndex;
                    $("#tooltip").remove();
                    var y = item.datapoint[1].toFixed(2);
                    
                    var content = item.series.label + " " + y;
                    showTooltip(item.pageX, item.pageY, content);
                }
            } else {
                $("#tooltip").remove();
                previousPoint = null;            
            }
            event.preventDefault();
        });
    }
};

var handleDonutChart = function () {
	"use strict";
	if ($('#donut-chart').length !== 0) {
        var donutData = [{ label: "客户",  data: 86, color: "#fff", selected: true},
			{ label: "其他产品",  data: 14, color: "#9a9195"}];
		$.plot('#donut-chart', donutData, {
			series: {
				pie: {
					innerRadius: 0.5,
                    // radius: 20,
					show: true,
					label: {
						show: true
					}
				}
			},
			legend: {
				show: true
			}
		});
    }
};

var handleDashboardSparkline = function() {
	"use strict";
    var options = {
        height: '50px',
        width: '100%',
        fillColor: 'transparent',
        lineWidth: 2,
        spotRadius: '4',
        highlightLineColor: blue,
        highlightSpotColor: blue,
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false
    };
    function renderDashboardSparkline() {
        var value = [50,30,45,40,50,20,35,40,50,70,90,40];
        options.type = 'line';
        options.height = '23px';
        options.lineColor = red;
        options.highlightLineColor = red;
        options.highlightSpotColor = red;
        
        var countWidth = $('#sparkline-unique-visitor').width();
        if (countWidth >= 200) {
            options.width = '200px';
        } else {
            options.width = '100%';
        }
        
        $('#sparkline-unique-visitor').sparkline(value, options);
        options.lineColor = orange;
        options.highlightLineColor = orange;
        options.highlightSpotColor = orange;
        $('#sparkline-bounce-rate').sparkline(value, options);
        options.lineColor = green;
        options.highlightLineColor = green;
        options.highlightSpotColor = green;
        $('#sparkline-total-page-views').sparkline(value, options);
        options.lineColor = blue;
        options.highlightLineColor = blue;
        options.highlightSpotColor = blue;
        $('#sparkline-avg-time-on-site').sparkline(value, options);
        options.lineColor = grey;
        options.highlightLineColor = grey;
        options.highlightSpotColor = grey;
        $('#sparkline-new-visits').sparkline(value, options);
        options.lineColor = dark;
        options.highlightLineColor = dark;
        options.highlightSpotColor = grey;
        $('#sparkline-return-visitors').sparkline(value, options);
    }
    
    renderDashboardSparkline();
    
    $(window).on('resize', function() {
        $('#sparkline-unique-visitor').empty();
        $('#sparkline-bounce-rate').empty();
        $('#sparkline-total-page-views').empty();
        $('#sparkline-avg-time-on-site').empty();
        $('#sparkline-new-visits').empty();
        $('#sparkline-return-visitors').empty();
        renderDashboardSparkline();
    });
};

var handleDashboardDatepicker = function() {
	"use strict";
    $('#datepicker-inline').datepicker({
        todayHighlight: true
    });
};

var handleDashboardTodolist = function() {
	"use strict";
    $('[data-click=todolist]').click(function() {
        var targetList = $(this).closest('li');
        if ($(targetList).hasClass('active')) {
            $(targetList).removeClass('active');
        } else {
            $(targetList).addClass('active');
        }
    });
};

var handleDashboardGritterNotification = function() {
    $(window).load(function() {
        setTimeout(function() {
            $.gritter.add({
                title: 'Welcome back, Admin!',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacus ut lectus rutrum placerat.',
                image: 'assets/img/user-2.jpg',
                sticky: true,
                time: '',
                class_name: 'my-sticky-class'
            });
        }, 1000);
    });
};

var handleSideBarToggle = function(){
    $("#sidebar").find(".nav-header").on("click", function(){
        $("#page-container").toggleClass("page-sidebar-fixed-off");
    });
};

var Dashboard = function () {
	"use strict";
    return {
        //main function
        init: function () {
            // handleDashboardGritterNotification();
            handleInteractiveChartHigh();
            // handleInteractiveChart();
            // handleDashboardSparkline();
            // handleDonutChart();
            // handleDashboardTodolist();
            handleVectorMap();
            // handleDashboardDatepicker();
            handleSideBarToggle();
        }
    };
}();