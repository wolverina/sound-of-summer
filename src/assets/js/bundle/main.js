$(document).ready(function() {
  Summer.init();  
});//end docready

var Summer = {
    'data': {
        'count': []
    },

    'nodes': {
        'close': '<a href="#" title="Close" class="icon icon-icn-close a-close"><span>Close</span></a>',
        'closeAlt': '<a hrfef="#" title="Close" class="icon icon-icn-close-alt a-close"><span>Close</span></a>',
        'spin': '<div class="loading"></div>'
    },

    'opts': {
        'time': 500,

        'spinLg': {
            lines: 6,
            length: 15,
            width: 14,
            radius: 28,
            corners: 0.5,
            rotate: 0,
            direction: 1,
            color: '#444',
            speed: 1.4,
            trail: 79,
            shadow: false,
            hwaccel: false,
            className: 'spinner',
            zIndex: 2e9, 
            top: 'auto',
            left: 'auto'
        },

        'spinSm': {
            lines: 6,
            length: 3,
            width: 3,
            radius: 5,
            corners: 0.5,
            rotate: 0,
            direction: 1,
            color: '#8f999b',
            speed: 1.4,
            trail: 79,
            shadow: false,
            hwaccel: false,
            className: 'spinner',
            zIndex: 2e9, 
            top: '0px',
            left: 'auto'
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
                };
                return this;
            };
        }

        size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
        $timeline = $('#js-timeline');
        $player = $('#js-player');
        $songs = $('#js-songs');
            
        $timeline
            .spin(Summer.opts.spinLg)
            .fadeTo(Summer.opts.time/2, 0.5);
              
        $.getJSON('assets/data/data.json', function(data) {

            Summer.data = data.table;
            
            var arr = [],
                obj = Summer.data.songs;

            for (i = 0, len = obj.length; i < len; i++) {
                
                if (obj[i].event_id instanceof Array) {
                    for (j = 0, length = obj[i].event_id.length; j < length; j++) {
                        arr.push(obj[i].event_id[j]);
                    }
                } else {
                    arr.push(obj[i].event_id);
                }
            }

            Summer.data.count = arrFrequency(arr);

            Summer.timeline.init();
            Summer.player.init();
            Summer.timeline.orient();

        });

        triggaPane($('#js-about'), $('#b-about'));
        scrollTop($('#js-top'));

        window.onresize = function() {
            size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

            Summer.timeline.orient();
        };
    },

    'timeline': {
        init: function(){
            var obj = Summer.data.events,
                count = Summer.data.count[1];

            $timeline
                .fadeTo(Summer.opts.time/2, 1)
                .spin(false);
            
            for (i = 0, len = obj.length; i < len; i++) {

                $timeline.append(
                    '<li>'+
                    '<div class="datum">'+
                    '<a href="#" data-song-count="'+
                    count[i]+
                    '" data-year="'+
                    obj[i].date+
                    '">'+
                    '<span>'+
                    count[i]+
                    '</span>'+
                    '</a>'+
                    '</div>'+
                    '<div class="label">'+
                    obj[i].date+
                    '</div>'+
                    '</li>'
                );
            }

            if (typeof localStorage['Summer.year'] !== 'undefined') {
                var object = JSON.parse(localStorage.getItem(['Summer.year'])),
                    date = object.timestamp,
                    year = object.value,
                    now = new Date().getTime(),
                    hour = 60 * 60000;

                if (parseInt(date+hour, null) >= now) {
                    Summer.timeline.load(year);
                }
            }

            $timeline.find('a').on('click', function(e){
                var object = {
                    value: this.getAttribute('data-year').toString(), 
                    timestamp: new Date().getTime()
                };

                localStorage.setItem('Summer.year', JSON.stringify(object));

                Summer.timeline.load(object.value);     

                e.preventDefault();
            });
        },

        load: function(year){
            $timeline.spin(Summer.opts.spinLg);

            $('#js-content').html('').load('_content.html', function(){
                $timeline
                    .spin(false)
                    .find('a')
                    .removeClass('is-active')
                    .end()
                    .find('a[data-year="'+year+'"]')
                    .addClass('is-active');
                
                Summer.event(year, function(){
                    scrollTo('#js-content');
                });
            });  
        },

        orient: function(){
            var $label = $timeline.find('.label');

            $timeline.find('[data-song-count]').each(function(){
                var $self = $(this),
                    num = this.getAttribute('data-song-count');

                if (size === '"base"' /*ff*/ || size === 'base') {
                    var value = (num)*2;

                    $self.css({
                        'width': value +'px', 
                        'height': '35px', 
                        'vertical-align': 'bottom', 
                        'opacity': 0.75
                    });

                    if (value > 75) {
                        $self.css({ 'opacity': 0.8 });
                    }

                    if (value > 118) {
                        $self.css({ 'opacity': 0.9 });
                    } 

                    if (value > 165) {
                        $self.css({ 'opacity': 0.96 });
                    }
              
                } else {
                    var value = (num)*(3.14159);

                    $self.css({
                        'height': value +'px', 
                        'width': '100%',
                        'vertical-align': 'bottom', 
                        'opacity': 0.75
                    });

                    if (value > 118) {
                        $self.css({ 'opacity': 0.8 });
                    }

                    if (value > 185) {
                        $self.css({ 'opacity': 0.9 });
                    } 

                    if (value > 260) {
                        $self.css({ 'opacity': 0.96 });
                    }
                }
            });

            $label.each(function(){
                var self = $(this),
                    str = self.text();

                if (size === '"small"' /*ff*/ || size === 'small') {
                    self.text(str.replace('20', "'"));
                } else {
                    self.text(str.replace("'", "20"));
                }
            });
        }
    },
     
    event: function(year, callback){
        var data = {
                'locations': [],
                'songs': []
            },
            $songs = $('#js-songs'),
            events = Summer.data.events,
            locations = Summer.data.locations,
            songs = Summer.data.songs;

        for ( i = 0; i < events.length; i++ ) {
            if (events[i].id.indexOf(year) > -1) {
                data.id = events[i].id;
                data.date = events[i].date;
                data.description = events[i].description;
            }
        }

        for ( i = 0; i < locations.length; i++ ) {
            if (locations[i].event_id.indexOf(year) > -1) { 

                data.locations.push(locations[i]);
                
                $('#js-locations').append(
                    '<li>'+
                    '<img src="http://maps.googleapis.com/maps/api/staticmap?center='+
                    locations[i].location+
                    '&zoom=15&size=430x200&sensor=false">'+
                    '<div class="caption">'+
                    '<span class="icon icon-icn-location"></span>'+
                    locations[i].name+
                    '</div>'+
                    '</li>'      
                );
            }
        }

        for ( i = 0; i < songs.length; i++ ) {
            if (songs[i].event_id.indexOf(year) > -1) {
                data.songs.push(songs[i]);

                $songs.append(
                    '<li>'+
                    '<a href="#">'+
                    '<span class="term">'+
                    songs[i].title+
                    '</span>'+
                    '<span class="def">'+
                    songs[i].artist+
                    '</span>'+
                    '</a>'+
                    '</li>'
                );
            }
        }

        $.each($songs.find('a'), function(i) {
            var $self = $(this),
                artist = $self.find('.def').text(), 
                title = $self.find('.term').text(),
                r = Math.round(20+i),
                g = Math.round(i * 2.25),
                b = Math.round((10+i) * 2),
                a = (0.1+(i*0.01));

            $self.css({
                'backgroundColor': 'rgba('+ r +','+ g +','+ b +','+ a +')'
            });
        });

        $songs.find('a').on('click', function(e){
            var $self = $(this),
                artist = $self.find('.def').text(), 
                title = $self.find('.term').text();

            Summer.song(artist, title);

            $songs.find('a').removeClass('is-active');
            $self.addClass('is-active');

            e.preventDefault();
        });

        $('#js-date').html(data.date);
        $('#js-description').html(data.description);

        callback();
    },

    song: function(artist, title, src){

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
            } else {
                var bpm = 70; //moderato
            }

            R.request({
                method: 'search',
                content: {
                query: title+' '+artist,
                types: 'Track',
                start: 0,
                never_or: true,
                count: 1,
                extras: 'streamRegions'
            },
            success: function(response) {
                if (response.result.number_results !== 0){

                    var src = response.result.results[0].key;

                    Summer.player.play(artist, title, src, bpm);

                } else {
                    Summer.player.fail(title);
                }
            },

            error: function(response) {
                console.log("error: " + response.message);
            }
            });
        });
    },

    player: {
        init: function(){

          $player
            .find('.inner')
            .end()
            .append(Summer.nodes.close)
            .find('.a-close').on('click', function(e){
              $player
                .fadeOut(function(){
                  $(this).find('.meta')
                  .hide();
                });
              
              R.player.pause();

              $('#js-songs').find('a').removeClass('is-active');

              e.preventDefault(); 
            });
        },

        play: function(artist, title, src, bpm){

          $player
            .find('.inner')
            .spin(Summer.opts.spinSm)
            .find('.meta')
            .hide();

          R.ready(function() {
          
            var $indicator = $('.indicator');
          
            if (bpm > 140) { //vivace
              var period = (bpm/60);
            } else {
              var period = (bpm/120);
            }
            
            R.player.play({source: src});

            $player             
              .find('.inner')
              .spin(false)
              .find('.alert')
              .hide()
              .end()
              .find('.term')
              .html(title)
              .end()
              .find('.artist')
              .html(artist)
              .end()
              .find('.meta')
              .fadeIn();
              
            $indicator.css({
              '-webkit-animation-duration': 1/period+'s',
              '-moz-animation-duration': 1/period+'s',
              '-ms-animation-duration': 1/period+'s',
              'animation-duration': 1/period+'s'
            });

            R.player.on("change:playState", function(state) {
                if (state === R.player.PLAYSTATE_PLAYING) {
                    R.player.on("change:playState", function(state) {
                        if (state === R.player.PLAYSTATE_STOPPED) {
                            $player.find('.a-close').trigger('click');
                        }
                    });           
                }
            });
          });
        },

        fail: function(title){
          $player
            .find('.inner')
            .spin(false)
            .find('.meta')
            .hide()
            .end()
            .find('.alert')
            .html('<span class="icon icon-icn-locked"></span><span class="term">'+title+'</span> is not available.')
            .show();
        }
    }
};

function arrFrequency(arr) {
    var a = [], b = [], prev;
    
    arr.sort();
    for ( i = 0; i < arr.length; i++ ) {
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
    
    if( y > (h*0.175) && y < (h*0.8) ){
      anchor.fadeIn(Summer.opts.time);
    } else {
      anchor.fadeOut(Summer.opts.time);
    }
  });
  
  anchor.on('click',function(e){  
    scrollTo('body');

    e.preventDefault();
  });
}

function scrollTo(id){
  $('html,body').animate({
    scrollTop: $(id).offset().top
  }, Summer.opts.time);
}