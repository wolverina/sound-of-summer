$(document).ready(function() {
	Summer.init();

	//setups for conditional loading of content
	
	
});//end docready

var Summer = {
	init: function(){

	}
}


//old docready
// var	size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	 
// 	window.onresize = function() {
// 		getSize();
// 		timelineNav();
// 	}
	
// 	timelineNav();
// 	scrollTop();
// 	loader();
// 	rainbowRoad('.songs');
// 	triggerPane('#js-trigger-about','#about');
// 	flashDetect($('.songs'), $('.player'));
	
// 	if ($.cookie('activeEvent')){
// 		var activeYear = $.cookie('activeEvent');
// 	 	$('a[data-year="'+activeYear+'"]').addClass('active').trigger('click');
// 	} 
	
// //trigger for rdio player
// function rdioInit(container, player){
	
// 	//console.log('rdioInit');
	
// 	if (!player.hasClass('initialized')) {
		
// 	    $.ajax({
// 	        'url': '/api/rdio_token',
// 	        'dataType': "json",
// 	        'success': function (token) {
// 				player.rdio(token.playbackToken.result);
// 				//lolcathost
// 				//player.rdio('GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=');
// 				player.addClass('initialized');
// 	        }
// 	    });
// 	}
	
// 	player.bind('ready.rdio', function() {
		
// 		//console.log('rdioReady');
				
// 		rdioPlayer(player);

// 		container.find('a').on('click', function(e){
// 			var self = $(this),
// 				url = self.attr('data-song-src'),
// 				json = url+'.json';
				
// 			player.find('.loading').show();
		
// 			$.getJSON(json, function(local) {	
// 				$.ajax({
// 		       		url: "http://developer.echonest.com/api/v4/song/search?bucket=audio_summary&",
// 					dataType: "jsonp",
// 				   	data: {
// 						format: 'jsonp',
// 						results: 1,
// 						api_key: 'BMFA0JN7IZ2RSW1TA',
// 						bucket: 'id:rdio-us-streaming',
// 						artist: local.artist,
// 						title: local.title,
// 						results: 1,
// 						callback: ''	
// 					}
				
// 				}).done(function(data){
// 					if( player.is(':hidden') ) {
// 						player.show(300);
// 					}
				
// 				function noMatch(){ 
// 					var noMatch = '<p class="null icon"><em>'+local.title+'</em> is not available.</p>';
// 					player.css({ 'bottom': 0 })
// 						.find('.loading').hide().end()
// 						.find('.null').remove().end()
// 						.find('.inner').append(noMatch);
						
// 				}//end nomatch
				
// 				if (data.response.songs.length) { //if echonest match
				
// 					$.each(data.response.songs, function(i, item) {
// 						var song = data.response.songs[i];
						
// 						if (song.foreign_ids.length) { //if rdio match
															
// 							var str = song.foreign_ids[0].foreign_id,
// 								id = str.replace('rdio-us-streaming:song:','');
// 								$(container).find('a').removeClass('active');
// 								self.addClass('active');
								
// 							player.rdio().play(id);
							
// 							player.css({ 'bottom': 0 })
// 								.find('.loading').hide().end()
// 								.find('.null').remove().end()
// 								.find('.js-song-data').show().end()
// 								.find('.indicator').hide();	
							
							
// 							player.bind('playingSourceChanged.rdio', function(e, playingTrack) {
// 								if (playingTrack) {						        
// 									$('#track').text(local.title);
// 						          	$('#artist').text(local.artist);
								
// 									$('.indicator').show();
									
// 									var bpm = (song.audio_summary.tempo);
// 									var heartBeat = function(){
// 											$('.indicator').css({
// 												'-webkit-animation-duration': 1/period+'s',
// 												'-moz-animation-duration': 1/period+'s',
// 												'animation-duration': 1/period+'s'
// 											});
// 									}
									
								
// 									if (bpm > 140) { //vivace
// 										var period = (song.audio_summary.tempo/60);
// 										heartBeat();
									
// 									} else {
// 										period = (song.audio_summary.tempo/120);
// 										heartBeat();
// 									}
								
									
// 								} else {
// 									$('#track, #artist').text('');
// 									$('.indicator, .null, .js-song-data').hide();
// 									player.css({ 'bottom': '-1em' });
// 								}
// 							});
																						
// 						} else {	
// 							noMatch();	
// 							return false;							
// 						}
// 					});//end if echonest match
					
// 				} else {
// 					//console.log('no match');
// 					noMatch();
// 					return false;
// 				}
// 			});//end ajax done
// 	 	}); //oh god I Dont know what this is for 	
		
// 		}); //end onclick
// 	});	//end rdio ready
// }//end rdioInit

// //show pane onclick, triggerPane sounds like a rapper
// function triggerPane(trigger, pane){

// 	var	pane = $(pane),
// 		close = '<a href="#" title="Close" class="icon close"><span class="accessibility">Close</span></a>',
// 		container = pane.find('.inner');

// 	container.append(close).hide();
	
// 	$(trigger).on('click',function(e){	
// 		container.fadeToggle(500);
// 		pane.slideToggle(500);
// 		e.preventDefault();
// 	});
	
// 	$('.close').on('click',function(e){
// 		pane.slideToggle(500);
// 		container.fadeToggle(500);			
// 		e.preventDefault();	
// 	});
// }

// //flash detection
// function flashDetect(container, player){
// 	if (!swfobject.hasFlashPlayerVersion("9.0.115")) {
// 		rdioPlayer($('.player'));
//   		container.find('.available').removeClass('available').end().find('a').on('click', function(){
// 			$('#no-flash, .loading').remove();
// 			player.css({ 'bottom': 0 }).append('<div class="inner" id="no-flash"><p class="null icon">Flash required for playback.</p></div>');
// 			return false;
// 		});
// 	}
// }


// function rdioPlayer(player){
// 	var close = '<a href="#" title="Close" class="icon close"><span class="accessibility">Close</span></a>';
	
// 	player.find('.js-song-data').hide().end()
// 		.find('.loading').show().end()
// 		.find('.inner').append(close);

// 	$('.close').on('click',function(e){
// 		player.css({'bottom': '-5em'});
// 		e.preventDefault();	
// 		player.rdio().stop();
// 		$('#track, #artist').text('');
// 		$('.indicator, .null, .js-song-data').hide();
// 	});
// }

// //scroll to top of page
// function scrollTop(){
// 	var	anchor = $('a.top');
	
// 	anchor.hide();

// 	$(window).scroll(function(){		
// 	  var h = $('body').height(),
// 		y = $(window).scrollTop();
	  
// 	if( y > (h*.175) && y < (h*.8) ){
// 	   anchor.fadeIn('slow');
// 	  } else {
// 	   anchor.fadeOut('slow');
// 	  }
// 	 });
	
