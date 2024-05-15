// game.js

let game;

window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create
        }
    };

    game = new Phaser.Game(config);
};

function preload() {
    this.load.image('character', 'https://github.com/ScottF311/Testzone/blob/main/Character.png?raw=true');
    this.load.image('puzzle', 'https://github.com/ScottF311/Testzone/blob/main/Puzzle1.png?raw=true');
}

function create() {
    const character = this.add.image(200, 300, 'character');
    const puzzle = this.add.image(600, 300, 'puzzle');
}
