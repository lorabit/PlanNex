$(function(){
	targetPeopleDemo();
});

function targetPeopleDemo(){
	genderDistribution('#genderDistribution','优酷',61);

	ageDistribution('#ageDistribution',['0-18','19-25','26-35','36-45','46-55','56-100'],[10,20,30,20,10,10]);
}

function genderDistribution(container,title,percentage){
	c = $(container).empty().css('height',80);
	$('<div>').text(title).css({'font-size':30,'color':'#e8ac6c','padding-top':'20px'}).addClass('col-md-4').appendTo(c);
	$('<div>').addClass('col-md-4').append($('<div>').addClass('gender-man').append($('<div>').addClass('share').css('height',percentage+'%')))
		.append($('<div>').addClass('gender-woman').append($('<div>').addClass('share').css('height',(100-percentage)+'%')))
		.appendTo(c);
	$('<div>')
		.append(
			$('<div>').append(
				$('<span>').attr('id','gender-percentage').text(percentage)
			).append(
				$('<span>').text('% 男性').attr('id','gender-info')
			)
		)
		.appendTo(c);
}

function ageDistribution(container,axis,data) {
    $(container).css('height',80)
    	.append($('<div>').attr('id','ageDistributionChart').css('height',80).addClass('col-md-5'))
    	.append($('<div>').attr('id','ageDistributionInfo').addClass('col-md-5'));

    $('<div>')
		.append(
			$('<div>').append(
				$('<span>').attr('id','age-percentage').text('9')
			).append(
				$('<span>').append(
					$('<span>').attr('id','age-percentage-decimal').text('.21')
				).append(
					$('<span>').attr('id','age-percentage-info').text('% 25-29岁')
				)
			)
		)
		.appendTo('#ageDistributionInfo');

    $('#ageDistributionChart').highcharts({
        exporting: { enabled: false },
        chart: {
    		margin:0,
            type: 'column',
            backgroundColor:'transparent',
            plotBackgroundColor:'transparent'
        },
        title: {
            text: null
        },
        legend:{
            enabled:false,
        },
        xAxis: {
            categories: axis,
            labels:{
            	enabled:false,
            },
            tickWidth:0,
            gridLineWidth:0,
            gridLineColor:'#4f464d',
            lineWidth:0,
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            gridLineWidth:0,
            offset:25,
            tickWidth:0,
            lineWidth:0,
            tickPosition:'inside',
            tickColor:'rgba(255,255,255,0.2)',
            labels:{
                enabled:false
            }
        },
        tooltip: {
           enabled:false
        },
        plotOptions: {
            column: {
                padding:0,
                pointPadding: 0,
                borderColor:'transparent',
                borderWidth: 0,
                edgeWidth:0,
                groupPadding:0.05,
                dataLabels:{
                    color:'#d7d7d9',
                    enabled:false,
                    hover:function(){alert(1);}
                },
                states:{
                	hover:{
                		color:'#e8ac6c'
                	}
                }
            }
        },
        series: [{
            color:'rgba(255,255,255,0.2)',
            data: data

        }]
    });
}			
