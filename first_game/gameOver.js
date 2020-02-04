//var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var

//canvas.width = window.innerWidth; // Sets our canvas to browsers current dimensions
//canvas.height = window.innerHeight/1.5;

//var ctx = canvas.getContext('2d');

var doGameOver = function() {}

doGameOver.prototype = {
    create: function() {
        var style = {
            font: "32px Monospace",
            fill: "#00ff00",
            align: "center"
        }
        
        var text = game.add.text(
            game.width / 2, game.height / 2, "Game Over\n\n " + "\n\nTap to restart", style
        );
        
        text.anchor.set(0.5);
    }

}

