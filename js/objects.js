//Objects lesson.
var robot = {
    fuel: 100,
    weapon: "laser",
    speed: 10,
    strength: 5,
    armor: "light",

    addFuel: function (tank) {
        this.fuel += tank;
    },

    upgradeArmor: function (change) {
        this.armor = change;
    },

    changeWeapon: function (change) {
        this.weapon = change;
    },
}

robot.speed += parseInt(prompt("Increase robot speed."));
alert("Our robot now has a speed of " + robot.speed);
robot.upgradeArmor(prompt("What should we upgrade the armor to?"));
alert("Our robot now has " + robot.armor + " armor.");