input.onButtonPressed(Button.A, function () {
    SHIP.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    SHOOT = game.createSprite(SHIP.get(LedSpriteProperty.X), SHIP.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        SHOOT.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (SHOOT.isTouching(ALIEN)) {
            game.addScore(1)
            SHOOT.delete()
            ALIEN.delete()
        }
    }
    if (SHOOT.get(LedSpriteProperty.Y) <= 0) {
        SHOOT.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    SHIP.move(1)
})
let ALIEN: game.LedSprite = null
let SHOOT: game.LedSprite = null
let SHIP: game.LedSprite = null
SHIP = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    ALIEN = game.createSprite(randint(0, 4), 0)
    basic.pause(100)
    ALIEN.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        ALIEN.move(1)
        basic.pause(500)
        if (ALIEN.isTouching(SHIP)) {
            game.gameOver()
        }
    }
    if (ALIEN.isTouchingEdge()) {
        ALIEN.delete()
    }
})