// 	anchor.on('click',function(e){	
// 		scrollTo('body');
// 		e.preventDefault();
// 	});
// }

// //get viewport size
// function getSize(){					
// 	var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
// }

// //the timeline
// function timelineNav(){
// 	//vars
// 	var timeline = $('.timeline'),
// 		size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
		
// 	//str replace labels
// 	if (size === '"small"' /*ff*/ || size === 'small') {
// 		timeline.find('.label').each(function(){
// 	        var str = $(this).text();
// 	        str = str.replace('20', "'");
// 	         $(this).text(str);
// 		});
// 	} else {
// 		timeline.find('.label').each(function(){
// 	        var str = $(this).text();
// 	        str = str.replace("'", "20");
// 	         $(this).text(str);
// 		});
// 	}
	
// 	//set heights or widths depending on layout
// 	timeline.find('[data-song-count]').each(function(){
// 		var self = $(this),
// 			num = self.attr('data-song-count');
			
// 		if (size === '"base"' /*ff*/ || size === 'base') {
// 			value = (num)*2;
// 			self.css({'width': value +'px', 'height': '35px', 'vertical-align': 'bottom', 'opacity': .75});
// 			if (value > 75) {
// 				self.css({ 'opacity': .8 });
// 			}

// 			if (value > 118) {
// 				self.css({ 'opacity': .9 });
// 			} 

// 			if (value > 165) {
// 				self.css({ 'opacity': .96 });
// 			}
			
// 		} else {
// 			value = (num)*(3.14159);
// 			self.css({'height': value +'px', 'width': '100%','vertical-align': 'bottom', 'opacity': .75});
			
// 			if (value > 118) {
// 				self.css({ 'opacity': .8 });
// 			}

// 			if (value > 185) {
// 				self.css({ 'opacity': .9 });
// 			} 

// 			if (value > 260) {
// 				self.css({ 'opacity': .96 });
// 			}
// 		}			
	
// 	});

	
// 	//loading of the content on clicking a timeline link
// 	timeline.find('a').on('click',function(e){
// 		e.preventDefault();
		
// 		var self = $(this),
// 			url = self.attr('href')+'.js',
// 			json = self.attr('href')+'.json',
// 			container = $('.hentry'),
// 			activeYear = self.attr('data-year'),
// 			date = new Date();
// 			//this message will self destruct in one hour	
// 		 	date.setTime(date.getTime() + (30 * 60 * 1000));
			
// 		$.cookie("activeEvent", activeYear, { expires: date });
// 		$('.hentry').remove();	
// 		$('.timeline-wrap').after('<article class="hentry" role="main" id="content"></article>');
// 		timeline.find('a').removeClass('active');
// 		self.addClass('active');
				
// 		//fake ajax	
// 		$('.loading').show();
// 		$('.timeline').fadeTo('fast', .5);
						
// 		$.ajax({
// 			type : 'GET',
// 		  	url: url,
// 	      	dataType : 'script'
// 		}).done(function(html) {
				
// 				rainbowRoad('.songs');
				
// 				var player = $('.player');
				
// 				if (!player.hasClass('initialized')) {
// 					rdioInit($('.songs'), $('.player'));
// 				}
				
// 				//fake ajax
// 				$('.loading').hide();
// 				$('.timeline').fadeTo('fast', 1);
				
// 				//this should happen in the rdioReady of rdioInit, which ios devices don't see
// 				$('.songs').find('a').on('click', function(e){
// 					e.preventDefault();
// 				});
				
// 				flashDetect($('.songs'), $('.player'));
				
// 				setTimeout(scrollTo('#content'),500);
				
// 		 });	
// 	});
// }

// //rainbow colors for li items
// function rainbowRoad(container) {
// 	$(container).find('a').each(function(i) {
// 		var self = $(this),
// 			r = Math.round(20+i),
// 			g = Math.round(i * 2.25),
// 			b = Math.round((10+i) * 2),
// 			a = (.1+(i*.01));
// 	  	self.css({'backgroundColor': 'rgba('+ r +','+ g +','+ b +','+ a +')'});
// 	});
// }

// //scroll to a thing
// function scrollTo(id){
// 	$('html,body').animate({scrollTop: $(id).offset().top},'slow');
// }

// //fade in some awesome stuff
// function fadeIn(el) {
// 	el.each(function(i) {
// 	  	$(this).delay(i * 400).fadeIn();
// 	});
// }

// //for ajax loading
// function loader() {
// 	var loaderSymbols = ['0', '1', '2', '3', '4', '5', '6', '7'], 
// 		loaderRate = 100, 
// 		loaderIndex = 0, 
// 		self = $('.loading');
		
// 		loader= function() { 
// 			$('.loading').html(loaderSymbols[loaderIndex]); 
// 			loaderIndex = loaderIndex  < loaderSymbols.length - 1 ? loaderIndex + 1 : 0; 
// 			setTimeout(loader, loaderRate); }; 
// 			loader(); 
// 	self.hide();
// }

// //ie getComputedStyle
// if (!window.getComputedStyle) {
//     window.getComputedStyle = function(el, pseudo) {
//         this.el = el;
//         this.getPropertyValue = function(prop) {
//             var re = /(\-([a-z]){1})/g;
//             if (prop == 'float') prop = 'styleFloat';
//             if (re.test(prop)) {
//                 prop = prop.replace(re, function () {
//                     return arguments[2].toUpperCase();
//                 });
//             }
//             return el.currentStyle[prop] ? el.currentStyle[prop] : null;
//         }
//         return this;
//     }
// }

