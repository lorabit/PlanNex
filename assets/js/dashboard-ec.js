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
var makeMapLegends = function(colors, colorAxis, elemId){
    var tableHtml = $('<table style="font-size:smaller;color:#545454; position: absolute; bottom: 40px;"><tbody>' + 
                    '</tbody></table>');
    for(var i = 0; i < colors.length; i++){
        // var se = colors[i];
        var tr = $('<tr><td class="legendColorBox"><div style="border:1px solid #ccc;padding:1px">' + 
                 '<div style="width:4px;height:0;border:5px solid #fff;overflow:hidden"></div>' +
                 '</div></td><td class="legendLabel" style="color: #fff"></td></tr>');
        tr.find('.legendColorBox > div > div').css("border", "5px solid " + colors[i]);
        tr.find('.legendLabel').html(colorAxis.dataClasses[i].name);
        tr.appendTo(tableHtml.find("tbody"));
    }
    tableHtml.appendTo(elemId);
};
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

    // for(var i = 0; i < data.length; i++){
    //     data[i].path = "m 200,250 a 150,30 0 1 0 0,70";
    // }
    // Initiate the chart
    $('#world-map').highcharts('Map', {
        chart:{
            backgroundColor: 'transparent',
            borderColor: '#676a72',
            events:{
                load: function(events){
                    // alert(this);
                    
                    var _this = this;
                    var colors = _this.options.colors;
                    var colorAxis = _this.options.colorAxis;
                    makeMapLegends(colors, colorAxis, "#world-map-legend");
                }
            }
        },
        legend: {
            x: 1000,
            floating: true,
            align: 'right'
        },
        title : {
            text : null
        },

        // subtitle : {
        //     text : null
        // },

        mapNavigation: {
            enabled: false,
            // buttonOptions: {
            //     verticalAlign: 'bottom'
            // }
        },
        // tooltip:{
        //     enabled: false
        // },
        colors: ['#676b74', '#ae8151', '#303645'],
        colorAxis: {
                    dataClassColor: 'category',
                    dataClasses: [{
                        to: 40,
                        name: '品牌A'
                    }, {
                        from: 40,
                        to:60,
                        name: '品牌B'
                    }, {
                        from: 60,
                        name: '行业数据'
                    }]
                },
        series : [{
            
            mapData: Highcharts.maps['countries/cn/custom/cn-all-sar'],
            data : data,
            joinBy: 'hc-key',
            // name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: false
            }
        }]
    });
};
var makeLegends = function(series, elemId){
    var tableHtml = $('<table style="font-size:smaller;color:#545454"><tbody>' + 
                    '</tbody></table>');
    for(var i = 0; i < series.length; i++){
        var se = series[i];
        if(se.userOptions.regression){
            var tr = $('<tr><td class="legendColorBox"><div style="border:1px solid #ccc;padding:1px">' + 
                     '<div style="width:4px;height:0;border:5px solid #fff;overflow:hidden"></div>' +
                     '</div></td><td class="legendLabel" style="color: #fff"></td></tr>');
            tr.find('.legendColorBox > div > div').css("border", "5px solid " + se.color);
            tr.find('.legendLabel').html(se.name);
            tr.appendTo(tableHtml.find("tbody"));
        }
    }
    tableHtml.appendTo(elemId);
};

// 制造数据，demo用
var fakeData = function(a, b, c, type){
    var data = [];
    if(type == "regression"){
        for(var i = 0; i < 350; i++){
            data[i] = [i, a * i * i + b * i + c];
        }
        return data;
    }else{
        for(var i = 0; i < 350; i++){
            data[i] = [i, a * i * i + b * i + c + 15 * (0.5 - Math.random())];
        }
        return data;
    }
};

