$(function(){
    performanceDemo();
});
$(window).on('resize',function(){

    performanceDemo();
});
function performanceDemo(){
    top1=[];
    top2=[];
    top3=[];
    client = [];
    other = [];
    xAxis = [];
    for(i =0;i<12;i++){
        top1.push({y:40,rank:1});
        top2.push({y:20,rank:2});
        top3.push({y:10,rank:3});
        client.push({y:10,rank:10});
        other.push({y:90,rank:'NaN'});
        xAxis.push('Q'+(i+1));
    }
    data = {top1:top1,top2:top2,top3:top3,client:client,other:other};
    initPerformanceChart('#performanceChartLong',data,xAxis);

    top1=[];
    top2=[];
    top3=[];
    client = [];
    other = [];
    xAxis = [];
    for(i =0;i<1;i++){
        top1.push({y:40,rank:1});
        top2.push({y:20,rank:2});
        top3.push({y:10,rank:3});
        client.push({y:10,rank:10});
        other.push({y:90,rank:'NaN'});
        xAxis.push('Q'+(i+1));
    }
    data = {top1:top1,top2:top2,top3:top3,client:client,other:other};
    initPerformanceChart('#performanceChartLong1',data,xAxis);
    top1=[];
    top2=[];
    top3=[];
    client = [];
    other = [];
    xAxis = [];
    for(i =0;i<4;i++){
        top1.push({y:40,rank:1});
        top2.push({y:20,rank:2});
        top3.push({y:10,rank:3});
        client.push({y:10,rank:10});
        other.push({y:90,rank:'NaN'});
        xAxis.push('Q'+(i+1));
    }
    data = {top1:top1,top2:top2,top3:top3,client:client,other:other};
    initPerformanceChart('#performanceChartLong4',data,xAxis);

}

function initPerformanceChart(container,data,axis){
    $(container+' .chart').empty();
    $(container+' .chart').highcharts({
        exporting: { enabled: false },

        chart: {
            type: 'column',
            backgroundColor:'transparent',
            plotBackgroundColor:'transparent',
            height:188
        },

        title: {
            text: null
        },

        xAxis: {
            categories: axis,
            labels:{
                style:{color:'#d7d7d9'},
            },
            tickWidth:0,
            gridLineWidth:1,
            gridLineColor:'#4f464d',
            lineWidth:0,
        },
        legend:{
            enabled:false
        },

        yAxis: {
            max:100,
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

        tooltip:{
            useHTML: true,
            backgroundColor: '#221d1c',
            borderWidth: 0,
            borderRadius:10,
            headerFormat:'',
            pointFormat:'<div style="width:130px;"><div class="col-md-6 text-center" style="color:#f1ae67;font-size:30px;">{point.y}<span style="font-size:13px;">%</span></div><div class="col-md-6 text-center" style="color:#f1ae67;font-size:30px;">{point.rank}</div><div class="col-md-6 text-center" style="font-size:14px;color:#FFF;">占比</div><div class="col-md-6 text-center" style="font-size:14px;color:#FFF;">排名</div></div>',
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                groupPadding:0.30, //调整间距
                pointPadding : 0,
                borderWidth:0,
                
            },

        },

        series: [{
            name: 'top1',
            data: data.top1,
            stack: 'left',
            color:'#FFF',
        }, {
            name: 'top2',
            data: data.top2,
            stack: 'left',
            color:'#e5c9ac',
        }, {
            name: 'top3',
            data: data.top3,
            stack: 'left',
            color:'#f1ae67'
        }, {
            name: '客户',
            data: data.client,
            stack: 'right',
            color:'#6f5f5c'
        }, {
            name: '其他品牌',
            data: data.other,
            stack: 'right',
            color:'#887369'
        }]
    });

    table = $('<table>').css({width:'100%'});
    percentageRow = $('<tr>').append($('<td>').text('占比').css({color:'#FFF',width:60}));
    rankRow = $('<tr>').append($('<td>').text('排名').css({color:'#FFF'}));
    for(i in client){
        percentageRow.append($('<td>').css({color:'#f1ae67',textAlign:'center'}).text(client[i].y+'%'));
        rankRow.append($('<td>').css({color:'#f1ae67',textAlign:'center'}).text(client[i].rank));    
    }

    table.append(percentageRow).append(rankRow);
    $('<div>').append(table).css({
        backgroundColor:'rgba(255,255,255,0.05)',
        padding:10
    }).appendTo($(container+' .detailTable').empty());
}