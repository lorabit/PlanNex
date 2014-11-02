$(function(){
    longColumnDemo('#exposureChart','曝光量');
    longColumnDemo('#activeChart','活动数');
    oneColumnDemo('#oneColumnChart1','曝光量');
    oneColumnDemo('#oneColumnChart2','活动数');
    fourColumnDemo('#fourColumnChart1','曝光量');
    fourColumnDemo('#fourColumnChart2','活动数');
});

function longColumnDemo(container,title){
    axis = [
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
            ];
    data = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
    initColumnChart(container,axis,data,title);
}

function oneColumnDemo(container,title){
    axis = [
                'Q1',
            ];
    data = [49.9];
    initColumnChart(container,axis,data,title);
}

function fourColumnDemo(container,title){
        axis = [
                'Q1',
                'Q2',
                'Q3',
                'Q4',
            ];
    data = [49.9, 71.5, 106.4, 129.2,];
    initColumnChart(container,axis,data,title);
}

function initColumnChart(container,axis,data,title) {
    $(container).highcharts({
        exporting: { enabled: false },
        chart: {
            height:$(container).height(),
            type: 'column',
            backgroundColor:'transparent',
            plotBackgroundColor:'rgba(255,255,255,0.2)',
        },
        title: {
            text: null
        },
        legend:{
            itemStyle:{
                color:'#FFF',
                fontSize:'18px',
                fontWeight:'normal',
            },
            symbolWidth:0,
        },
        xAxis: {
            categories: axis,
            labels:{
                 y:-315,
                style:{color:'#d7d7d9'},
            },
            tickWidth:0,
            gridLineWidth:10,//修改间距参数，共两个，默认值1
            gridLineColor:'#4f464d',
            lineWidth:0,
            // tickInterval:0.01,
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            gridLineWidth:0,
            offset:25,
            tickWidth:1,
            lineWidth:1,
            tickPosition:'inside',
            tickColor:'rgba(255,255,255,0.2)',
            labels:{
                style:{color:'#FFF'}
            }
        },
        tooltip: {
           enabled:false
        },
        plotOptions: {
            column: {
                padding:0,
                pointPadding: 0,
                borderColor:'',
                borderWidth: 1,
                edgeWidth:0,
                groupPadding:0.1, //修改间距参数，共两个，默认值0
                dataLabels:{
                    color:'#d7d7d9',
                    enabled:true,
                }
            }
        },
        series: [{
            name: title,
            color:'#e8ac6c',
            data: data

        }]
    });
}			
