// connection to airconsole
var airconsole = new AirConsole();

// Listen for messages from other devices
airconsole.onMessage = function(from, data) {

    // We receive a message -> Send message back to the device
    airconsole.message(from, "Full of pixels!");

    // Show message on device screen
    var info = document.createElement('DIV');
    info.innerHTML = data;
    document.body.appendChild(info);
};

// Declare shared variables at the top so all methods can access them
let player
let platforms

const game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    update, update 
})

function preload() {
    // Load & Define our game assets
    game.load.image('sky', './assets/sky.png')
    game.load.image('ground', './assets/platform.png')
    game.load.spritesheet('player', './assets/movements_base.png', 69, 78)
}

function create() {
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE)

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky')

    // The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group()

    // We will enable physics for any object that is created in this group
    platforms.enableBody = true

    // Here we create the ground
    let ground = platforms.create(0, game.world.height - 64, 'ground')
    
    // Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2)

    // This stops it from falling away when you jump on it
    ground.body.immovable = true

    // The player and its settings (parameters are x and y location)
    player = game.add.sprite(32, game.world.height - 180, 'player')

    // We need to enable physics on the player
    game.physics.arcade.enable(player)

    // Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.4
    player.body.gravity.y = 800
    player.body.collideWorldBounds = true

    // Our two animations, walking left and right.
    player.animations.add('right', [0, 1, 2, 3, 4, 5], 10, true)
    player.animations.add('left', [6, 7, 8, 9, 10, 11], 10, true)
    // player.animations.add('left', [0, 1], 10, true)
    // player.animations.add('right', [2, 3], 10, true)

    // And bootstrap our controls
    cursors = game.input.keyboard.createCursorKeys()
}

function update() {
    // We want the player to stop when not moving
    player.body.velocity.x = 0
    //  Setup collisions for the player, diamonds, and our platforms
    game.physics.arcade.collide(player, platforms)

    // Configure the controls!
    if (cursors.left.isDown) {
        player.body.velocity.x = -150
        player.animations.play('left')
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 150

        player.animations.play('right')
    } else {
        // If no movement keys are pressed, stop the player
        player.animations.stop()
    }

    // This allows the player to jump!
    if (cursors.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -400
    }

}