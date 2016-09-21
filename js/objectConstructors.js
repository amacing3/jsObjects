var player = function () {
    var name;
    var speed = 10;
    var health = 100;
    var healing = "Strong";
    this.ammoCount = 100;
    
    this.rearm = function (ammo) {
        this.ammoCount += ammo;
    }
}

var player1 = new player();
var player2 = new player();

function updatePlayer(currentPlayer, healthUpdate, ammo, playerPosition) {
    currentPlayer.name = prompt("Enter a name for " + playerPosition);
    alert(playerPosition + "'s name is " + currentPlayer.name);
    currentPlayer.health = healthUpdate;
    currentPlayer.healing = "Weak";
    currentPlayer.rearm(ammo);
    alert(currentPlayer.name + " has " + currentPlayer.ammoCount + " in their arsonal.");
}

updatePlayer(player1, 20, 1, "player1");
updatePlayer(player2, 60, 1000, "player2");