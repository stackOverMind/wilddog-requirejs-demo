requirejs.config({
    paths:{
        'Wilddog':"https://cdn.wilddog.com/sdk/js/0.6.2/wilddog"
    }
});
requirejs(['Wilddog'], function (Wilddog) {
    var ref = new Wilddog("https://test123.wilddogio.com");
    ref.on('child_added',function(snap){
        console.log(snap.val())
    })
})