// /*! Respond.js v1.0.1: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
// (function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var t=e.document,q=t.documentElement,h=[],j=[],o=[],n={},g=30,f=t.getElementsByTagName("head")[0]||q,b=f.getElementsByTagName("link"),d=[],a=function(){var A=b,v=A.length,y=0,x,w,z,u;for(;y<v;y++){x=A[y],w=x.href,z=x.media,u=x.rel&&x.rel.toLowerCase()==="stylesheet";if(!!w&&u&&!n[w]){if(x.styleSheet&&x.styleSheet.rawCssText){l(x.styleSheet.rawCssText,w,z);n[w]=true}else{if(!/^([a-zA-Z]+?:(\/\/)?)/.test(w)||w.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:w,media:z})}}}}s()},s=function(){if(d.length){var u=d.shift();m(u.href,function(v){l(v,u.href,u.media);n[u.href]=true;s()})}},l=function(F,u,w){var D=F.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),G=D&&D.length||0,u=u.substring(0,u.lastIndexOf("/")),v=function(H){return H.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+u+"$2$3")},x=!G&&w,A=0,z,B,C,y,E;if(u.length){u+="/"}if(x){G=1}for(;A<G;A++){z=0;if(x){B=w;j.push(v(F))}else{B=D[A].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;j.push(RegExp.$2&&v(RegExp.$2))}y=B.split(",");E=y.length;for(;z<E;z++){C=y[z];h.push({media:C.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:j.length-1,minw:C.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:C.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)})}}i()},k,p,i=function(C){var u="clientWidth",w=q[u],B=t.compatMode==="CSS1Compat"&&w||t.body[u]||w,x={},A=b[b.length-1],v=(new Date()).getTime();if(C&&k&&v-k<g){clearTimeout(p);p=setTimeout(i,g);return}else{k=v}for(var y in h){var D=h[y];if(!D.minw&&!D.maxw||(!D.minw||D.minw&&B>=D.minw)&&(!D.maxw||D.maxw&&B<=D.maxw)){if(!x[D.media]){x[D.media]=[]}x[D.media].push(j[D.rules])}}for(var y in o){if(o[y]&&o[y].parentNode===f){f.removeChild(o[y])}}for(var y in x){var E=t.createElement("style"),z=x[y].join("\n");E.type="text/css";E.media=y;f.insertBefore(E,A.nextSibling);if(E.styleSheet){E.styleSheet.cssText=z}else{E.appendChild(t.createTextNode(z))}o.push(E)}},m=function(u,w){var v=c();if(!v){return}v.open("GET",u,true);v.onreadystatechange=function(){if(v.readyState!=4||v.status!=200&&v.status!=304){return}w(v.responseText)};if(v.readyState==4){return}v.send(null)},c=(function(){var u=false;try{u=new XMLHttpRequest()}catch(v){u=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return u}})();a();respond.update=a;function r(){i(true)}if(e.addEventListener){e.addEventListener("resize",r,false)}else{if(e.attachEvent){e.attachEvent("onresize",r)}}})(this);

// /*! A fix for the iOS orientationchange zoom bug.
//  Script by @scottjehl, rebound by @wilto.
//  MIT License.
// */(function(w){if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1)){return;}
// var doc=w.document;if(!doc.querySelector){return;}
// var meta=doc.querySelector("meta[name=viewport]"),initialContent=meta&&meta.getAttribute("content"),disabledZoom=initialContent+",maximum-scale=1",enabledZoom=initialContent+",maximum-scale=10",enabled=true,x,y,z,aig;if(!meta){return;}
// function restoreZoom(){meta.setAttribute("content",enabledZoom);enabled=true;}
// function disableZoom(){meta.setAttribute("content",disabledZoom);enabled=false;}
// function checkTilt(e){aig=e.accelerationIncludingGravity;x=Math.abs(aig.x);y=Math.abs(aig.y);z=Math.abs(aig.z);if(!w.orientation&&(x>7||((z>6&&y<8||z<8&&y>6)&&x>5))){if(enabled){disableZoom();}}
// else if(!enabled){restoreZoom();}}
// w.addEventListener("orientationchange",restoreZoom,false);w.addEventListener("devicemotion",checkTilt,false);})(this);

