
var height, width, degree, active, unit, w_unit, theme, isActive = false, chart = [], graphData = ['', '', '', ''], chartID = [], startDate = [], chartColor = [], raw = ['', '', '', ''], timeout, today = new Date(), today = today.getDate() + '/' + (today.getMonth()+1), isInputActive = false;
/*! jstz - v1.0.4 - 2012-12-18 */
(function(e){var t=function(){"use strict";var e="s",n=function(e){var t=-e.getTimezoneOffset();return t!==null?t:0},r=function(e,t,n){var r=new Date;return e!==undefined&&r.setFullYear(e),r.setDate(n),r.setMonth(t),r},i=function(e){return n(r(e,0,2))},s=function(e){return n(r(e,5,2))},o=function(e){var t=e.getMonth()>7?s(e.getFullYear()):i(e.getFullYear()),r=n(e);return t-r!==0},u=function(){var t=i(),n=s(),r=i()-s();return r<0?t+",1":r>0?n+",1,"+e:t+",0"},a=function(){var e=u();return new t.TimeZone(t.olson.timezones[e])},f=function(e){var t=new Date(2010,6,15,1,0,0,0),n={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"America/Asuncion":new Date(2012,9,7,3,0,0,0),"America/Santiago":new Date(2012,9,3,3,0,0,0),"America/Campo_Grande":new Date(2012,9,21,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2012,2,10,2,0,0,0),"America/New_York":new Date(2012,2,10,7,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,6,0,0,0),"Asia/Gaza":new Date(2009,2,28,0,30,0,0),"Africa/Cairo":new Date(2009,3,25,0,30,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,11,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0),"Europe/Moscow":t,"Asia/Yekaterinburg":t,"Asia/Omsk":t,"Asia/Krasnoyarsk":t,"Asia/Irkutsk":t,"Asia/Yakutsk":t,"Asia/Vladivostok":t,"Asia/Kamchatka":t,"Europe/Minsk":t,"Australia/Perth":new Date(2008,10,1,1,0,0,0)};return n[e]};return{determine:a,date_is_dst:o,dst_start_for:f}}();t.TimeZone=function(e){"use strict";var n={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Santiago":["America/Santiago","America/Asuncion","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":["Asia/Beirut","Europe/Helsinki","Europe/Istanbul","Asia/Damascus","Asia/Jerusalem","Asia/Gaza"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"],"Asia/Dubai":["Europe/Moscow"],"Asia/Dhaka":["Asia/Yekaterinburg"],"Asia/Jakarta":["Asia/Omsk"],"Asia/Shanghai":["Asia/Krasnoyarsk","Australia/Perth"],"Asia/Tokyo":["Asia/Irkutsk"],"Australia/Brisbane":["Asia/Yakutsk"],"Pacific/Noumea":["Asia/Vladivostok"],"Pacific/Tarawa":["Asia/Kamchatka"],"Africa/Johannesburg":["Asia/Gaza","Africa/Cairo"],"Asia/Baghdad":["Europe/Minsk"]},r=e,i=function(){var e=n[r],i=e.length,s=0,o=e[0];for(;s<i;s+=1){o=e[s];if(t.date_is_dst(t.dst_start_for(o))){r=o;return}}},s=function(){return typeof n[r]!="undefined"};return s()&&i(),{name:function(){return r}}},t.olson={},t.olson.timezones={"-720,0":"Etc/GMT+12","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax","-240,0":"America/Santo_Domingo","-240,1,s":"America/Santiago","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"Etc/GMT+2","-120,1":"Etc/GMT+2","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"Etc/UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,0":"Asia/Baghdad","180,1":"Europe/Moscow","210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Baku","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide","600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"},typeof exports!="undefined"?exports.jstz=t:e.jstz=t})(this);
function transform() {
	width = $(document).width();
	height = $(document).height();
	current();
	//alert(width + ' + ' + height);
	//if(isActive!=true) {
		$('#layer').css('-webkit-transform', 'translate3d(0px, 0px, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + degree + 'deg)');
	//} else {
	//	$('#layer').css('-webkit-transform', 'translate3d(0px, -40%, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + degree + 'deg)');
	//}
	$('#layer .slide:nth-child(1)').css('-webkit-transform', 'rotate3d(0, 1, 0, 0deg) translate3d(0px, 0px, ' + width/2 + 'px)');
	$('#layer .slide:nth-child(2)').css('-webkit-transform', 'rotate3d(0, 1, 0, 90deg) translate3d(0px, 0px, ' + width/2 + 'px)');
	$('#layer .slide:nth-child(3)').css('-webkit-transform', 'rotate3d(0, 1, 0, 180deg) translate3d(0px, 0px, ' + width/2 + 'px)');
	$('#layer .slide:nth-child(4)').css('-webkit-transform', 'rotate3d(0, 1, 0, 270deg) translate3d(0px, 0px, ' + width/2 + 'px)');
}
function redraw() {
	for(var c = 0; c < 4; c++) {
		chart[c].setSize(width, 295); //fills to size of screen
		chart[c].hideLoading();
		chart[c].redraw();
	}
}
function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}
function full_day(day) {
	switch(day) {
		case 'Mon':
			day = 'Monday';
			break;
		case 'Tue':
			day = 'Tuesday';
			break;
		case 'Wed':
			day = 'Wednesday';
			break;
		case 'Thu':
			day = 'Thursday';
			break;
		case 'Fri':
			day = 'Friday';
			break;
		case 'Sat':
			day = 'Saturday';
			break;
		case 'Sun':
			day = 'Sunday';
			break;	
	}
	return day;	
}
function convert(degree, units) {
	if(units=='f') {
		// Fra celcius til fahrenheit
		return Math.round((degree*1.8)+32)
	} else {
		// Fra fahrenheit til celcius
		return Math.round((degree-32)/1.8)
	}
}
function current() {
	switch(active) {
		case 1:
			degree = 0;
			break;
		case 2:
			degree = -90;
			break;
		case 3:
			degree = -180;
			break;
		case 4:
			degree = -270;
			break;
		default:
			// Do nothing, yet?
	}
	return degree;
}
function newChart(chartID, startDate, graphData, color) {
	var chartTemp = new Highcharts.Chart({
    chart: {
        renderTo: chartID,
        type: 'spline',
        backgroundColor: null,
        animation: false
    },
    global: {
    	useUTC: false
	},
    title: {
        text: null
    },
    credits: {
    	enabled: false
    },
    subtitle: {
        text: null
    },
    legend: {
    	enabled: false
    },
    xAxis: {
        type: 'datetime',
        lineColor: 'rgba(255,255,255,0.0)',
        tickColor: 'rgba(255,255,255,0.0)',
        gridLineWidth: 0,
        gridLineColor: 'rgba(255,255,255,0.2)',
        labels: {
        	enabled: true,
        	y: 8,
        	x: 10,
        	style: {
        		color: 'rgba(255,255,255,0.35)',
        		font: 'bold 8px HelveticaNeue',
        		textTransform: 'uppercase'
        		
        	}
        },
    },
    colors: [
    	'#ffffff', 
    	'#AA4643', 
    	'#89A54E', 
    	'#80699B', 
    	'#3D96AE', 
    	'#DB843D', 
    	'#92A8CD', 
    	'#A47D7C', 
    	'#B5CA92'
    ],
    yAxis: {
        title: {
            text: null
        },
        showEmpty: false,
        min: null,
        gridLineWidth: 0,
        gridLineColor: 'rgba(255,255,255,0)',
        alternateGridColor: null,
        labels: {
        	enabled: true,
        	style: {
        		color: 'rgba(255,255,255,0.7)',
        		font: 'normal 8px HelveticaNeue-Light',
        		
        	}
        }
    },
    tooltip: {
        formatter: function() {
                return ''+
                Highcharts.dateFormat('%H:00', this.x) +': <strong>'+ this.y +'</strong>°' + '<br><span style="font-size: 7px; text-transform: uppercase; opacity: 0.8">' +
                Highcharts.dateFormat('%e. %b', this.x) + '</span>';
        },
        style: {
        	color: color,
        	fontFamily: 'HelveticaNeue-Light, Helvetica',
        	background: 'white',
        	padding: '15px'
        },
        borderWidth: 0,
        borderRadius: 2,
        shadow: false,
        backgroundColor: '#fff'
    },
    plotOptions: {
        spline: {
            lineWidth: 3,
            shadow: {
            	color: "rgba(0,0,0,0.5)",
            	offsetY: 6,
            	width: 2
            },
            marker: {
                enabled: true,
                fillColor: color,
                radius: 1,
                states: {
                    hover: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 8,
                        lineWidth: 1
                    }
                }
            },
            pointInterval: 21600000*2, // six hours
            pointStart: startDate
        }
    },
    series: [{
        name: 'Hestavollane',
        data: graphData

    }]
    ,
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    },
    exporting: {
    	enabled: false
    }
});
	
	var l = chartTemp.series[0].points.length;
	var p = chartTemp.series[0].points[l - 1];
	var f = chartTemp.series[0].points[0];
	p.update({
	    marker: {
	    	enabled: true,
	        radius: 4,
	        fillColor: '#fff'
	    }
	});
	f.update({
	    marker: {
	    	enabled: true,
	        radius: 4,
	        fillColor: '#fff'
	    }
	});
	
	return chartTemp;
}
function weather(data, index, city) {
	//graphData[index] = '';
	var i = 0;
	var forecast = $('<div class="forecast" />');
	var scrollID = 'scroll-' + randomString(6);
	chartID[index] = 'chart-' + randomString(6);
	var forecastID = 'forecast-' + randomString(6);
	var scroll = $('<div class="scroll" />').attr('id', scrollID);
	var list = $('<ul />');
	chartColor[index] = $('.slide:eq('+index+') .background').css("background-color");
	forecast.append('<div class="chart" id="' + chartID[index] + '" />');
	list.appendTo(scroll);
	scroll.appendTo(forecast);
	forecast.attr('data-city', city).attr('id', forecastID);
	forecast.css('background-color', chartColor[index]);
	forecast.appendTo('#forecasts');
	
	$('.slide:eq('+index+')').data('forecast', forecastID);
	
	var scrollable = document.getElementById(scrollID); // WebKit in iOS 5 is fantastic, except for this weird behavior that bounces the entire view.
	new ScrollFix(scrollable);
	
	$.each(data, function(i, obj) {
		var weekday = obj.day.day;
		var average = obj.day.average;
		var date = obj.day.date;
		var symbol = obj.day.icon;
	  	var listDay = $('<li />');
	  	var underlay = $('<ul class="underlay"/ >');
	  	
	  	if(i == 0 && date == today) {
	  		weekday = 'Today';
	  	}
	  	if(unit == 'f') { 
	  		average = convert(average, 'f');
	  	}
	  	
	  	//listDay.append('<div class="overlay"><span class="icon ' + symbol + '"></span><span class="data">' + weekday + ' <span>' + date + '</span><strong>' + average + '&deg;</strong></span></div>');
	  	underlay.appendTo(listDay);
	  	listDay.appendTo(list);
	  	
		$.each(obj.day.entry, function(x, day) {
			i++;
			var icon = day.icon;
			var time = day.time;
			var wind = day.wind;
			var orgWind = wind;
			var temp = day.temp;
			var dayIndex = day.index;
			
			
			if(unit == 'f') { 
				temp = convert(temp, 'f');
			}
			
			if(w_unit == 'mph') {
				wind = Math.round(wind * 2.23693629);
			} else if (w_unit == 'km/h') {
				wind = Math.round(wind * 3.6);
			}
			
			if(i == 1) {
				if($('.slide:eq('+index+') .weather').length>0) {
					$('.slide:eq('+index+') .weather').html('');
				} else {
					$('.slide:eq('+index+')').append('<div class="weather" />');
				}
				$('.slide:eq('+index+') .weather').append('<div class="icon ' + icon + '" />');
				$('.slide:eq('+index+') .weather').append('<div class="info">' + city + ' <span>' + temp + '°</span>'  + '</div>');
				if($('.slide:eq('+index+') .forecast').length>0) {
					$('.slide:eq('+index+') .forecast').remove();
				}
			}
			underlay.append('<li>' + dayIndex + '<span class="clock">' + time + '</span><span class="icon ' + icon + '"></span><span class="temp"><strong>' + temp + '&deg;</strong> <span><em data-orgwind="'+ orgWind +'">' + wind + '</em> ' + w_unit + '</span></span></li>');
			
			if(day.graph == true) {
				graphData[index] = graphData[index] + temp + ', ';
				raw[index] = raw[index] + temp + ', ';
			}
			if(day.date) {
				startDate[index] = day.date;
			}
		});
	  
	});
	raw[index] = JSON.parse('[' + graphData[index].substring(0, graphData[index].length - 2) + ']');
	chart[index] = newChart(chartID[index], startDate[index], raw[index], chartColor[index]);	
	
//	var temp = data.weather.current_conditions.temp_c['@attributes'].data;
//	city = city.split(',')[0];
//	var icon = data.weather.current_conditions.condition['@attributes'].data.replace(/ /g, '_').toLowerCase();
//	var wind = data.weather.current_conditions.wind_condition['@attributes'].data.split('at ')[1].split(' mph')[0];
//	var o_wind = wind;			  			
//	if(w_unit=='m/s') {
//		wind = Math.round(wind * 0.44704);
//	} else if (w_unit=='km/h') {
//		wind = Math.round(wind * 1.609344);
//	}
//	
//	
//	if($('.slide:eq('+index+') .forecast').length>0) {
//		$('.slide:eq('+index+') .forecast').remove();
//	}
//	
//	$('.slide:eq('+index+')').append('<div class="forecast" />');
//	$.each(data.weather.forecast_conditions, function(it, item) {
//		var low = data.weather.forecast_conditions[it].low['@attributes'].data;
//		var high = data.weather.forecast_conditions[it].high['@attributes'].data;
//		var con = data.weather.forecast_conditions[it].condition['@attributes'].data;
//		var day = data.weather.forecast_conditions[it].day_of_week['@attributes'].data;
//		
//		if(unit=='c') {
//			low = convert(low, 'c');
//			high = convert(high, 'c');
//		}
//		
//		if(it==0) {
//			day = 'Today'
//		} else {
//			day = full_day(day);
//		}
//		
//		$('.slide:eq('+index+') .forecast').append('<div class="day"><div class="icon ' + con.replace(/ /g, '_').toLowerCase() + '"></div><div class="info">' + day + ' <span class="temp" data-temp="'+high+','+low+'">' + high + '° / ' + low + '°</span><span class="con">'+con+'</span></div></div>');
//		
//		if(it==0) {
//			$('.slide:eq('+index+') .forecast .day:nth-child(1) .info .con').append('<span data-wind="'+o_wind+'"> — ' + wind + ' ' + w_unit + '</span>');
//		}
//	});
}
function notification(content) {
	playSound('notification', 0);
	
	if($('#alert').length>0) {
		$('#alert').remove();
		clearTimeout(timeout);
	}
	
	$('#app').addClass('reduce');
	
	var notification = $('<div id="alert" />');
	notification.html(content);
	notification.appendTo('body');
	
	timeout = setTimeout(function () {
		notification.addClass('up');
		$('#app').removeClass('reduce');
		notification.delay(300).queue(function(){
			notification.remove();
			$(this).dequeue();
		});
	}, 6000);
	
	notification.bind('touchstart', function() {
		notification.addClass('up');
		
		notification.delay(300).queue(function(){
			notification.remove();
			$(this).dequeue();
		});
	}); 
	
}

