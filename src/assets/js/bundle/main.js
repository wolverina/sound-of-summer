$(document).ready(function() {
	Summer.init();	
});//end docready

var Summer = {
	'data': {
		'count': []
	},

	'nodes': {
		'close': '<a href="#" title="Close" class="icon a-close"><span class="accessibility">Close</span></a>'
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
				var year = $(this).data('year').toString();
        		
        		$('#js-content').html('').load('_content.html', function(){
        			
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
					+'<div class="caption icon locality">'
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
					+'<a href="#" data-rdio="">'
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
				title = $self.find('.term').text();

			R.request({
				method: 'search',
					content: {
					query: title+' '+artist,
					types: 'Track',
					start: 0,
					count: 1
				},

				success: function(response) {
					$self
					.attr('data-rdio', response.result.results[0].key)
					.addClass('is-available');

				},

				error: function(response) {
					console.log("error: " + response.message);
				}
			});

			var $self = $(this),
				r = Math.round(20+i),
				g = Math.round(i * 2.25),
				b = Math.round((10+i) * 2),
				a = (.1+(i*.01));

		  	$self.css({
		  		'backgroundColor': 'rgba('+ r +','+ g +','+ b +','+ a +')'
		  	});
		});
			
		$songs.find('a').on('click', function(e){
			var $self = $(this),
				artist = $self.find('.def').text(), 
				title = $self.find('.term').text(),
				rdio = $self.data('rdio');

			Summer.song(artist, title, rdio);

			e.preventDefault();
		});

		$('#js-date').html(data.date);
		$('#js-description').html(data.description);

		callback();
	},

	song: function(artist, title, rdio){
		
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
			Summer.player(rdio);

			var bpm = data.response.songs[0].audio_summary.tempo,
				$indicator = $('.indicator');
			
			$indicator.show();

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
		});
	},

	player: function(src){
		var $player = $('#js-player');

		R.ready(function() {
			$player.fadeIn();
			console.log(src);
		 	R.player.play({source: src});
		});
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

	container.append(Summer.nodes.close);
	
	trigger.on('click', function(e){	
		inner.fadeToggle(500);
		container.slideToggle(500);

		e.preventDefault();
	});
	
	container.on(Summer.nodes.close, 'click', function(e){
		container.slideToggle(500);
		inner.fadeToggle(500);	

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