// (function(){
// /*!	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
// 	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
// */
// var a=function(){var E="undefined",s="object",T="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",r="application/x-shockwave-flash",S="SWFObjectExprInst",y="onreadystatechange",P=window,k=document,u=navigator,U=false,V=[i],p=[],O=[],J=[],m,R,F,C,K=false,b=false,o,H,n=true,N=function(){var ab=typeof k.getElementById!=E&&typeof k.getElementsByTagName!=E&&typeof k.createElement!=E,ai=u.userAgent.toLowerCase(),Z=u.platform.toLowerCase(),af=Z?/win/.test(Z):/win/.test(ai),ad=Z?/mac/.test(Z):/mac/.test(ai),ag=/webkit/.test(ai)?parseFloat(ai.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,Y=!+"\v1",ah=[0,0,0],ac=null;if(typeof u.plugins!=E&&typeof u.plugins[T]==s){ac=u.plugins[T].description;if(ac&&!(typeof u.mimeTypes!=E&&u.mimeTypes[r]&&!u.mimeTypes[r].enabledPlugin)){U=true;Y=false;ac=ac.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ah[0]=parseInt(ac.replace(/^(.*)\..*$/,"$1"),10);ah[1]=parseInt(ac.replace(/^.*\.(.*)\s.*$/,"$1"),10);ah[2]=/[a-zA-Z]/.test(ac)?parseInt(ac.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof P.ActiveXObject!=E){try{var ae=new ActiveXObject(X);if(ae){ac=ae.GetVariable("$version");if(ac){Y=true;ac=ac.split(" ")[1].split(",");ah=[parseInt(ac[0],10),parseInt(ac[1],10),parseInt(ac[2],10)]}}}catch(aa){}}}return{w3:ab,pv:ah,wk:ag,ie:Y,win:af,mac:ad}}(),l=function(){if(!N.w3){return}if((typeof k.readyState!=E&&k.readyState=="complete")||(typeof k.readyState==E&&(k.getElementsByTagName("body")[0]||k.body))){g()}if(!K){if(typeof k.addEventListener!=E){k.addEventListener("DOMContentLoaded",g,false)}if(N.ie&&N.win){k.attachEvent(y,function(){if(k.readyState=="complete"){k.detachEvent(y,arguments.callee);g()}});if(P==top){(function(){if(K){return}try{k.documentElement.doScroll("left")}catch(Y){setTimeout(arguments.callee,0);return}g()})()}}if(N.wk){(function(){if(K){return}if(!/loaded|complete/.test(k.readyState)){setTimeout(arguments.callee,0);return}g()})()}t(g)}}();function g(){if(K){return}try{var aa=k.getElementsByTagName("body")[0].appendChild(D("span"));aa.parentNode.removeChild(aa)}catch(ab){return}K=true;var Y=V.length;for(var Z=0;Z<Y;Z++){V[Z]()}}function L(Y){if(K){Y()}else{V[V.length]=Y}}function t(Z){if(typeof P.addEventListener!=E){P.addEventListener("load",Z,false)}else{if(typeof k.addEventListener!=E){k.addEventListener("load",Z,false)}else{if(typeof P.attachEvent!=E){j(P,"onload",Z)}else{if(typeof P.onload=="function"){var Y=P.onload;P.onload=function(){Y();Z()}}else{P.onload=Z}}}}}function i(){if(U){W()}else{I()}}function W(){var Y=k.getElementsByTagName("body")[0];var ab=D(s);ab.setAttribute("type",r);var aa=Y.appendChild(ab);if(aa){var Z=0;(function(){if(typeof aa.GetVariable!=E){var ac=aa.GetVariable("$version");if(ac){ac=ac.split(" ")[1].split(",");N.pv=[parseInt(ac[0],10),parseInt(ac[1],10),parseInt(ac[2],10)]}}else{if(Z<10){Z++;setTimeout(arguments.callee,10);return}}Y.removeChild(ab);aa=null;I()})()}else{I()}}function I(){var ah=p.length;if(ah>0){for(var ag=0;ag<ah;ag++){var Z=p[ag].id;var ac=p[ag].callbackFn;var ab={success:false,id:Z};if(N.pv[0]>0){var af=d(Z);if(af){if(G(p[ag].swfVersion)&&!(N.wk&&N.wk<312)){x(Z,true);if(ac){ab.success=true;ab.ref=A(Z);ac(ab)}}else{if(p[ag].expressInstall&&B()){var aj={};aj.data=p[ag].expressInstall;aj.width=af.getAttribute("width")||"0";aj.height=af.getAttribute("height")||"0";if(af.getAttribute("class")){aj.styleclass=af.getAttribute("class")}if(af.getAttribute("align")){aj.align=af.getAttribute("align")}var ai={};var Y=af.getElementsByTagName("param");var ad=Y.length;for(var ae=0;ae<ad;ae++){if(Y[ae].getAttribute("name").toLowerCase()!="movie"){ai[Y[ae].getAttribute("name")]=Y[ae].getAttribute("value")}}Q(aj,ai,Z,ac)}else{q(af);if(ac){ac(ab)}}}}}else{x(Z,true);if(ac){var aa=A(Z);if(aa&&typeof aa.SetVariable!=E){ab.success=true;ab.ref=aa}ac(ab)}}}}}function A(ab){var Y=null;var Z=d(ab);if(Z&&Z.nodeName=="OBJECT"){if(typeof Z.SetVariable!=E){Y=Z}else{var aa=Z.getElementsByTagName(s)[0];if(aa){Y=aa}}}return Y}function B(){return !b&&G("6.0.65")&&(N.win||N.mac)&&!(N.wk&&N.wk<312)}function Q(ab,ac,Y,aa){b=true;F=aa||null;C={success:false,id:Y};var af=d(Y);if(af){if(af.nodeName=="OBJECT"){m=h(af);R=null}else{m=af;R=Y}ab.id=S;if(typeof ab.width==E||(!/%$/.test(ab.width)&&parseInt(ab.width,10)<310)){ab.width="310"}if(typeof ab.height==E||(!/%$/.test(ab.height)&&parseInt(ab.height,10)<137)){ab.height="137"}k.title=k.title.slice(0,47)+" - Flash Player Installation";var ae=N.ie&&N.win?"ActiveX":"PlugIn",ad="MMredirectURL="+P.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ae+"&MMdoctitle="+k.title;if(typeof ac.flashvars!=E){ac.flashvars+="&"+ad}else{ac.flashvars=ad}if(N.ie&&N.win&&af.readyState!=4){var Z=D("div");Y+="SWFObjectNew";Z.setAttribute("id",Y);af.parentNode.insertBefore(Z,af);af.style.display="none";(function(){if(af.readyState==4){af.parentNode.removeChild(af)}else{setTimeout(arguments.callee,10)}})()}v(ab,ac,Y)}}function q(Z){if(N.ie&&N.win&&Z.readyState!=4){var Y=D("div");Z.parentNode.insertBefore(Y,Z);Y.parentNode.replaceChild(h(Z),Y);Z.style.display="none";(function(){if(Z.readyState==4){Z.parentNode.removeChild(Z)}else{setTimeout(arguments.callee,10)}})()}else{Z.parentNode.replaceChild(h(Z),Z)}}function h(ad){var ab=D("div");if(N.win&&N.ie){ab.innerHTML=ad.innerHTML}else{var Z=ad.getElementsByTagName(s)[0];if(Z){var ae=Z.childNodes;if(ae){var Y=ae.length;for(var aa=0;aa<Y;aa++){if(!(ae[aa].nodeType==1&&ae[aa].nodeName=="PARAM")&&!(ae[aa].nodeType==8)){ab.appendChild(ae[aa].cloneNode(true))}}}}}return ab}function v(aj,ah,Z){var Y,ab=d(Z);if(N.wk&&N.wk<312){return Y}if(ab){if(typeof aj.id==E){aj.id=Z}if(N.ie&&N.win){var ai="";for(var af in aj){if(aj[af]!=Object.prototype[af]){if(af.toLowerCase()=="data"){ah.movie=aj[af]}else{if(af.toLowerCase()=="styleclass"){ai+=' class="'+aj[af]+'"'}else{if(af.toLowerCase()!="classid"){ai+=" "+af+'="'+aj[af]+'"'}}}}}var ag="";for(var ae in ah){if(ah[ae]!=Object.prototype[ae]){ag+='<param name="'+ae+'" value="'+ah[ae]+'" />'}}ab.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ai+">"+ag+"</object>";O[O.length]=aj.id;Y=d(aj.id)}else{var aa=D(s);aa.setAttribute("type",r);for(var ad in aj){if(aj[ad]!=Object.prototype[ad]){if(ad.toLowerCase()=="styleclass"){aa.setAttribute("class",aj[ad])}else{if(ad.toLowerCase()!="classid"){aa.setAttribute(ad,aj[ad])}}}}for(var ac in ah){if(ah[ac]!=Object.prototype[ac]&&ac.toLowerCase()!="movie"){f(aa,ac,ah[ac])}}ab.parentNode.replaceChild(aa,ab);Y=aa}}return Y}function f(aa,Y,Z){var ab=D("param");ab.setAttribute("name",Y);ab.setAttribute("value",Z);aa.appendChild(ab)}function z(Z){var Y=d(Z);if(Y&&Y.nodeName=="OBJECT"){if(N.ie&&N.win){Y.style.display="none";(function(){if(Y.readyState==4){c(Z)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.removeChild(Y)}}}function c(aa){var Z=d(aa);if(Z){for(var Y in Z){if(typeof Z[Y]=="function"){Z[Y]=null}}Z.parentNode.removeChild(Z)}}function d(aa){var Y=null;try{Y=k.getElementById(aa)}catch(Z){}return Y}function D(Y){return k.createElement(Y)}function j(aa,Y,Z){aa.attachEvent(Y,Z);J[J.length]=[aa,Y,Z]}function G(aa){var Z=N.pv,Y=aa.split(".");Y[0]=parseInt(Y[0],10);Y[1]=parseInt(Y[1],10)||0;Y[2]=parseInt(Y[2],10)||0;return(Z[0]>Y[0]||(Z[0]==Y[0]&&Z[1]>Y[1])||(Z[0]==Y[0]&&Z[1]==Y[1]&&Z[2]>=Y[2]))?true:false}function w(ad,Z,ae,ac){if(N.ie&&N.mac){return}var ab=k.getElementsByTagName("head")[0];if(!ab){return}var Y=(ae&&typeof ae=="string")?ae:"screen";if(ac){o=null;H=null}if(!o||H!=Y){var aa=D("style");aa.setAttribute("type","text/css");aa.setAttribute("media",Y);o=ab.appendChild(aa);if(N.ie&&N.win&&typeof k.styleSheets!=E&&k.styleSheets.length>0){o=k.styleSheets[k.styleSheets.length-1]}H=Y}if(N.ie&&N.win){if(o&&typeof o.addRule==s){o.addRule(ad,Z)}}else{if(o&&typeof k.createTextNode!=E){o.appendChild(k.createTextNode(ad+" {"+Z+"}"))}}}function x(aa,Y){if(!n){return}var Z=Y?"visible":"hidden";if(K&&d(aa)){d(aa).style.visibility=Z}else{w("#"+aa,"visibility:"+Z)}}function M(Z){var aa=/[\\\"<>\.;]/;var Y=aa.exec(Z)!=null;return Y&&typeof encodeURIComponent!=E?encodeURIComponent(Z):Z}var e=function(){if(N.ie&&N.win){window.attachEvent("onunload",function(){var ad=J.length;for(var ac=0;ac<ad;ac++){J[ac][0].detachEvent(J[ac][1],J[ac][2])}var aa=O.length;for(var ab=0;ab<aa;ab++){z(O[ab])}for(var Z in N){N[Z]=null}N=null;for(var Y in a){a[Y]=null}a=null})}}();return{registerObject:function(ac,Y,ab,aa){if(N.w3&&ac&&Y){var Z={};Z.id=ac;Z.swfVersion=Y;Z.expressInstall=ab;Z.callbackFn=aa;p[p.length]=Z;x(ac,false)}else{if(aa){aa({success:false,id:ac})}}},getObjectById:function(Y){if(N.w3){return A(Y)}},embedSWF:function(ac,ai,af,ah,Z,ab,aa,ae,ag,ad){var Y={success:false,id:ai};if(N.w3&&!(N.wk&&N.wk<312)&&ac&&ai&&af&&ah&&Z){x(ai,false);L(function(){af+="";ah+="";var ak={};if(ag&&typeof ag===s){for(var am in ag){ak[am]=ag[am]}}ak.data=ac;ak.width=af;ak.height=ah;var an={};if(ae&&typeof ae===s){for(var al in ae){an[al]=ae[al]}}if(aa&&typeof aa===s){for(var aj in aa){if(typeof an.flashvars!=E){an.flashvars+="&"+aj+"="+aa[aj]}else{an.flashvars=aj+"="+aa[aj]}}}if(G(Z)){var ao=v(ak,an,ai);if(ak.id==ai){x(ai,true)}Y.success=true;Y.ref=ao}else{if(ab&&B()){ak.data=ab;Q(ak,an,ai,ad);return}else{x(ai,true)}}if(ad){ad(Y)}})}else{if(ad){ad(Y)}}},switchOffAutoHideShow:function(){n=false},ua:N,getFlashPlayerVersion:function(){return{major:N.pv[0],minor:N.pv[1],release:N.pv[2]}},hasFlashPlayerVersion:G,createSWF:function(aa,Z,Y){if(N.w3){return v(aa,Z,Y)}else{return undefined}},showExpressInstall:function(aa,ab,Y,Z){if(N.w3&&B()){Q(aa,ab,Y,Z)}},removeSWF:function(Y){if(N.w3){z(Y)}},createCSS:function(ab,aa,Z,Y){if(N.w3){w(ab,aa,Z,Y)}},addDomLoadEvent:L,addLoadEvent:t,getQueryParamValue:function(ab){var aa=k.location.search||k.location.hash;if(aa){if(/\?/.test(aa)){aa=aa.split("?")[1]}if(ab==null){return M(aa)}var Z=aa.split("&");for(var Y=0;Y<Z.length;Y++){if(Z[Y].substring(0,Z[Y].indexOf("="))==ab){return M(Z[Y].substring((Z[Y].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(b){var Y=d(S);if(Y&&m){Y.parentNode.replaceChild(m,Y);if(R){x(R,true);if(N.ie&&N.win){m.style.display="block"}}if(F){F(C)}}b=false}}}}();
// /*!	rdio.jquery v0.1 <http://developer.rdio.com/>
// 	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
// 	Copyright 2011 Rdio Inc.
// */
// (function(c){c.fn.rdio=function b(d){var e=c(this);var l=e.data("rdio");if(l!=undefined){return l}var f="rdio_swf_"+Math.floor(Math.random()*10000);c("<div></div>").attr("id",f).prependTo(e);var m=f+"_cb";var h={};h.ready=function(n){e.trigger("ready.rdio",[n])};h.playStateChanged=function(n){e.trigger("playStateChanged.rdio",[n])};h.playingTrackChanged=function(o,n){e.trigger("playingTrackChanged.rdio",[o,n])};h.playingSourceChanged=function(n){e.trigger("playingSourceChanged.rdio",[n])};h.volumeChanged=function(n){e.trigger("volumeChanged.rdio",[n])};h.muteChanged=function(n){e.trigger("muteChanged.rdio",[n])};h.positionChanged=function(n){e.trigger("positionChanged.rdio",[n])};h.queueChanged=function(n){e.trigger("queueChanged.rdio",[n])};h.shuffleChanged=function(n){e.trigger("shuffleChanged.rdio",[n])};h.repeatChanged=function(n){e.trigger("repeatChanged.rdio",[n])};h.updateFrequencyData=function(n){e.trigger("updateFrequencyData.rdio",[n])};h.playingSomewhereElse=function(){e.trigger("playingSomewhereElse.rdio")};h.freeRemainingChanged=function(n){e.trigger("freeRemainingChanged.rdio",[frequencyData])};window[m]=h;var i={playbackToken:d,domain:document.domain,listener:m};var j={allowScriptAccess:"always"};var k={};var g={embed:null};a.embedSWF("http://www.rdio.com/api/swf/",f,1,1,"9.0.0","",i,j,k,function(n){g.embed=c("#"+f).get(0)});g.play=function(o,n){this.embed.rdio_play(o,n)};g.pause=function(){this.embed.rdio_pause()};g.stop=function(){this.embed.rdio_stop()};g.next=function(n){this.embed.rdio_next(n)};g.previous=function(){this.embed.rdio_previous()};g.seek=function(n){this.embed.rdio_seek(n)};g.setShuffle=function(n){this.embed.rdio_setShuffle(n)};g.setRepeat=function(n){this.embed.rdio_setRepeat(n)};g.queue=function(o,n){this.embed.queue(o,n)};g.setVolume=function(n){this.embed.rdio_setVolume(n)};g.setMute=function(n){this.embed.rdio_setMute(n)};g.playQueuedTrack=function(n,o){this.embed.rdio_playQueuedTrack(n,o)};g.moveQueuedSource=function(o,n){this.embed.rdio_moveQueuedSource(o,n)};g.clearQueue=function(){this.embed.rdio_clearQueue()};g.setCurrentPosition=function(n){this.embed.rdio_setCurrentPosition(n)};g.removeFromQueue=function(n){this.embed.rdio_removeFromQueue(n)};g.sendState=function(){this.embed.rdio_sendState()};g.startFrequencyAnalyzer=function(n){this.embed.rdio_startFrequencyAnalyzer(n)};g.stopFrequencyAnalyzer=function(){this.embed.rdio_stopFrequencyAnalyzer()};e.data("rdio",g);return g}})(jQuery)})();
// /*!
//   jQuery Cookie Plugin
//   https://github.com/carhartl/jquery-cookie
 