var context = [];
var buffer = [];
var audioSupport = true;
var sounds = ['woosh', 'woosh2', 'notification', 'plop', 'plop2', 'plop3'];
function playSound(name, when_) {
	if (!buffer[name] || audioSupport == false)
		return;
	var source = context[name].createBufferSource();
	source.buffer = buffer[name];
	source.connect(context[name].destination);
	source.noteOn(when_);
};
function fetching() {
	$.each(sounds, function(i) {
		var name = sounds[i];
		if (typeof AudioContext !== "undefined") {
			context[name] = new AudioContext();
			//console.log("Created AudioContext");
		} else if (typeof webkitAudioContext !== "undefined") {
			context[name] = new webkitAudioContext();
			//console.log("Created webkitAudioContext");
		} else {
			audioSupport = false;
			return;
		}
		
		// AJAX request sound.m4a
		var request = new XMLHttpRequest();
		request.open("GET", "http://www.51wn.cn/resources/" + sounds[i] + '.mp3', true);
		request.responseType = "arraybuffer";
		request.onload = function () {
			context[name].decodeAudioData(request.response, function (buffer_) {
				//console.log('[Sun] — Success: Decoded audio file: ' + sounds[i]);
				buffer[name] = buffer_;
			}, function() {
				console.log('[Sun] — Error: Couldn\'t decode audio file: ' + sounds[i]);
			});
		};
		request.send();
	});
}