var handleInteractiveChartEc = function(){
    "use strict";
    var inChart = echarts.init(document.getElementById('interactive-chart'));
    var option = {
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
            type: 'scatter',
            events:{
                load: function(events){
                    // alert(this);
                    
                    var _this = this;
                    var series = _this.series;
                    makeLegends(series, "#interactive-chart-legend");
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
            lineWidth: 5,
            name: '品牌A',
            data: fakeData(-0.001, 0.6, 1, "regression"),
            regression: true,
            marker: {
                enabled: false
            },
        }, {
            color: orange,
            name: '品牌B',
            data: fakeData(-0.001, 0.6, 1, "dots"),
            marker: {
                radius: 2,
                symbol: 'circle'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.y}% REACH, <p>{point.x}</p> GRP',
                backgroundColor: "#000",
                shadow: true
            }
        }],
         plotOptions: {
            scatter: {
                marker: {
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            }
        },
    };
    option = {
        title : {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['最高气温','最低气温']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis: [{
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
            tickColor: '#7d6f71',
            lineColor: '#7d6f71',
            tickPosition: 'inside',
            labels: {
                style: {
                    color: '#fff'
                }
            }
        }],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                }
            }
        ],
        series : [
            {
                name:'最高气温',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'最低气温',
                type:'line',
                data:[1, -2, 2, 5, 3, 2, 0],
                markPoint : {
                    data : [
                        {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    inChart.setOption(option);
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
            type: 'scatter',
            events:{
                load: function(events){
                    // alert(this);
                    
                    var _this = this;
                    var series = _this.series;
                    makeLegends(series, "#interactive-chart-legend");
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
            lineWidth: 5,
            name: '品牌A',
            // data: [[0, 12], [25, 12], [50, 25], [75, 30], [100, 35], [125, 42], [150, 55], [175, 67], [200, 72], [225, 82], [250, 80], [275, 95], [300, 85]],
            data: fakeData(-0.001, 0.6, 1, "regression"),
            regression: true,
            marker: {
                enabled: false
            },
            // states: {
            //     hover: {
            //         lineWidth: 0
            //     }
            // },
        }, {
            color: orange,
            // type: 'scatter',
            // lineWidth: 5,
            name: '品牌B',
            // data: [[0, 15], [25, 22], [50, 15], [75, 20], [100, 31], [125, 40], [150, 45], [175, 57], [200, 68], [225, 79], [250, 90], [275, 90], [300, 89]],
            data: fakeData(-0.001, 0.6, 1, "dots"),
            marker: {
                radius: 2,
                symbol: 'circle'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.y}% REACH, <p>{point.x}</p> GRP',
                backgroundColor: "#000",
                shadow: true
            }
        }],
         plotOptions: {
            scatter: {
                marker: {
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            }
        },
    });
};

var handleDonutChartHighPie = function(){
    var gaugeOptions = {
        chart: {
            // background: 
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        colors: ['#fff', '#e8ac6c', '#9b877b', '#695a59'],
        title: null,
        credits: {
            enabled: false
        },
        pane: {
            center: ['50%', '50%'], 
            // size: '40%',
            background: {
                backgroundColor: 'transparent',
                innerRadius: '85%',
                outerRadius: '95%',
                borderWidth: 0
            },
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
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        }
    };

    
    // The pptv gauge
    $('#donut-chart-1').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'pptv',
                offset: 10,
                y: 65,
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
            innerRadius: '80%',
            dataLabels: {
                y: -30,
                format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        }]

    }));

    // The Youku gauge
    $('#donut-chart-2').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'Youku',
                y: 120,
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
            innerRadius: '80%',
            dataLabels: {
                y: -60,
                format: '<div style="text-align:center"><span style="font-size:80px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        },{
            data: [6],
            color: '#e8ac6c',
            innerRadius: '85%',
            outerRadius: '95%',
            startAngle: (0.5 - 0.86) * 360 * 0.5 + 0.8 * 360,
            dataLabels: {
                enabled: false
            }
        }]
    }));

    // The Sohu gauge
    $('#donut-chart-3').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'Sohu',
                offset: 10,
                y: 65,
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
            innerRadius: '80%',
            dataLabels: {
                y: -30,
                format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        }]

    }));

}
var handleDonutChartHigh = function(){
    var gaugeOptions = {
        chart: {
            backgroundColor: 'transparent',
            type: 'solidgauge'
        },
        colors: ['#fff', '#e8ac6c', '#9b877b', '#695a59'],
        title: null,
        credits: {
            enabled: false
        },
        pane: {
            center: ['50%', '50%'], 
            // size: '40%',
            background: {
                backgroundColor: '#959094',
                innerRadius: '85%',
                outerRadius: '95%',
                borderWidth: 0
            },
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
                
            },
            bar: {
                borderWidth: 0
            }
        }
    };

    
    // The pptv gauge
    $('#donut-chart-1').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'pptv',
                offset: 10,
                y: 65,
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
            innerRadius: '80%',
            dataLabels: {
                y: -30,
                format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        }]

    }));

    // The Youku gauge
    $('#donut-chart-2').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'Youku',
                y: 120,
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
            data: [{
                    y: 86
                }, {
                    y: 6}, 4, 2],
            innerRadius: '80%',
            dataLabels: {
                y: -60,
                format: '<div style="text-align:center"><span style="font-size:80px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        },{
            data: [6],
            color: '#e8ac6c',
            innerRadius: '85%',
            outerRadius: '95%',
            startAngle: (0.5 - 0.86) * 360 * 0.5 + 0.8 * 360,
            dataLabels: {
                enabled: false
            }
        }]
    }));

    // The Sohu gauge
    $('#donut-chart-3').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: 'Sohu',
                offset: 10,
                y: 65,
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
            innerRadius: '80%',
            dataLabels: {
                y: -30,
                format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        }]

    }));

}


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
            handleInteractiveChartEc();
            // handleDonutChartHigh();
            // handleVectorMapHigh();
            // handleSideBarToggle();
        }
    };
}();