//   Copyright 2011, Klaus Hartl
//   Dual licensed under the MIT or GPL Version 2 licenses.
//   http://www.opensource.org/licenses/mit-license.php
//   http://www.opensource.org/licenses/GPL-2.0
//  */

// (function($){$.cookie=function(key,value,options){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(value))||value===null||value===undefined)){options=$.extend({},options);if(value===null||value===undefined){options.expires=-1;}
// if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}
// value=String(value);return(document.cookie=[encodeURIComponent(key),'=',options.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
// options=value||{};var decode=options.raw?function(s){return s;}:decodeURIComponent;var pairs=document.cookie.split('; ');for(var i=0,pair;pair=pairs[i]&&pairs[i].split('=');i++){if(decode(pair[0])===key)return decode(pair[1]||'');}
// return null;};})(jQuery);

// /*!	SWFObject v2.2 <http://code.google.com/p/swfobject/>
// 	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
// */
// var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",ON_READY_STATE_CHANGE="onreadystatechange",win=window,doc=document,nav=navigator,plugin=false,domLoadFnArr=[main],regObjArr=[],objIdArr=[],listenersArr=[],storedAltContent,storedAltContentId,storedCallbackFn,storedCallbackObj,isDomLoaded=false,isExpressInstallActive=false,dynamicStylesheet,dynamicStylesheetMedia,autoHideShow=true,ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=!+"\v1",playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){plugin=true;ie=false;d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof win.ActiveXObject!=UNDEF){try{var a=new ActiveXObject(SHOCKWAVE_FLASH_AX);if(a){d=a.GetVariable("$version");if(d){ie=true;d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]}}}catch(e){}}}return{w3:w3cdom,pv:playerVersion,wk:webkit,ie:ie,win:windows,mac:mac}}(),onDomLoad=function(){if(!ua.w3){return}if((typeof doc.readyState!=UNDEF&&doc.readyState=="complete")||(typeof doc.readyState==UNDEF&&(doc.getElementsByTagName("body")[0]||doc.body))){callDomLoadFunctions()}if(!isDomLoaded){if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,false)}if(ua.ie&&ua.win){doc.attachEvent(ON_READY_STATE_CHANGE,function(){if(doc.readyState=="complete"){doc.detachEvent(ON_READY_STATE_CHANGE,arguments.callee);callDomLoadFunctions()}});if(win==top){(function(){if(isDomLoaded){return}try{doc.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,0);return}callDomLoadFunctions()})()}}if(ua.wk){(function(){if(isDomLoaded){return}if(!/loaded|complete/.test(doc.readyState)){setTimeout(arguments.callee,0);return}callDomLoadFunctions()})()}addLoadEvent(callDomLoadFunctions)}}();function callDomLoadFunctions(){if(isDomLoaded){return}try{var t=doc.getElementsByTagName("body")[0].appendChild(createElement("span"));t.parentNode.removeChild(t)}catch(e){return}isDomLoaded=true;var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]()}}function addDomLoadEvent(fn){if(isDomLoaded){fn()}else{domLoadFnArr[domLoadFnArr.length]=fn}}function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false)}else{if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false)}else{if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn)}else{if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn()}}else{win.onload=fn}}}}}function main(){if(plugin){testPlayerVersion()}else{matchVersions()}}function testPlayerVersion(){var b=doc.getElementsByTagName("body")[0];var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);var t=b.appendChild(o);if(t){var counter=0;(function(){if(typeof t.GetVariable!=UNDEF){var d=t.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");ua.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]}}else{if(counter<10){counter++;setTimeout(arguments.callee,10);return}}b.removeChild(o);t=null;matchVersions()})()}else{matchVersions()}}function matchVersions(){var rl=regObjArr.length;if(rl>0){for(var i=0;i<rl;i++){var id=regObjArr[i].id;var cb=regObjArr[i].callbackFn;var cbObj={success:false,id:id};if(ua.pv[0]>0){var obj=getElementById(id);if(obj){if(hasPlayerVersion(regObjArr[i].swfVersion)&&!(ua.wk&&ua.wk<312)){setVisibility(id,true);if(cb){cbObj.success=true;cbObj.ref=getObjectById(id);cb(cbObj)}}else{if(regObjArr[i].expressInstall&&canExpressInstall()){var att={};att.data=regObjArr[i].expressInstall;att.width=obj.getAttribute("width")||"0";att.height=obj.getAttribute("height")||"0";if(obj.getAttribute("class")){att.styleclass=obj.getAttribute("class")}if(obj.getAttribute("align")){att.align=obj.getAttribute("align")}var par={};var p=obj.getElementsByTagName("param");var pl=p.length;for(var j=0;j<pl;j++){if(p[j].getAttribute("name").toLowerCase()!="movie"){par[p[j].getAttribute("name")]=p[j].getAttribute("value")}}showExpressInstall(att,par,id,cb)}else{displayAltContent(obj);if(cb){cb(cbObj)}}}}}else{setVisibility(id,true);if(cb){var o=getObjectById(id);if(o&&typeof o.SetVariable!=UNDEF){cbObj.success=true;cbObj.ref=o}cb(cbObj)}}}}}function getObjectById(objectIdStr){var r=null;var o=getElementById(objectIdStr);if(o&&o.nodeName=="OBJECT"){if(typeof o.SetVariable!=UNDEF){r=o}else{var n=o.getElementsByTagName(OBJECT)[0];if(n){r=n}}}return r}function canExpressInstall(){return !isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)&&!(ua.wk&&ua.wk<312)}function showExpressInstall(att,par,replaceElemIdStr,callbackFn){isExpressInstallActive=true;storedCallbackFn=callbackFn||null;storedCallbackObj={success:false,id:replaceElemIdStr};var obj=getElementById(replaceElemIdStr);if(obj){if(obj.nodeName=="OBJECT"){storedAltContent=abstractAltContent(obj);storedAltContentId=null}else{storedAltContent=obj;storedAltContentId=replaceElemIdStr}att.id=EXPRESS_INSTALL_ID;if(typeof att.width==UNDEF||(!/%$/.test(att.width)&&parseInt(att.width,10)<310)){att.width="310"}if(typeof att.height==UNDEF||(!/%$/.test(att.height)&&parseInt(att.height,10)<137)){att.height="137"}doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",fv="MMredirectURL="+win.location.toString().replace(/&/g,"%26")+"&MMplayerType="+pt+"&MMdoctitle="+doc.title;if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+fv}else{par.flashvars=fv}if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceElemIdStr+="SWFObjectNew";newObj.setAttribute("id",replaceElemIdStr);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj)}else{setTimeout(arguments.callee,10)}})()}createSWF(att,par,replaceElemIdStr)}}function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj)}else{setTimeout(arguments.callee,10)}})()}else{obj.parentNode.replaceChild(abstractAltContent(obj),obj)}}function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML}else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true))}}}}}return ac}function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(ua.wk&&ua.wk<312){return r}if(el){if(typeof attObj.id==UNDEF){attObj.id=id}if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i]}else{if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"'}else{if(i.toLowerCase()!="classid"){att+=" "+i+'="'+attObj[i]+'"'}}}}}var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />'}}el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+">"+par+"</object>";objIdArr[objIdArr.length]=attObj.id;r=getElementById(attObj.id)}else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m])}else{if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m])}}}}for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n])}}el.parentNode.replaceChild(o,el);r=o}}return r}function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p)}function removeSWF(id){var obj=getElementById(id);if(obj&&obj.nodeName=="OBJECT"){if(ua.ie&&ua.win){obj.style.display="none";(function(){if(obj.readyState==4){removeObjectInIE(id)}else{setTimeout(arguments.callee,10)}})()}else{obj.parentNode.removeChild(obj)}}}function removeObjectInIE(id){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null}}obj.parentNode.removeChild(obj)}}function getElementById(id){var el=null;try{el=doc.getElementById(id)}catch(e){}return el}function createElement(el){return doc.createElement(el)}function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn]}function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10)||0;v[2]=parseInt(v[2],10)||0;return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false}function createCSS(sel,decl,media,newStyle){if(ua.ie&&ua.mac){return}var h=doc.getElementsByTagName("head")[0];if(!h){return}var m=(media&&typeof media=="string")?media:"screen";if(newStyle){dynamicStylesheet=null;dynamicStylesheetMedia=null}if(!dynamicStylesheet||dynamicStylesheetMedia!=m){var s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media",m);dynamicStylesheet=h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){dynamicStylesheet=doc.styleSheets[doc.styleSheets.length-1]}dynamicStylesheetMedia=m}if(ua.ie&&ua.win){if(dynamicStylesheet&&typeof dynamicStylesheet.addRule==OBJECT){dynamicStylesheet.addRule(sel,decl)}}else{if(dynamicStylesheet&&typeof doc.createTextNode!=UNDEF){dynamicStylesheet.appendChild(doc.createTextNode(sel+" {"+decl+"}"))}}}function setVisibility(id,isVisible){if(!autoHideShow){return}var v=isVisible?"visible":"hidden";if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v}else{createCSS("#"+id,"visibility:"+v)}}function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars&&typeof encodeURIComponent!=UNDEF?encodeURIComponent(s):s}var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2])}var il=objIdArr.length;for(var j=0;j<il;j++){removeSWF(objIdArr[j])}for(var k in ua){ua[k]=null}ua=null;for(var l in swfobject){swfobject[l]=null}swfobject=null})}}();return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr,callbackFn){if(ua.w3&&objectIdStr&&swfVersionStr){var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr;regObj.callbackFn=callbackFn;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false)}else{if(callbackFn){callbackFn({success:false,id:objectIdStr})}}},getObjectById:function(objectIdStr){if(ua.w3){return getObjectById(objectIdStr)}},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var callbackObj={success:false,id:replaceElemIdStr};if(ua.w3&&!(ua.wk&&ua.wk<312)&&swfUrlStr&&replaceElemIdStr&&widthStr&&heightStr&&swfVersionStr){setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){widthStr+="";heightStr+="";var att={};if(attObj&&typeof attObj===OBJECT){for(var i in attObj){att[i]=attObj[i]}}att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT){for(var j in parObj){par[j]=parObj[j]}}if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k]}else{par.flashvars=k+"="+flashvarsObj[k]}}}if(hasPlayerVersion(swfVersionStr)){var obj=createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true)}callbackObj.success=true;callbackObj.ref=obj}else{if(xiSwfUrlStr&&canExpressInstall()){att.data=xiSwfUrlStr;showExpressInstall(att,par,replaceElemIdStr,callbackFn);return}else{setVisibility(replaceElemIdStr,true)}}if(callbackFn){callbackFn(callbackObj)}})}else{if(callbackFn){callbackFn(callbackObj)}}},switchOffAutoHideShow:function(){autoHideShow=false},ua:ua,getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]}},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3){return createSWF(attObj,parObj,replaceElemIdStr)}else{return undefined}},showExpressInstall:function(att,par,replaceElemIdStr,callbackFn){if(ua.w3&&canExpressInstall()){showExpressInstall(att,par,replaceElemIdStr,callbackFn)}},removeSWF:function(objElemIdStr){if(ua.w3){removeSWF(objElemIdStr)}},createCSS:function(selStr,declStr,mediaStr,newStyleBoolean){if(ua.w3){createCSS(selStr,declStr,mediaStr,newStyleBoolean)}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(q){if(/\?/.test(q)){q=q.split("?")[1]}if(param==null){return urlEncodeIfNecessary(q)}var pairs=q.split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(isExpressInstallActive){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj&&storedAltContent){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block"}}if(storedCallbackFn){storedCallbackFn(storedCallbackObj)}}isExpressInstallActive=false}}}}();

