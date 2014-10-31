$(function(){
	targetPeopleDemo();
});

function targetPeopleDemo(){
	genderDistribution('#genderDistribution','优酷',61);

	ageDistribution('#ageDistribution',['0-18','19-25','26-35','36-45','46-55','56-100'],[10.01,20.99,30.02,20.98,10.5,7.5]);


    data = [
        {
            name:'taobao',
            value:'10',
            color:'#6f5f5c',
        },
        {
            name:'baidu',
            value:'10',
            color:'#9b877b',
        },
        {
            name:'youku',
            value:'60',
            color:'#FFF',
        },
        {
            name:'sohu',
            value:'10',
            color:'#e5c9ac',
        },
        {
            name:'qq',
            value:'10',
            color:'#e9ac6d',

            hover:true,
        }
    ];

    makeKineticDonut('individualIncomeDistribution',data,{
        width:140,
        height:140,
        totalDeg:180,
        startDeg:180,
        innerRadius:40,
        outerRadius:60,
        hoverInnerRadius:35,
        hoverOuterRadius:65,
        percentageFontSize:50,
        nameTextOffsetY:10,
    });

    makeKineticDonut('educationLevelDistribution',data,{
        width:140,
        height:140,
        startDeg:180,
        innerRadius:40,
        outerRadius:60,
        hoverInnerRadius:35,
        hoverOuterRadius:65,
        percentageFontSize:30,
        nameTextOffsetY:-5,
        nameFontSize:13,
    });

    makeKineticDonut('familyIncomeDistribution',data,{
        width:140,
        height:140,
        totalDeg:180,
        startDeg:180,
        innerRadius:40,
        outerRadius:60,
        hoverInnerRadius:35,
        hoverOuterRadius:65,
        percentageFontSize:50,
        nameTextOffsetY:10,
    });
}


    // <div class="col-md-4" id="individualIncomeDistribution"></div>
    //                             <div class="col-md-4" id="educationLevelDistribution"></div>
    //                             <div class="col-md-4" id="familyIncomeDistribution"></div>



function genderDistribution(container,title,percentage){
    if(percentage>50) 
        {
            h = '男性';
            p = percentage;
            s = '.gender-man';
        }else{
            h = '女性';
            p = 100-percentage;
            s = '.gender-woman';
        }

	c = $(container).empty().css('height',80);
	$('<div>').text(title).css({'font-size':30,'color':'#e8ac6c','padding-top':'20px'}).addClass('col-md-4').appendTo(c);
	$('<div>').addClass('col-md-4').append($('<div>').addClass('gender-man').append($('<div>').addClass('share').css('height',percentage+'%')))
		.append($('<div>').addClass('gender-woman').append($('<div>').addClass('share').css('height',(100-percentage)+'%')))
		.appendTo(c);
	$('<div>')
		.append(
			$('<div>').append(
				$('<span>').attr('id','gender-percentage').text(p)
			).append(
				$('<span>').text('% '+h).attr('id','gender-info')
			)
		)
		.appendTo(c);
    $('.gender-man').hover(function(){
        $('.gender-man .share').addClass('active');
        $('#gender-percentage').text(percentage);
        $('#gender-info').text('% 男性');
    },function(){
        $('.share').removeClass('active');
    });

    $('.gender-woman').hover(function(){
        $('.gender-woman .share').addClass('active');
        $('#gender-percentage').text(100-percentage);
        $('#gender-info').text('% 女性');
    },function(){
        $('.share').removeClass('active');
    });

    $(s+' .share').addClass('active');
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

    for(i in data){
        data[i] = {y:data[i],  
                events:{mouseOver:function(){
                   $('#age-percentage').text(parseInt(this.y)); 
                   dec = parseInt((this.y-parseInt(this.y)+0.0001)*100);
                   dec ='.'+dec;
                   $('#age-percentage-decimal').text(dec); 
                   $('#age-percentage-info').text('% '+axis[this.x]);
                }
            }
            };
    }
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
