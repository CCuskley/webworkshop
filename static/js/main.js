const mainSocket=io()

var timer = new easytimer.Timer();
var embedCode='<iframe src="https://giphy.com/embed/Ju7l5y9osyymQ" width="480" height="360" style="" id="myGif" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ">via GIPHY</a></p>'
var timerUp=false
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    var timeNow= timer.getTimeValues().seconds
    if (timeNow==10 && !timerUp) {
       $('#formWrapper').hide()
       $('#gifWrapper').append(embedCode)
       $('#gifWrapper').show()
       timerUp=true
    } else if (!timerUp) {
        $('#basicUsage').html(timer.getTimeValues().toString());
    }      
});

$("#startOver").click(function() {
    timer.reset()
    timerUp=false
    $('#gifWrapper').hide();
    $('#myGif').remove();
    $('#formWrapper').show()
    
});

mainSocket.on('connection confirmation', function(message) {
    console.log(message["data"])
});
