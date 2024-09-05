const mainSocket=io()

mainSocket.on('connection confirmation', function(message) {
    console.log(message[data])
});

$("#agreeConsent").click(function() {
    mainSocket.emit('request stimuli')
})


