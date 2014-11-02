$(function(){
	data = [{
			name:'youku',
			value:'60',
			color:'#FFF',
			hover:true,
			enableHover:false
		},
		{
			name:'sohu',
			value:'40',
			color:'rgba(255,255,255,0.2)',
			enableHover:false
		}
	];
	

	data = [
	{
			name:'曼秀雷敦',
			value:'60',
			color:'#FFF',
		},
		{
			name:'top1',
			value:'10',
			color:'#e5c9ac',
		},
		{
			name:'top2',
			value:'10',
			color:'#e9ac6d',
		},
		{
			name:'top1',
			value:'10',
			color:'#9b877b',
		},
		{
			name:'其他品牌',
			value:'10',
			color:'#6f5f5c',
		},
		
	];
	makeKineticDonutWithTitle('donut-chart-1',data,{},'pptv',1);
	makeKineticDonutWithTitle('donut-chart-2',data,{
		width:180,
		height:180,
		innerRadius:100-35,
		outerRadius:120-35,
		hoverInnerRadius:95-35,
		hoverOuterRadius:125-35,
		nameFontSize:18,
		percentageFontSize:60,
		totalDeg:360,
		startDeg:180,
		topPadding:1,
	},'Youtu',2);

	// for (i in data)
	// 	data[i].enableHover = false;

	makeKineticDonutWithTitle('donut-chart-3',data,{},'sohu',3);
});
function makeKineticDonutWithTitle(container,data,params,title,rank){
	params = params || {};
	width = params.width||130;
	height = params.height || 130;
	innerRadius = params.innerRadius || 50;
	outerRadius = params.outerRadius || 60;
	hoverInnerRadius = params.hoverInnerRadius || 47;
	hoverOuterRadius = params.hoverOuterRadius || 63;
	startDeg = params.startDeg || 60;
	totalDeg = params.totalDeg || 360;
	nameFontSize = params.nameFontSize || 16;
	percentageFontSize = params.percentageFontSize || 40;
	// nameTextOffsetX = params.nameTextOffsetX || 5;
	 nameTextOffsetY = params.nameTextOffsetY || 0;
	// percentageTextOffsetX = params.percentageTextOffsetX || 5;
	 percentageTextOffsetY = params.percentageTextOffsetY || 0;
	symbolTextOffsetX = params.symbolTextOffsetX || 0;
	symbolTextOffsetY = params.symbolTextOffsetY || 0;
	topPadding = params.topPadding || 30;


	//generate title and ranking
	$('#'+container).empty().css({'padding-top':topPadding}).html('<div class="donutTitle" style="font-size:'+nameFontSize+'px;color:#FFF;text-align:center;">'+title+'</div><div class="chart" id="'+container+'Chart"></div><div style="font-size:'+nameFontSize+'px;color:#FFF;text-align:center;">客户曝光排名<span style="font-size:'+(nameFontSize+10)+'px;color:#e8ac6c;">'+rank+'</span</div>');

	//render donut
	stage = new Kinetic.Stage({
		container: container+'Chart',
		width:width,
		height:height,
	});

	layer = new Kinetic.Layer();

	var nameText = new Kinetic.Text({
      x: width/2 - innerRadius,
      y: height/2 + percentageFontSize/2+nameTextOffsetY,
      text: data[0].name,
      fontSize:  nameFontSize,
      fill: '#FFF',
      align: 'center',
      width: innerRadius*2,
      fontFamily: 'sans-serif'
    });
    layer.add(nameText);

    var percentageText = new Kinetic.Text({
      x: width/2 - innerRadius,
      y: height/2 - innerRadius/2+percentageTextOffsetY,
      text: data[0].value,
      fontSize:  percentageFontSize,
      fill: '#e8ac6c',
      align: 'center',
      width: innerRadius*2,
      fontFamily: 'sans-serif'
    });
    layer.add(percentageText);

    var symbolText = new Kinetic.Text({
      x: width/2 - innerRadius/2 + percentageFontSize+nameFontSize/2+5+symbolTextOffsetX,
      y: height/2 - innerRadius/2 + percentageFontSize/2 + 5+percentageTextOffsetY+symbolTextOffsetY,
      text: '%',
      fontSize:  nameFontSize-4,
      fill: '#FFF',
      align: 'left',
      fontFamily: 'sans-serif'
    });
    layer.add(symbolText);

	deg = startDeg;
	for(i in data){
		item = data[i];

		arcShape = new Kinetic.Arc({
	      innerRadius: item.hover?hoverInnerRadius:innerRadius,
	      outerRadius: item.hover?hoverOuterRadius:outerRadius,
	      angle: totalDeg*item.value/100,
	      rotationDeg: deg,
	      x: width/2,
	      y: height/2,
	      fill: item.color,
	      data:item,
		  renderAttrs:{
		  	innerRadius:innerRadius,
		  	outerRadius:outerRadius,
		  	hoverInnerRadius:hoverInnerRadius,
		  	hoverOuterRadius:hoverOuterRadius,
		  	layer:layer
		  }
	    });
	    deg  += totalDeg*item.value/100;
	    if(item.enableHover!=false){
		    arcShape.on('mouseover',function(){
		    	this.setAttrs({
		    		innerRadius:this.attrs.renderAttrs.hoverInnerRadius,
		    		outerRadius:this.attrs.renderAttrs.hoverOuterRadius,
		    	});
		    	nameText.setText(this.attrs.data.name);
		    	percentageText.setText(this.attrs.data.value);
		    	this.attrs.renderAttrs.layer.draw();
		    });
		    arcShape.on('mouseout',function(){
		    	this.setAttrs({
		    		innerRadius:this.attrs.renderAttrs.innerRadius,
		    		outerRadius:this.attrs.renderAttrs.outerRadius,
		    	});
		    	this.attrs.renderAttrs.layer.draw();
		    });
	    }
	    layer.add(arcShape);
	}
	stage.add(layer);

}

