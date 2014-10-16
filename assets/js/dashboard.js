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
var handleVectorMapHigh = function(){
    // Initiate the chart
           // Prepare demo data
    var data = [
        {
            "hc-key": "cn-sh",
            "value": 0
        },
        {
            "hc-key": "cn-zj",
            "value": 1
        },
        {
            "hc-key": "tw-ph",
            "value": 2
        },
        {
            "hc-key": "tw-km",
            "value": 3
        },
        {
            "hc-key": "tw-lk",
            "value": 4
        },
        {
            "hc-key": "tw-tw",
            "value": 5
        },
        {
            "hc-key": "tw-cs",
            "value": 6
        },
        {
            "hc-key": "cn-3664",
            "value": 7
        },
        {
            "hc-key": "cn-3681",
            "value": 8
        },
        {
            "hc-key": "tw-tp",
            "value": 9
        },
        {
            "hc-key": "tw-ch",
            "value": 10
        },
        {
            "hc-key": "tw-tt",
            "value": 11
        },
        {
            "hc-key": "tw-pt",
            "value": 12
        },
        {
            "hc-key": "cn-6657",
            "value": 13
        },
        {
            "hc-key": "cn-6663",
            "value": 14
        },
        {
            "hc-key": "cn-6665",
            "value": 15
        },
        {
            "hc-key": "cn-6666",
            "value": 16
        },
        {
            "hc-key": "cn-6667",
            "value": 17
        },
        {
            "hc-key": "cn-gs",
            "value": 18
        },
        {
            "hc-key": "cn-6669",
            "value": 19
        },
        {
            "hc-key": "cn-6670",
            "value": 20
        },
        {
            "hc-key": "cn-6671",
            "value": 21
        },
        {
            "hc-key": "tw-kh",
            "value": 22
        },
        {
            "hc-key": "tw-hs",
            "value": 23
        },
        {
            "hc-key": "tw-hh",
            "value": 24
        },
        {
            "hc-key": "cn-nx",
            "value": 25
        },
        {
            "hc-key": "cn-sa",
            "value": 26
        },
        {
            "hc-key": "tw-cl",
            "value": 27
        },
        {
            "hc-key": "cn-3682",
            "value": 28
        },
        {
            "hc-key": "tw-ml",
            "value": 29
        },
        {
            "hc-key": "cn-6655",
            "value": 30
        },
        {
            "hc-key": "cn-ah",
            "value": 31
        },
        {
            "hc-key": "cn-hu",
            "value": 32
        },
        {
            "hc-key": "tw-ty",
            "value": 33
        },
        {
            "hc-key": "cn-6656",
            "value": 34
        },
        {
            "hc-key": "tw-cg",
            "value": 35
        },
        {
            "hc-key": "cn-6658",
            "value": 36
        },
        {
            "hc-key": "tw-hl",
            "value": 37
        },
        {
            "hc-key": "tw-nt",
            "value": 38
        },
        {
            "hc-key": "tw-th",
            "value": 39
        },
        {
            "hc-key": "cn-6659",
            "value": 40
        },
        {
            "hc-key": "cn-6660",
            "value": 41
        },
        {
            "hc-key": "cn-6661",
            "value": 42
        },
        {
            "hc-key": "tw-yl",
            "value": 43
        },
        {
            "hc-key": "cn-6662",
            "value": 44
        },
        {
            "hc-key": "cn-6664",
            "value": 45
        },
        {
            "hc-key": "cn-6668",
            "value": 46
        },
        {
            "hc-key": "cn-gd",
            "value": 47
        },
        {
            "hc-key": "cn-fj",
            "value": 48
        },
        {
            "hc-key": "cn-bj",
            "value": 49
        },
        {
            "hc-key": "cn-hb",
            "value": 50
        },
        {
            "hc-key": "cn-sd",
            "value": 51
        },
        {
            "hc-key": "tw-tn",
            "value": 52
        },
        {
            "hc-key": "cn-tj",
            "value": 53
        },
        {
            "hc-key": "tw-il",
            "value": 54
        },
        {
            "hc-key": "cn-js",
            "value": 55
        },
        {
            "hc-key": "cn-ha",
            "value": 56
        },
        {
            "hc-key": "cn-qh",
            "value": 57
        },
        {
            "hc-key": "cn-jl",
            "value": 58
        },
        {
            "hc-key": "cn-xz",
            "value": 59
        },
        {
            "hc-key": "cn-xj",
            "value": 60
        },
        {
            "hc-key": "cn-he",
            "value": 61
        },
        {
            "hc-key": "cn-nm",
            "value": 62
        },
        {
            "hc-key": "cn-hl",
            "value": 63
        },
        {
            "hc-key": "cn-yn",
            "value": 64
        },
        {
            "hc-key": "cn-gx",
            "value": 65
        },
        {
            "hc-key": "cn-ln",
            "value": 66
        },
        {
            "hc-key": "cn-sc",
            "value": 67
        },
        {
            "hc-key": "cn-cq",
            "value": 68
        },
        {
            "hc-key": "cn-gz",
            "value": 69
        },
        {
            "hc-key": "cn-hn",
            "value": 70
        },
        {
            "hc-key": "cn-sx",
            "value": 71
        },
        {
            "hc-key": "cn-jx",
            "value": 72
        }
    ];

    // Initiate the chart
    $('#world-map').highcharts('Map', {

        title : {
            text : null
        },

        // subtitle : {
        //     text : null
        // },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 60,
            max: 70
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/cn/custom/cn-all-sar-taiwan'],
            joinBy: 'hc-key',
            // name: 'Random data',
            states: {
                // hover: {
                //     color: '#BADA55'
                // }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
};
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
var handleDonutChartHigh = function(){
    var gaugeOptions = {

        chart: {
            backgroundColor: 'transparent',
            type: 'solidgauge'
        },
        colors: ['#fff'],
        title: null,
        credits: {
            enabled: false
        },
        pane: {
            center: ['50%', '50%'], 
            // size: '40%',
            background: {
                backgroundColor: '#959094',
                innerRadius: '70%',
                outerRadius: '90%'
            }
        },

        tooltip: {
            enabled: false
        },

        xAxis: {
            plotLines: [{
                width: 100
            }]
        },
        // the value axis
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            // title: {
            //     y: 120
            // },
            labels: {
                enabled: false
            }
        },

        plotOptions: {
            solidgauge: {
                // animation: true,
                dataLabels: {
                    y: 4,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    
    // The pptv gauge
    $('#donut-chart-1').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'pptv',
                offset: 10,
                y: 140,
                style: {
                    color:"#fff"
                }
            }
        },

        pane: {
            size: '80%',
            // 计算： startAngle: (0.5 - data) * 360 * 0.5
            //        endAngle: startAngle + 360
            startAngle: (0.5 - 0.1) * 360 * 0.5,
            endAngle:  (0.5 - 0.1) * 360 * 0.5 + 360 ,
        },

        series: [{
            name: 'pptv',
            data: [10],
            innerSize: '20%',
            dataLabels: {
                y: -30,
                format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:12px;color:#fff">%</span></div>'
            }
        }]

    }));

    // The Youku gauge
    $('#donut-chart-2').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'Youku',
                y: 200,
                style: {
                    color:"#fff"
                }
            }
        },
        pane: {
            size: '90%',
            // 计算： startAngle: (0.5 - data) * 360 * 0.5
            //        endAngle: startAngle + 360
            startAngle: (0.5 - 0.86) * 360 * 0.5,
            endAngle:  (0.5 - 0.86) * 360 * 0.5 + 360,
        },
        series: [{
            name: 'Youku',
            data: [86],
            innerSize: '10%',
            dataLabels: {
                y: -60,
                format: '<div style="text-align:center"><span style="font-size:80px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:12px;color:#fff">%</span></div>'
            }
        }]
    }));

    // The Sohu gauge
    $('#donut-chart-3').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'Sohu',
                offset: 10,
                y: 140,
                style: {
                    color:"#fff"
                }
            }
        },

        pane: {
            size: '80%',
            // 计算： startAngle: (0.5 - data) * 360 * 0.5
            //        endAngle: startAngle + 360
            startAngle: (0.5 - 0.1) * 360 * 0.5,
            endAngle:  (0.5 - 0.1) * 360 * 0.5 + 360 ,
        },

        series: [{
            name: 'Sohu',
            data: [10],
            innerSize: '20%',
            dataLabels: {
                y: -30,
                format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:12px;color:#fff">%</span></div>'
            }
        }]

    }));

}
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
            handleDonutChartHigh();
            // handleVectorMap();
            handleVectorMapHigh();
            // handleDashboardDatepicker();
            // handleSideBarToggle();
        }
    };
}();