jQuery.event.special.tap = {
    setup: function (a, b) {
        var c = this,
            d = jQuery(c);
        if (window.Touch) {
            d.bind("touchstart", jQuery.event.special.tap.onTouchStart);
            d.bind("touchmove", jQuery.event.special.tap.onTouchMove);
            d.bind("touchend", jQuery.event.special.tap.onTouchEnd)
        } else {
            d.bind("click", jQuery.event.special.tap.click)
        }
    },
    click: function (a) {
        a.type = "tap";
        jQuery.event.handle.apply(this, arguments)
    },
    teardown: function (a) {
        if (window.Touch) {
            $elem.unbind("touchstart", jQuery.event.special.tap.onTouchStart);
            $elem.unbind("touchmove", jQuery.event.special.tap.onTouchMove);
            $elem.unbind("touchend", jQuery.event.special.tap.onTouchEnd)
        } else {
            $elem.unbind("click", jQuery.event.special.tap.click)
        }
    },
    onTouchStart: function (a) {
        this.moved = false
    },
    onTouchMove: function (a) {
        this.moved = true
    },
    onTouchEnd: function (a) {
        if (!this.moved) {
            a.type = "tap";
            jQuery.event.handle.apply(this, arguments)
        }
    }
};
var ScrollFix = function(elem) {
	// Variables to track inputs
	var startY, startTopScroll;

	elem = elem || document.querySelector(elem);

	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startY = event.touches[0].pageY;
		startTopScroll = elem.scrollTop;

		if(startTopScroll <= 0)
			elem.scrollTop = 1;

		if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
			elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
	}, false);
};

