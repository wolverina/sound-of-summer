$(document).ready(function() {
	Summer.init();	
});//end docready

var Summer = {
	'data': {
		'count': []
	},

	'nodes': {
		'close': '<a href="#" title="Close" class="icon icon-icn-close a-close"><span>Close</span></a>',
		'closeAlt': '<a href="#" title="Close" class="icon icon-icn-close-alt a-close"><span>Close</span></a>',
		'spin': '<div class="loading"></div>'
	},

	'opts': {
		'spinLg': {
			lines: 7, // The number of lines to draw
			length: 15, // The length of each line
			width: 16, // The line thickness
			radius: 28, // The radius of the inner circle
			corners: 0, // Corner roundness (0..1)
			rotate: 0, // The rotation offset
			direction: 1, // 1: clockwise, -1: counterclockwise
			color: '#8f999b', // #rgb or #rrggbb
			speed: 1.4, // Rounds per second
			trail: 79, // Afterglow percentage
			shadow: false, // Whether to render a shadow
			hwaccel: false, // Whether to use hardware acceleration
			className: 'spinner', // The CSS class to assign to the spinner
			zIndex: 2e9, // The z-index (defaults to 2000000000)
			top: 'auto', // Top position relative to parent in px
			left: 'auto' // Left position relative to parent in px
		},

		'spinSm': {
			lines: 7, // The number of lines to draw
			length: 4, // The length of each line
			width: 4, // The line thickness
			radius: 7, // The radius of the inner circle
			corners: 0, // Corner roundness (0..1)
			rotate: 0, // The rotation offset
			direction: 1, // 1: clockwise, -1: counterclockwise
			color: '#8f999b', // #rgb or #rrggbb
			speed: 1.4, // Rounds per second
			trail: 79, // Afterglow percentage
			shadow: false, // Whether to render a shadow
			hwaccel: false, // Whether to use hardware acceleration
			className: 'spinner', // The CSS class to assign to the spinner
			zIndex: 2e9, // The z-index (defaults to 2000000000)
			top: 'auto', // Top position relative to parent in px
			left: 'auto' // Left position relative to parent in px
		}
	},

	init: function(){
		if (!window.getComputedStyle) {
		    window.getComputedStyle = function(el, pseudo) {
		        this.el = el;
		        this.getPropertyValue = function(prop) {
		            var re = /(\-([a-z]){1})/g;
		            if (prop == 'float') prop = 'styleFloat';
		            if (re.test(prop)) {
		                prop = prop.replace(re, function () {
		                    return arguments[2].toUpperCase();
		                });
		            }
		            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
		        }
		        return this;
		    }
		}

        size = window.getComputedStyle(document.body,':after').getPropertyValue('content'),
        $timeline = $('#js-timeline');
      
        $.getJSON('assets/data/data.json', function(data) {
        	var arr = [];

            $.each(data, function(key, val) {
                Summer.data = val;
            });

            //Summer.data.count = [];

	        $.each(Summer.data.songs, function(i, val) {
	            if (this.event_id instanceof Array) {

	            	$.each(this.event_id, function(i, val){
	            		arr.push(val);
	            	});
	            	
	            } else {
	            	arr.push(this.event_id);
	            }
	        });
	         
	        Summer.data.count = arrFrequency(arr);
	        
            Summer.timeline.init();
           	Summer.timeline.orient();

        });

        triggaPane($('#js-about'), $('#b-about'));
		scrollTop($('#js-top'));

        window.onresize = function() {
			size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

			Summer.timeline.orient();
		}


	},

	'timeline': {
		init: function(){
			$.each(Summer.data.events, function(i){
	            $timeline.append(
	            	'<li>'
	                +'<div class="datum">'
	                +'<a href="#" data-song-count="'
	                +Summer.data.count[1][i]
	                +'" data-year="'+this.date+'">'
	                +'<span>'
	                +Summer.data.count[1][i]
	                +'</span>'
	                +'</a>'
	                +'</div>'
	                +'<div class="label">'
	                +this.date
	                +'</div>'
	                +'</li>'
	            );
        	});

			$timeline.find('a').on('click', function(e){
				var $self = $(this),
					year = $(this).data('year').toString();
        		
        		$timeline.spin(Summer.opts.spinLg);

        		$('#js-content').html('').load('_content.html', function(){
        			$timeline
        				.spin(false)
        				.find('a')
        				.removeClass('is-active');

        			$self.addClass('is-active');
        			
        			Summer.event(year, function(){
        				scrollTo('#js-content');
        			});
        		});        		

        		e.preventDefault();
			})
		},

		orient: function(){
			var $label = $timeline.find('.label');

			$timeline.find('[data-song-count]').each(function(){
				var $self = $(this),
					num = $self.attr('data-song-count');
					
				if (size === '"base"' /*ff*/ || size === 'base') {
					var value = (num)*2;

					$self.css({
						'width': value +'px', 
						'height': '35px', 
						'vertical-align': 'bottom', 
						'opacity': .75
					});

					if (value > 75) {
						$self.css({ 'opacity': .8 });
					}

					if (value > 118) {
						$self.css({ 'opacity': .9 });
					} 

					if (value > 165) {
						$self.css({ 'opacity': .96 });
					}
					
				} else {
					var value = (num)*(3.14159);

					$self.css({
						'height': value +'px', 
						'width': '100%',
						'vertical-align': 'bottom', 
						'opacity': .75
					});
					
					if (value > 118) {
						$self.css({ 'opacity': .8 });
					}

					if (value > 185) {
						$self.css({ 'opacity': .9 });
					} 

					if (value > 260) {
						$self.css({ 'opacity': .96 });
					}
				}
			});

			if (size === '"small"' /*ff*/ || size === 'small') {

				$label.each(function(){
			        var $str = $(this).text(),
			        	str = $str.replace('20', "'");
			        
			        $(this).text(str);
				});
			} else {
				$label.each(function(){
			        var $str = $(this).text(),
			        	str = $str.replace("'", "20");

			        $(this).text(str);
				});
			}
		}
	},
     
	event: function(year, callback){
		var data = {
				'locations': [],
				'songs': []
			},
			$songs = $('#js-songs');

		$.each(Summer.data.events, function(){
			
			if (this.id.indexOf(year) > -1) {
				data.id = this.id,
				data.date = this.date,
				data.description = this.description;
			}
		});

		$.each(Summer.data.locations, function(){
			if (this.event_id.indexOf(year) > -1) {	
				data.locations.push(this);
				$('#js-locations').append(
					'<li>'
					+'<img src="http://maps.googleapis.com/maps/api/staticmap?center='
					+this.location
					+'&zoom=15&size=430x200&sensor=false">'
					+'<div class="caption">'
					+'<span class="icon icon-icn-location"></span>'
					+this.name
					+'</div>'
					+'</li>'			
				);
			}
		});

		$.each(Summer.data.songs, function(i){
			if (this.event_id.indexOf(year) > -1) {
				data.songs.push(this);
				
				$songs.append(
					'<li>'
					+'<a href="#">'
					+'<span class="term">'
					+this.title
					+'</span>'
					+'<span class="def">'
					+this.artist
					+'</span>'
					+'</a>'
					+'</li>'
				);
			}
		});
		
		
		$.each($songs.find('a'), function(i) {
			var $self = $(this),
				artist = $self.find('.def').text(), 
				title = $self.find('.term').text(),
				r = Math.round(20+i),
				g = Math.round(i * 2.25),
				b = Math.round((10+i) * 2),
				a = (.1+(i*.01));

		  	$self.css({
		  		'backgroundColor': 'rgba('+ r +','+ g +','+ b +','+ a +')'
		  	});
		});

		Summer.player.init();
			
		$songs.find('a').on('click', function(e){
			var $self = $(this),
				artist = $self.find('.def').text(), 
				title = $self.find('.term').text();

			Summer.song(artist, title);
			e.preventDefault();
		});

		$('#js-date').html(data.date);
		$('#js-description').html(data.description);

		callback();
	},

	song: function(artist, title, src){
		var $player = $('#js-player');

		$player
			.find('.inner')
			.spin(Summer.opts.spinSm)
			.end()
			.fadeIn();

		$.ajax({
			url: "http://developer.echonest.com/api/v4/song/search?",
			dataType: "jsonp",
			data: {
				format: 'jsonp',
				results: 1,
				bucket: 'audio_summary',
				api_key: 'BMFA0JN7IZ2RSW1TA',
				artist: artist,
				title: title
			}
		}).done(function(data){
			if (data.response.songs[0]) {
				var bpm = data.response.songs[0].audio_summary.tempo;
			}
			
			R.request({
				method: 'search',
					content: {
					query: title+' '+artist,
					types: 'Track',
					start: 0,
					count: 1
				},

				success: function(response) {
					var src = response.result.results[0].key;

					Summer.player.play(artist, title, src);
				},

				error: function(response) {
					console.log("error: " + response.message);
				}
			});
		});
	},

	player: {
		init: function(){
			var $player = $('#js-player');

			$player
				.find('.inner')
				.spin(Summer.opts.spinSm)
				.end()
				.append(Summer.nodes.close)
				.find('.a-close').on('click', function(e){
					$player
						.fadeOut()
						.find('.meta, .indicator')
						.hide();

					R.player.pause();
					e.preventDefault();	
				});
		},

		play: function(artist, title, src, bpm){
			var $player = $('#js-player');

			R.ready(function() {

				var $indicator = $('.indicator');
			
				if (bpm > 140) { //vivace
					var period = (bpm/60);

				} else {
					var period = (bpm/120);
				}

				$indicator.css({
					'-webkit-animation-duration': 1/period+'s',
					'-moz-animation-duration': 1/period+'s',
					'-ms-animation-duration': 1/period+'s',
					'animation-duration': 1/period+'s'
				});

				$player
					.find('.meta, .indicator')
					.hide()
					.end()
					.find('.inner')
					.spin(false)
					.end()
					.find('.term')
			 		.html(title)
			 		.end()
			 		.find('.artist')
			 		.html(artist)
			 		.end()
			 		.find('.meta, .indicator')
			 		.fadeIn();
			 	
			 	R.player.play({source: src});

			});
		}
	}
}

function arrFrequency(arr) {
    var a = [], b = [], prev;
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    
    return [a, b];
}

function triggaPane(trigger, container){

	var inner = container.find('.inner');

	container
		.append(Summer.nodes.closeAlt)
		.find('.a-close').on('click', function(e){
			container.slideToggle(500);
			inner.fadeToggle(500);	

			e.preventDefault();	
		});
	
	trigger.on('click', function(e){	
		inner.fadeToggle(500);
		container.slideToggle(500);

		e.preventDefault();
	});
}

function scrollTop(anchor){

	$(window).scroll(function(){		
	
		var h = $('body').height(),
			y = $(window).scrollTop();
	  
		if( y > (h*.175) && y < (h*.8) ){
			anchor.fadeIn('slow');
		} else {
			anchor.fadeOut('slow');
		}
	});
	
	anchor.on('click',function(e){	
		scrollTo('body');

		e.preventDefault();
	});
}

function scrollTo(id){
	$('html,body').animate({scrollTop: $(id).offset().top},'slow');
}