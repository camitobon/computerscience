namespace SpriteKind {
    export const door = SpriteKind.create()
}
function level_two () {
    tiles.setTilemap(tilemap`level2`)
    enemyreal = sprites.create(assets.image`enemyreallol`, SpriteKind.Enemy)
    enemyreal.follow(mySprite, 30)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    level_two()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
    if (statusbar.value == 0) {
        game.over(false)
    }
})
let statusbar: StatusBarSprite = null
let enemyreal: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
enemyreal = sprites.create(assets.image`enemyreallol`, SpriteKind.Enemy)
enemyreal.setPosition(24, 88)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 100
statusbar.setPosition(17, 6)
enemyreal = sprites.create(assets.image`enemyreallol`, SpriteKind.Enemy)
enemyreal.setPosition(160, 39)
enemyreal = sprites.create(assets.image`enemyreallol`, SpriteKind.Enemy)
enemyreal.setPosition(186, 231)
let mySprite2 = sprites.create(assets.image`doorway`, SpriteKind.door)
mySprite2.setPosition(240, 200)