function makeKineticDonut(container,data,params){
	params = params || {};
	width = params.width||200;
	height = params.height || 200;
	innerRadius = params.innerRadius || 55;
	outerRadius = params.outerRadius || 60;
	hoverInnerRadius = params.hoverInnerRadius || 52;
	hoverOuterRadius = params.hoverOuterRadius || 63;
	startDeg = params.startDeg || 60;
	totalDeg = params.totalDeg || 360;
	nameFontSize = params.nameFontSize || 16;
	percentageFontSize = params.percentageFontSize || 40;
	// nameTextOffsetX = params.nameTextOffsetX || 5;
	 nameTextOffsetY = params.nameTextOffsetY || 0;
	// percentageTextOffsetX = params.percentageTextOffsetX || 5;
	 percentageTextOffsetY = params.percentageTextOffsetY || 0;
	symbolTextOffsetX = params.symbolTextOffsetX || 0;
	symbolTextOffsetY = params.symbolTextOffsetY || 0;
	percentageColor = params.percentageColor || '#e8ac6c';

	//generate title and ranking


	//render donut
	stage = new Kinetic.Stage({
		container: container,
		width:width,
		height:height,
	});

	layer = new Kinetic.Layer();

	if(data[0].name!=null){
		var nameText = new Kinetic.Text({
	      x: width/2 - innerRadius,
	      y: height/2 + percentageFontSize/2+nameTextOffsetY,
	      text: data[0].name,
	      fontSize:  nameFontSize,
	      fill: '#FFF',
	      align: 'center',
	      width: innerRadius*2,
	      fontFamily: 'sans-serif'
	    });
	    layer.add(nameText);
    }

    var percentageText = new Kinetic.Text({
      x: width/2 - innerRadius,
      y: height/2 - innerRadius/2+percentageTextOffsetY,
      text: data[0].value,
      fontSize:  percentageFontSize,
      fill: percentageColor,
      align: 'center',
      width: innerRadius*2,
      fontFamily: 'sans-serif'
    });
    layer.add(percentageText);

    var symbolText = new Kinetic.Text({
      x: width/2 - innerRadius/2 + percentageFontSize+nameFontSize/2+5+symbolTextOffsetX,
      y: height/2 - innerRadius/2 + percentageFontSize/2 + 5+percentageTextOffsetY+symbolTextOffsetY,
      text: '%',
      fontSize:  nameFontSize-4,
      fill: '#FFF',
      align: 'left',
      fontFamily: 'sans-serif'
    });
    layer.add(symbolText);

	deg = startDeg;
	for(i in data){
		item = data[i];

		arcShape = new Kinetic.Arc({
	      innerRadius: item.hover?hoverInnerRadius:innerRadius,
	      outerRadius: item.hover?hoverOuterRadius:outerRadius,
	      angle: totalDeg*item.value/100,
	      rotationDeg: deg,
	      x: width/2,
	      y: height/2,
	      fill: item.color,
	      data:item,
		  renderAttrs:{
		  	innerRadius:innerRadius,
		  	outerRadius:outerRadius,
		  	hoverInnerRadius:hoverInnerRadius,
		  	hoverOuterRadius:hoverOuterRadius,
		  	layer:layer
		  }
	    });
	    deg  += totalDeg*item.value/100;
	    if(item.enableHover!=false){
		    arcShape.on('mouseover',function(){
		    	this.setAttrs({
		    		innerRadius:this.attrs.renderAttrs.hoverInnerRadius,
		    		outerRadius:this.attrs.renderAttrs.hoverOuterRadius,
		    	});
		    	if(nameText)
		    	nameText.setText(this.attrs.data.name);
		    	percentageText.setText(this.attrs.data.value);
		    	this.attrs.renderAttrs.layer.draw();
		    });
		    arcShape.on('mouseout',function(){
		    	this.setAttrs({
		    		innerRadius:this.attrs.renderAttrs.innerRadius,
		    		outerRadius:this.attrs.renderAttrs.outerRadius,
		    	});
		    	this.attrs.renderAttrs.layer.draw();
		    });
	    }
	    layer.add(arcShape);
	}
	stage.add(layer);

}