$(document).ready(function() {
	if (!window.navigator.standalone) {
		if (navigator.userAgent.match(/like Mac OS X/i)) {
			$('head').append('<link rel="apple-touch-icon-precomposed" href="/themes/default/mobile/static/images/apple114.png" />');
			$('body').addClass('install').html('<div id="install"><div id="homescreen"><h2 id="add">添加到您的 <strong>手机主屏幕</strong></h2></div></div>');
		} else {
			$('.overlay').click(function() {
				$(this).addClass('up').delay(600).queue(function(){
					$(this).hide().removeClass('up');
		  			$(this).dequeue();
		  		});
			});
		}
		$('#more').click(function(e) {
			e.preventDefault();
			if(!$('.overlay').hasClass('up')) {
				$('.overlay').show();
			}
		});
		window.addEventListener('load', function(e) {
			window.applicationCache.addEventListener('updateready', function(e) {
				if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
					console.log('[Non-fullscreen] Cache manifest updated. Relaunch required.')
					window.applicationCache.swapCache();
				}
			}, false);
		
		}, false);
	} else {
		// #Initialization
		// _Declaration of variables and initial initialization_
		var city, xPos, xOrg, xCor, pinch = false, time, icon, info, reveal, blur;
		var doc = $(this);
		active = 1;
		//$('head').append('<meta name="viewport" content="user-scalable=0, initial-scale=1.0">');
		$('body').removeClass('preview').html('<div id="app"><div id="box"><div id="layer"><div class="slide"><div class="background"></div><a class="in">In</a><div class="pagination"><span class="active"></span><span></span><span></span><span></span></div></div></div></div></div>');
		if(!window.navigator.onLine) {
			$('.pagination').hide();
			$(document).bind('touchstart', function(e) {
				e.preventDefault();
			});
			notification("最好在3G或者WIFI环境下使用.");
		} else {
			var tz = jstz.determine().name();
			if(tz == 'Europe/Berlin') {
				var timezone = 'normal';
			} else {
				var timezone = tz;
			}
			// Check if a new cache is available on page load.
			window.addEventListener('load', function(e) {
				window.applicationCache.addEventListener('updateready', function(e) {
					if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
						notification("An update has been installed.");
						window.applicationCache.swapCache();
					} else {
						// Manifest didn't changed. Nothing new to server.
					}
				}, false);
			}, false);
			
			// #Application start
			// _Take-off_
			$('.slide').append('<div class="loading" /><script>window.location.href="'+window.URL.mobile+'"</script>');
			
			// #First Time
			// _If a user visits for the first time — fill in local storage values_
			if(localStorage.getItem("init2") != 'false') {
				localStorage.setItem("init2", 'false');
				if(navigator.language == 'en-US') {
					localStorage.setItem("unit", 'f');
					localStorage.setItem("w_unit", 'mph');
				} else {
					localStorage.setItem("unit", 'c');
					localStorage.setItem("w_unit", 'm/s');
				}
				localStorage.setItem("theme", 'pastel');
				
				localStorage.setItem("city0", 'Copenhagen'); // <3
				localStorage.setItem("city1", 'Vienna'); 
				localStorage.setItem("city2", 'Hong Kong');
				
				localStorage.setItem("city0-lat", '55.680682'); // Copenhagen
				localStorage.setItem("city0-lon", '12.568703');
				localStorage.setItem("city1-lat", '48.202541'); // Vienna
				localStorage.setItem("city1-lon", '16.368799'); 
				localStorage.setItem("city2-lat", '22.309426'); // Hong Kong
				localStorage.setItem("city2-lon", '114.200134');
				
				localStorage.setItem("city0-id", '554890');
				localStorage.setItem("city1-id", '551801');
				localStorage.setItem("city2-id", '2165352');	
			}
			
			
			
			// #Declaration
			// _This will fuck completely, if a browser doesn't support localStorage — but this is an iOS concept_ //
			var cities = [
				[localStorage.getItem("city0"), localStorage.getItem("city0-lat"), localStorage.getItem("city0-lon"), localStorage.getItem("city0-id")],
			    [localStorage.getItem("city1"), localStorage.getItem("city1-lat"), localStorage.getItem("city1-lon"), localStorage.getItem("city1-id")],
			    [localStorage.getItem("city2"), localStorage.getItem("city2-lat"), localStorage.getItem("city2-lon"), localStorage.getItem("city2-id")]
			];
			
			unit = localStorage.getItem("unit"); // // Celcius (c) or Fahrenheit (f)
			w_unit = localStorage.getItem("w_unit"); // Meters per second (m/s), kilometers per second (km/h) or, god forbid, miles per hour (mph)
			theme = localStorage.getItem("theme"); // Setting theme, defaults to 'Jour'
			
			
			$('head').append('<link id="icon" rel="apple-touch-icon-precomposed" href="resources/icon_' + theme.toLowerCase() + '.png" />');
			$('body').addClass(theme);
			
			var themes = ['Jour', 'Pastel', 'Adrift', 'Stardust', 'Looper', 'Goldfish', 'Moon', 'Envious'];
			var lists = ['Cities', 'Temperature', 'Wind', 'Colors', 'Credits'];
			
			var settings = $('<div id="settings" />').append('<div class="content" />').append('<div id="hide" />');
			var smallDiv = $('<div id="small" />').append('<div id="slides" />');
			var forecast = $('<div id="forecasts" />');
			
			forecast.appendTo($('#app'));
			settings.appendTo($('#app'));
			smallDiv.appendTo($('#app'));

			for(var i = 0; i < 4; i++) {
				$('<div />').attr('class', 'slide').appendTo($('#slides'));
			}
			$.each(lists, function(i) {
				var h2 = $('<h2>' + lists[i] + '</h2>');
				var ul = $('<ul />').attr('class', lists[i].toLowerCase());
				h2.appendTo( $('#settings .content') );
				ul.appendTo($('#settings .content'));
				
				if(lists[i] == 'Temperature') {
					//ul.append('<li data-unit="c">Celsius</li><li data-unit="f">Fahrenheit</li>');
				}
				
				if(lists[i] == 'Wind') {
					//ul.append('<li data-unit="m/s">Meters per second</li><li data-unit="km/h">Kilometers per hour</li><li data-unit="mph">Miles per hour</li>');
				}
				if(lists[i] == 'Credits') {
					//ul.append('<li><span></span></li>');
				}
			});
			$.each(themes, function(i) {
				var li = $('<li />');
				for(var x = 0; x < 4; x++) {
					$('<span />').attr('class', themes[i].toLowerCase()).appendTo(li);
				}
				li.attr('data-theme', themes[i].toLowerCase());
				li.appendTo('ul.colors');
			});
			
			$('.scroll ul li').live('tap', function() {
				playSound('plop2', 0);
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				} else {
					$('.scroll ul li.active').removeClass('active');
					$(this).addClass('active');
					
				}
			});	
			$('#layer a.in').live('touchstart', function() {
				if(!$('body').hasClass('settings')) {
					isSettings = true;
					isActive = true;
					playSound('plop', 0);
					$('body').addClass('settings');
				}
			});
			$('.settings #box').live('touchstart', function() {
				if(isInputActive == false) {
					playSound('plop3', 0);
					$('body').addClass('back').delay(250).queue(function() {
						isActive = false;
						$(this).removeClass('settings back');
						$(this).dequeue();
					});
				}
			});
			$('.settings #box').live('touchend', function() {
				if(isInputActive == false) {
					$(this).delay(250).queue(function() {
						isSettings = false;
						$(this).dequeue();
					});
				}
			});
			$('#slides').bind('touchstart', function(e) {
				if($('body').hasClass('settings')) {
					$('body').addClass('fadeout').delay(250).queue(function() {
						$(this).removeClass('settings fadeout');
						$(this).dequeue();
					});
					return false;
				}
				e.preventDefault();
			});
			$('#small .slide').live('tap', function() {
				if(isActive == true) {
					isSettings = true;
					isActive = false;
					if($('body').hasClass('settings')) {
						$('body').removeClass('settings');
					} else {
						playSound('woosh', 0);
						$('#small .slide').removeClass('non');
						$('#small .slide.active').removeClass('active');
						switch($(this).index()) {
							case 0:
								degree = 0;
								active = 1;
								break;
							case 1:
								degree = -90;
								active = 2;
								break;
							case 2:
								degree = -180;
								active = 3;
								break;
							case 3:
								degree = -270;
								active = 4;
								break;
							default:
								// Do nothing, yet?
						}
						$('#layer').css('-webkit-transform', 'translate3d(0px, 0px, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + degree + 'deg)');
						
						$(this).addClass('in').delay(250).queue(function() {
							$(this).removeClass('in');
							isSettings = false;
							$('body').removeClass('out');
							$(this).dequeue();
						});
					}
				}
			});
			
//			$('.icon').live('tap', function() {
//				notification('You can\'t have LTE. You\'re too ugly.')
//			});
			
			fetching(); // Fetches all available sounds with the Web Audio API, only supported on iOS 6.

			
			// #Settings
			// _Applying settings and listening for any settings changes_ //
			
			$('#settings ul.temperature li[data-unit="'+unit+'"]').addClass('current');
			$('#settings ul.wind li[data-unit="'+w_unit+'"]').addClass('current');
			$('#settings ul.colors li[data-theme="'+theme+'"]').addClass('current');
			var scrollable = document.getElementById("settings"); // WebKit in iOS 5 is fantastic, except for this weird behavior that bounces the entire view.
			new ScrollFix(scrollable); // And totally fixed now.
			function check(input) {
				var name = input.val();
				var index = input.parent().index();
				if (name!=null && name!="") {
					$.ajax({
					  url: 'find.php',
					  dataType: 'html',
					  type: 'post',
					  data: { city: name },
					  success: function(data) {
					  	if(data=='0') {
					  		notification("The city <strong>" + name + "</strong> didn't return any results.");
					  		input.val($(this).data('city'));
					  		blur = true;
					  		input.blur();
					  	} else {
					  		// 554890@Copenhagen@55.675659@12.56761 -> WOEID@City@lat@lon
					  		
					  		
					  		
					  		//localStorage.setItem('city' + index, name);	
					  		active = index + 2;
					  		blur = true;
					  		input.blur();
					  		
					  		
					  		var values = data.split("@");
					  		input.data('city', values[1]);
					  		input.val(values[1])
					  		
					  		$.ajax({
					  		  url: 'api2.php',
					  		  dataType: 'json',
					  		  type: 'post',
					  		  data: { 
					  		  			id: values[0],  
					  		  			lat: values[2],
					  		  			lon: values[3],
					  		  			timezone: timezone
					  		  		},
					  		  success: function(data) {
					  		  	graphData[index + 1] = '';
					  			weather(data, index + 1, values[1]);
					  			
					  			localStorage.setItem('city' + (index), values[1]);
					  			localStorage.setItem('city' + (index) + '-lat', values[2]);
					  			localStorage.setItem('city' + (index) + '-lon', values[3]);
					  			localStorage.setItem('city' + (index) + '-id', values[0]);
					  			
					  			//playSound('plop3', 0);
					  			$('#layer').css('-webkit-transform', 'translate3d(0px, 0%, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + current() + 'deg)');
					  			$('body').addClass('back').delay(250).queue(function() {
					  				isActive = false;
					  				isSettings = false;
					  				$(this).removeClass('settings back');
					  				notification(values[1] + ' added.');
					  				$(this).dequeue();
					  			});
					  			
					  			$('#small div.slide:eq('+(index + 1)+')').html($('#layer .slide:eq('+(index + 1)+')').html());
					  		  }
					  		});
					  	}
					  }
					});
				} else {
					input.val(input.data('city'));
				}
			}
			$('input').live('keydown', function(e) {
				if(e.which == 13) {
					e.preventDefault();
					check($(this));
				}
			});
			$('input').live('blur', function() {
				if(blur!=true) {
					check($(this));
				} else {
					blur = false;
					$(this).val($(this).data('city'));
				}
				isInputActive = false;
			});
			$('input').live('focus', function() {
				isInputActive = true;
				$(this).val('');
				
			});
			$('#settings ul li').live('tap', function() {		
				// Change of temperature units
				if($(this).parent().attr('class') == 'temperature' && $(this).attr('class') != 'current') {
					unit = $(this).data('unit');
					localStorage.setItem('unit', unit);
					$(this).parent().children('.current').removeClass('current');
					$(this).addClass('current');
					$('.slide > .weather .info > span, .forecast .data strong, ul.underlay li .temp strong').each(function() {
						$(this).html(convert(parseInt($(this).html().split('°')[0]), unit) + '°');
					});
					
					for(var c = 0; c < 4; c++) {
						chart[c].destroy();
						chart[c] = '';
						
						var arry = graphData[c].substring(0, graphData[c].length - 2).split(', '); 
						var newString = '';
						for(var i=0; i<arry.length; i++){ 
							newString = newString + convert(arry[i], unit) + ', ';
						}
						graphData[c] = newString;
						
						raw[c] = JSON.parse('[' + graphData[c].substring(0, graphData[c].length - 2) + ']');
						chart[c] = newChart(chartID[c], startDate[c], raw[c], chartColor[c]);
					}
					
				}
				
				// Change of wind units
				if($(this).parent().attr('class')=='wind' && $(this).attr('class')!='current') {
					w_unit = $(this).data('unit');
					localStorage.setItem('w_unit', w_unit);
					$(this).parent().children('.current').removeClass('current');
					$(this).addClass('current');
					
					$('ul.underlay li .temp span em').each(function() {
						var newWind = $(this).attr('data-orgwind');
						var save = newWind;
						if(w_unit == 'mph') {
							newWind = Math.round(newWind * 2.23693629);
						} else if (w_unit == 'km/h') {
							newWind = Math.round(newWind * 3.6);
						}
						
			  			$(this).parent().html('<em data-orgwind="'+save+'">'+newWind+'</em> ' + w_unit);
					})
					
				}
				
				// Change of themes
				if($(this).parent().attr('class')=='colors' && $(this).attr('class')!='current') {
					localStorage.setItem('theme', $(this).data('theme'));
					$.each(themes, function(i) {
						if($('body').hasClass(themes[i].toLowerCase())) {
							$('body').removeClass(themes[i].toLowerCase());
						}
					});
					$('body').addClass($(this).data('theme')).delay(1000).queue(function() {
//						for(var c = 0; c < 4; c++) {
//							chart[c].destroy();
//							chart[c] = '';
//							raw[c] = JSON.parse('[' + graphData[c].substring(0, graphData[c].length - 2) + ']');
//							chartColor[c] = $('#layer .slide:eq('+c+') .background').css("background-color");
//							chart[c] = newChart(chartID[c], startDate[c], raw[c], chartColor[c]);
//							$('#' + chartID[c]).parent().css('background-color', chartColor[c]);
//						}
						$('#layer').css('-webkit-transform', 'translate3d(0px, 0%, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + current() + 'deg)');
						notification('Changing colors...');
						$('body').addClass('back').delay(250).queue(function() {
							isActive = false;
							isSettings = false;
							$(this).removeClass('settings back');
							
							$(this).delay(1500).queue(function() {
								location.reload();
								$(this).dequeue();
							});
							$(this).dequeue();
						});
						$(this).dequeue();
					});
					
					$(this).parent().children('.current').removeClass('current');
					$(this).addClass('current');
				}
				
			});

			$.each(cities, function(index) {
				var i = index + 1;
				$('#settings .cities').append('<li><span></span><input value="'+cities[index][0]+'" autocorrect="off" />');
				
				$('#settings .cities input').each(function() {
					$(this).data('city', $(this).val());
				});
				//$('#layer').append('<div class="slide"><div class="background"></div><a class="in"><span>In</span></a><div class="pagination"><span></span><span></span><span></span><span></span></div><div class="weather"><div class="icon"></div><div class="info">' + cities[index][0].split(',')[0] + '</div></div></div>');
				$('#layer .slide:eq('+i+') .pagination span:eq('+i+')').addClass('active');
				
				$.ajax({
					url: 'api2.php',
					dataType: 'json',
					type: 'post',
					data: {
						lat: cities[index][1],
						lon: cities[index][2],
						id: cities[index][3],
						timezone: timezone
					}, 
					success: function(data) {
						weather(data, i, cities[index][0]);
						$('#small div.slide:eq(' + i + ')').html($('#layer .slide:eq(' + i + ')').html());
					}
				});
			});
			transform();
			doc.bind('orientationchange', transform);
			doc.bind('orientationchange', redraw);
			
			var slide, isSettings = false, pinchOut = false;
			$('#layer .slide').bind('touchstart', function(e) {
				e.preventDefault();
				var touch = event.touches[0];
				xOrg = touch.pageX;
				
				if($('body').hasClass('settings')) {
					isSettings = true;
				} else {
					isSettings = false;
				}
				
				$('.forecast.active').removeClass('active');
				$('#' + $(this).data('forecast')).addClass('active');	
			});
			$('#layer .slide').bind('touchmove', function(e) {
				e.preventDefault();
				
				// Swiping
				if(isActive != true && event.touches.length == 1 && isSettings == false && pinchOut == false) {
					var touch = event.touches[0];
					xPos = touch.pageX;
				    xCor = (xOrg-xPos)/4;
				    current();
				    $('#layer').css('-webkit-transform', 'translate3d(0px, 0px, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + (degree - xCor) + 'deg)');
				    e.preventDefault();
				}
				// Pinch in
				if(event.touches.length == 2 && event.scale > 1 && isActive != true && isSettings == false && pinchOut == false) {
					isActive = true;
					$('body').addClass('animate build');
					$(this).addClass('active');
					playSound('woosh', 0);
					$(this).delay(450).queue(function() {
						$('body').addClass('revealed');
						$(this).dequeue();
					});
				}
				// Pinch out
				if(event.touches.length == 2 && event.scale < 1 && isActive != true && isSettings == false && pinchOut == false) {
					if(!$('body').hasClass('out')) {
						isActive = true;
						playSound('woosh2', 0);
						var slider = $(this);
						var small = $('#small .slide:eq('+ slider.index() +')');
						
						$('body').addClass('out');
						small.siblings().addClass('non');
						small.addClass('active').delay(850).queue(function() {
							$(this).removeClass('active');
							$(this).dequeue();
						});
					}
				}	
			});
			$('#layer .slide').bind('touchend', function(e) {
				if(isActive == false) {
					if(xCor > 10) {
						switch(active) {
							case 1:
								degree = -90;
								active = 2;
								break;
							case 2:
								degree = -180;
								active = 3;
								break;
							case 3:
								degree = -270;
								active = 4;
								break;
							case 4:
								degree = 0;
								active = 1;
								break;
							default:
								// Do nothing, yet?
						}
						$('#layer').css('-webkit-transform', 'translate3d(0px, 0px, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + degree + 'deg)');
					} else if(xCor < -10) {
						switch(active) {
							case 1:
								degree = -270;
								active = 4;
								break;
							case 2:
								degree = 0;
								active = 1;
								break;
							case 3:
								degree = -90;
								active = 2;
								break;
							case 4:
								degree = -180;
								active = 3;
								break;
							default:
								// Do nothing, yet?
						}
						$('#layer').css('-webkit-transform', 'translate3d(0px, 0px, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + degree + 'deg)');
					} else {
						switch(active) {
							case 1:
								degree = 0;
								active = 1;
								break;
							case 2:
								degree = -90;
								active = 2;
								break;
							case 3:
								degree = -180;
								active = 3;
								break;
							case 4:
								degree = -270;
								active = 4;
								break;
							default:
								// Do nothing, yet?
						}
						$('#layer').css('-webkit-transform', 'translate3d(0px, 0px, -' + width/2 + 'px) rotate3d(0, 1, 0, ' + degree + 'deg)');
					}
					xCor = 0;
					isActive = true;
					doc.delay(551).queue(function(){
						isActive = false;
						$(this).dequeue()
					});
				}
			});
			$('.forecast').live('touchmove', function(e) {
				if(event.touches.length == 2 && event.scale < 1 && pinchOut == false) {
					pinchOut = true;
					playSound('woosh2', 0);
					$('body').addClass('unbuild')
					$('body').removeClass('revealed build');
					$(this).delay(450).queue(function(){
						isActive = false;
						pinchOut = false;
						$('body').removeClass('animate unbuild');
						$('.slide.active').removeClass('active');
						$(this).dequeue();
					});
					e.preventDefault();
				}
			});
			
		}
	}
});