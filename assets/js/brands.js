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

// 媒体关注度
var handleAttentionChart = function(){
    $('#media-attention').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
};

// 市场预览
var handleMarketPreview = function(){
     $('#market-preview').highcharts({
        chart: {
            backgroundColor : 'transparent'
        },
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['<100', '100-200', '>200']
        },
        // yAxis: {
        //     categories: ['GRP', '所有活动', '你的活动']
        // },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [
        {
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1]
        },{
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }
        // ,{
        //     type: 'solidgauge',
        //     name: 'Sohu',
        //     data: [10],
        //     innerRadius: '80%',
        //     dataLabels: {
        //         y: -30,
        //         format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
        //     }
        // }
        ]
    });
};

var handleTargetReceiver = function(){
    var dataCollection = [[20, '所有活动'], [30, '同行广告主'], [80, '所有活动'], [70, '你的活动'], [15, '同行广告主'], [60, '你的活动']];
    $("#target-receiver-chart").find("[data-chart]").each(function(){
        var data = dataCollection.shift();
        $(this).highcharts({
            exporting:{enabled: false},
            title :null,
            chart: {
                alignTicks: false,
                width: 200,
                type: 'column',
                backgroundColor : 'transparent'
            },
            legend:{
                // align: 'right'
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            xAxis: {
                // tickColor: 'transparent',
                // gridLineColor: 'transparent',
                // lineColor: 'transparent',
                // labels: {
                //     style: {
                //         color: 'transparent'
                //     }
                // }
                min: -1,
                max: 4,
                offset: 25
            },
            yAxis: {
                max: 100,
                // min: 100,
                gridLineColor: 'transparent',
                lineColor: 'transparent',
                title: null,
                labels: {
                    style: {
                        color: 'transparent'
                    }
                },
                offset: '40'
            },
            plotOptions: {
                column: {
                    // pointPadding: 0.2,
                    borderWidth: 0,
                    borderRadius: 5,
                    pointWidth: 26,
                    // pointPlacement: 'between'
                }
            },
            labels: {
                items :[{
                    html: data[1],
                    style :{
                        left: '35%',
                        top: '25px',
                        color: '#8f898d',
                        'font-size': '14px'
                    }
                },
                {
                    html: '<span style="font-size: 30px">' + data[0] + '</span>%',
                    style :{
                        left: '35%',
                        top: '65px',
                        color: '#fff',
                        'font-size': '14px'
                    }
                }]
            },
            series: [{
                color: '#e8ac6c',
                name: data[1],
                data: [data[0]]
            }]
        })
    });

};

var handleSideBarToggle = function(){
    $("#sidebar").find(".nav-header").on("click", function(){
        $("#page-container").toggleClass("page-sidebar-fixed-off");
    });
};

var Brands = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleAttentionChart();
            handleMarketPreview();
            handleTargetReceiver()
            handleSideBarToggle();
        }
    };
}();