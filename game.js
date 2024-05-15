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
    game.load.image('character', 'https://opengameart.org/sites/default/files/cattss.svg');
    game.load.image('puzzle', 'https://github.com/ScottF311/Testzone/blob/main/Puzzle1.jpg?raw=true');
}

function create() {
    const character = game.add.image(200, 300, 'character');
    const puzzle = game.add.image(600, 300, 'puzzle');

    // Break puzzle image into pieces based on difficulty
    const pieces = [];
    for (let i = 0; i < difficulty; i++) {
        const piece = game.add.image(600 + i * 50, 300 + i * 50, 'puzzle');
        // Modify piece size or position based on difficulty
        piece.setScale(0.5 + 0.1 * difficulty); // Example: Increase size based on difficulty
        pieces.push(piece);
    }

    // Add logic for dragging and dropping pieces here
}