// //rails unobtrusive js
// (function($,undefined){var rails;$.rails=rails={linkClickSelector:'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',inputChangeSelector:'select[data-remote], input[data-remote], textarea[data-remote]',formSubmitSelector:'form',formInputClickSelector:'form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])',disableSelector:'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',enableSelector:'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',requiredInputSelector:'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',fileInputSelector:'input:file',linkDisableSelector:'a[data-disable-with]',CSRFProtection:function(xhr){var token=$('meta[name="csrf-token"]').attr('content');if(token)xhr.setRequestHeader('X-CSRF-Token',token)},fire:function(obj,name,data){var event=$.Event(name);obj.trigger(event,data);return event.result!==false},confirm:function(message){return confirm(message)},ajax:function(options){return $.ajax(options)},href:function(element){return element.attr('href')},handleRemote:function(element){var method,url,data,crossDomain,dataType,options;if(rails.fire(element,'ajax:before')){crossDomain=element.data('cross-domain')||null;dataType=element.data('type')||($.ajaxSettings&&$.ajaxSettings.dataType);if(element.is('form')){method=element.attr('method');url=element.attr('action');data=element.serializeArray();var button=element.data('ujs:submit-button');if(button){data.push(button);element.data('ujs:submit-button',null)}}else if(element.is(rails.inputChangeSelector)){method=element.data('method');url=element.data('url');data=element.serialize();if(element.data('params'))data=data+"&"+element.data('params')}else{method=element.data('method');url=rails.href(element);data=element.data('params')||null}options={type:method||'GET',data:data,dataType:dataType,crossDomain:crossDomain,beforeSend:function(xhr,settings){if(settings.dataType===undefined){xhr.setRequestHeader('accept','*/*;q=0.5, '+settings.accepts.script)}return rails.fire(element,'ajax:beforeSend',[xhr,settings])},success:function(data,status,xhr){element.trigger('ajax:success',[data,status,xhr])},complete:function(xhr,status){element.trigger('ajax:complete',[xhr,status])},error:function(xhr,status,error){element.trigger('ajax:error',[xhr,status,error])}};if(url){options.url=url}return rails.ajax(options)}else{return false}},handleMethod:function(link){var href=rails.href(link),method=link.data('method'),target=link.attr('target'),csrf_token=$('meta[name=csrf-token]').attr('content'),csrf_param=$('meta[name=csrf-param]').attr('content'),form=$('<form method="post" action="'+href+'"></form>'),metadata_input='<input name="_method" value="'+method+'" type="hidden" />';if(csrf_param!==undefined&&csrf_token!==undefined){metadata_input+='<input name="'+csrf_param+'" value="'+csrf_token+'" type="hidden" />'}if(target){form.attr('target',target)}form.hide().append(metadata_input).appendTo('body');form.submit()},disableFormElements:function(form){form.find(rails.disableSelector).each(function(){var element=$(this),method=element.is('button')?'html':'val';element.data('ujs:enable-with',element[method]());element[method](element.data('disable-with'));element.prop('disabled',true)})},enableFormElements:function(form){form.find(rails.enableSelector).each(function(){var element=$(this),method=element.is('button')?'html':'val';if(element.data('ujs:enable-with'))element[method](element.data('ujs:enable-with'));element.prop('disabled',false)})},allowAction:function(element){var message=element.data('confirm'),answer=false,callback;if(!message){return true}if(rails.fire(element,'confirm')){answer=rails.confirm(message);callback=rails.fire(element,'confirm:complete',[answer])}return answer&&callback},blankInputs:function(form,specifiedSelector,nonBlank){var inputs=$(),input,selector=specifiedSelector||'input,textarea';form.find(selector).each(function(){input=$(this);if(nonBlank?input.val():!input.val()){inputs=inputs.add(input)}});return inputs.length?inputs:false},nonBlankInputs:function(form,specifiedSelector){return rails.blankInputs(form,specifiedSelector,true)},stopEverything:function(e){$(e.target).trigger('ujs:everythingStopped');e.stopImmediatePropagation();return false},callFormSubmitBindings:function(form,event){var events=form.data('events'),continuePropagation=true;if(events!==undefined&&events['submit']!==undefined){$.each(events['submit'],function(i,obj){if(typeof obj.handler==='function')return continuePropagation=obj.handler(event)})}return continuePropagation},disableElement:function(element){element.data('ujs:enable-with',element.html());element.html(element.data('disable-with'));element.bind('click.railsDisable',function(e){return rails.stopEverything(e)})},enableElement:function(element){if(element.data('ujs:enable-with')!==undefined){element.html(element.data('ujs:enable-with'));element.data('ujs:enable-with',false)}element.unbind('click.railsDisable')}};$.ajaxPrefilter(function(options,originalOptions,xhr){if(!options.crossDomain){rails.CSRFProtection(xhr)}});$(document).delegate(rails.linkDisableSelector,'ajax:complete',function(){rails.enableElement($(this))});$(document).delegate(rails.linkClickSelector,'click.rails',function(e){var link=$(this),method=link.data('method'),data=link.data('params');if(!rails.allowAction(link))return rails.stopEverything(e);if(link.is(rails.linkDisableSelector))rails.disableElement(link);if(link.data('remote')!==undefined){if((e.metaKey||e.ctrlKey)&&(!method||method==='GET')&&!data){return true}if(rails.handleRemote(link)===false){rails.enableElement(link)}return false}else if(link.data('method')){rails.handleMethod(link);return false}});$(document).delegate(rails.inputChangeSelector,'change.rails',function(e){var link=$(this);if(!rails.allowAction(link))return rails.stopEverything(e);rails.handleRemote(link);return false});$(document).delegate(rails.formSubmitSelector,'submit.rails',function(e){var form=$(this),remote=form.data('remote')!==undefined,blankRequiredInputs=rails.blankInputs(form,rails.requiredInputSelector),nonBlankFileInputs=rails.nonBlankInputs(form,rails.fileInputSelector);if(!rails.allowAction(form))return rails.stopEverything(e);if(blankRequiredInputs&&form.attr("novalidate")==undefined&&rails.fire(form,'ajax:aborted:required',[blankRequiredInputs])){return rails.stopEverything(e)}if(remote){if(nonBlankFileInputs){return rails.fire(form,'ajax:aborted:file',[nonBlankFileInputs])}if(!$.support.submitBubbles&&$().jquery<'1.7'&&rails.callFormSubmitBindings(form,e)===false)return rails.stopEverything(e);rails.handleRemote(form);return false}else{setTimeout(function(){rails.disableFormElements(form)},13)}});$(document).delegate(rails.formInputClickSelector,'click.rails',function(event){var button=$(this);if(!rails.allowAction(button))return rails.stopEverything(event);var name=button.attr('name'),data=name?{name:name,value:button.val()}:null;button.closest('form').data('ujs:submit-button',data)});$(document).delegate(rails.formSubmitSelector,'ajax:beforeSend.rails',function(event){if(this==event.target)rails.disableFormElements($(this))});$(document).delegate(rails.formSubmitSelector,'ajax:complete.rails',function(event){if(this==event.target)rails.enableFormElements($(this))});$(function(){csrf_token=$('meta[name=csrf-token]').attr('content');csrf_param=$('meta[name=csrf-param]').attr('content');$('form input[name="'+csrf_param+'"]').val(csrf_token)})})(jQuery);

