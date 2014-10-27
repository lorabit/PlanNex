$(function(){
    initColumnChart();
});

function initColumnChart(container) {
    $(container).highcharts({
        chart: {
            type: 'column',
            backgroundColor:'#645c63'
        },
        title: {
            text: 'Monthly Average Rainfall'
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
            ],
            labels:{
                 y:-290,
                style:{color:'#d7d7d9'},
            },
            tickWidth:0,
            gridLineWidth:1,
            gridLineColor:'#4f464d',
            lineWidth:0
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            },
            gridLineWidth:0,
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
                padding:0,
                pointPadding: 0,
                borderColor:'',
                borderWidth: 1,
                edgeWidth:0,
                groupPadding:0,
                dataLabels:{
                    color:'#d7d7d9',
                    enabled:true
                }
            }
        },
        series: [{
            name: 'Tokyo',
            color:'#e8ac6c',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }]
    });
}			