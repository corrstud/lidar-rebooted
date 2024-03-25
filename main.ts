namespace SpriteKind {
    export const forcefield = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    directionalaim = 0
    DroneTop.setImage(img`
        . . d b b . . . . . . d b b . . 
        . d d b b b . . . . d d b b b . 
        b b d b b b b c c b b d b b b . 
        b b b d b b b c c b b b d b b . 
        b b b b d b b c c b b b b d b . 
        . b b b d d c c c c b b b d d . 
        . . b b d c c c c c c b b d . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . d b b c c c c c c d b b . . 
        . d d b b b c c c c d d b b b . 
        b b d b b b b c c b b d b b b . 
        b b b d b b b 7 9 b b b d b b . 
        b b b b d b b 6 7 b b b b d b . 
        . b b b d d c c c c b b b d d . 
        . . b b d . . . . . . b b d . . 
        `)
    animation.runImageAnimation(
    DroneTop,
    [img`
        . . d b b . . . . . . d b b . . 
        . d d b b b . . . . d d b b b . 
        b b d b b b b c c b b d b b b b 
        b b b d b b b c c b b b d b b b 
        b b b b d b b c c b b b b d b b 
        . b b b d d c c c c b b b d d . 
        . . b b d c c c c c c b b d . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . d b b c c c c c c d b b . . 
        . d d b b b c c c c d d b b b . 
        b b d b b b b c c b b d b b b b 
        b b b d b b b 7 9 b b b d b b b 
        b b b b d b b 6 7 b b b b d b b 
        . b b b d d c c c c b b b d d . 
        . . b b d . . . . . . b b d . . 
        `,img`
        . . b b d . . . . . . b b d . . 
        . b b b d b . . . . b b b d b . 
        b b b d d b b c c b b b d d b b 
        b b b d b b b c c b b b d b b b 
        b b d d b b b c c b b d d b b b 
        . b d b b b c c c c b d b b b . 
        . . d b b c c c c c c d b b . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . b b d c c c c c c b b d . . 
        . b b b d b c c c c b b b d b . 
        b b b d d b b c c b b b d d b b 
        b b b d b b b 7 9 b b b d b b b 
        b b d d b b b 6 7 b b d d b b b 
        . b d b b b c c c c b d b b b . 
        . . d b b . . . . . . d b b . . 
        `,img`
        . . b b d . . . . . . b b d . . 
        . b b b d d . . . . b b b d d . 
        b b b b d b b c c b b b b d b b 
        b b b d b b b c c b b b d b b b 
        b b d b b b b c c b b d b b b b 
        . d d b b b c c c c d d b b b . 
        . . d b b c c c c c c d b b . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . b b d c c c c c c b b d . . 
        . b b b d d c c c c b b b d d . 
        b b b b d b b c c b b b b d b b 
        b b b d b b b 7 9 b b b d b b b 
        b b d b b b b 6 7 b b d b b b b 
        . d d b b b c c c c d d b b b . 
        . . d b b . . . . . . d b b . . 
        `,img`
        . . b b b . . . . . . b b b . . 
        . b b b b b . . . . b b b b b . 
        b b b b d d d c c b b b b d d d 
        b b d d d b b c c b b d d d b b 
        d d d b b b b c c d d d b b b b 
        . b b b b b c c c c b b b b b . 
        . . b b b c c c c c c b b b . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . b b b c c c c c c b b b . . 
        . b b b b b c c c c b b b b b . 
        b b b b d d d c c b b b b d d d 
        b b d d d b b 7 9 b b d d d b b 
        d d d b b b b 6 7 d d d b b b b 
        . b b b b b c c c c b b b b b . 
        . . b b b . . . . . . b b b . . 
        `,img`
        . . b b b . . . . . . b b b . . 
        . b b b b b . . . . b b b b b . 
        d d d b b b b c c d d d b b b b 
        b b d d d b b c c b b d d d b b 
        b b b b d d d c c b b b b d d d 
        . b b b b b c c c c b b b b b . 
        . . b b b c c c c c c b b b . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . b b b c c c c c c b b b . . 
        . b b b b b c c c c b b b b b . 
        d d d b b b b c c d d d b b b b 
        b b d d d b b 7 9 b b d d d b b 
        b b b b d d d 6 7 b b b b d d d 
        . b b b b b c c c c b b b b b . 
        . . b b b . . . . . . b b b . . 
        `],
    100,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (timerthing == 0) {
        controller.moveSprite(DroneTop, 0, 0)
        idkwhy = sprites.createProjectileFromSprite(img`
            2 . . . . . . . . . . . . . . . 2 
            . 2 . . . . . . . . . . . . . 2 . 
            . . 2 . . . . . . . . . . . 2 . . 
            . . . 2 . . . . . . . . . 2 . . . 
            . . . . 2 . . . . . . . 2 . . . . 
            . . . . . 2 . . . . . 2 . . . . . 
            . . . . . . 2 . . . 2 . . . . . . 
            . . . . . . . 2 . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . 2 . . . . . . . 
            . . . . . . 2 . . . 2 . . . . . . 
            . . . . . 2 . . . . . 2 . . . . . 
            . . . . 2 . . . . . . . 2 . . . . 
            . . . 2 . . . . . . . . . 2 . . . 
            . . 2 . . . . . . . . . . . 2 . . 
            . 2 . . . . . . . . . . . . . 2 . 
            2 . . . . . . . . . . . . . . . 2 
            `, DroneTop, 0, 0)
        idkwhy.setScale(6.5, ScaleAnchor.Middle)
        idkwhy.lifespan = 1000
        animation.runImageAnimation(
        idkwhy,
        [img`
            2 . . . . . . . . . . . . . . . 2 
            . 2 . . . . . . . . . . . . . 2 . 
            . . 2 . . . . . . . . . . . 2 . . 
            . . . 2 . . . . . . . . . 2 . . . 
            . . . . 2 . . . . . . . 2 . . . . 
            . . . . . 2 . . . . . 2 . . . . . 
            . . . . . . 2 . . . 2 . . . . . . 
            . . . . . . . 2 . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . 2 . . . . . . . 
            . . . . . . 2 . . . 2 . . . . . . 
            . . . . . 2 . . . . . 2 . . . . . 
            . . . . 2 . . . . . . . 2 . . . . 
            . . . 2 . . . . . . . . . 2 . . . 
            . . 2 . . . . . . . . . . . 2 . . 
            . 2 . . . . . . . . . . . . . 2 . 
            2 . . . . . . . . . . . . . . . 2 
            `,img`
            . 2 . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . 2 
            . . . 2 . . . . . . . . . . . 2 . 
            . . . . 2 . . . . . . . . . 2 . . 
            . . . . 2 . . . . . . . . 2 . . . 
            . . . . . 2 . . . . . 2 2 . . . . 
            . . . . . . 2 . . . 2 . . . . . . 
            . . . . . . . 2 . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . 2 . . . . . . . 
            . . . . . . 2 . . . 2 . . . . . . 
            . . . . 2 2 . . . . . 2 . . . . . 
            . . . 2 . . . . . . . . 2 . . . . 
            . . 2 . . . . . . . . . 2 . . . . 
            . 2 . . . . . . . . . . . 2 . . . 
            2 . . . . . . . . . . . . . 2 . . 
            . . . . . . . . . . . . . . . 2 . 
            `,img`
            . . 2 . . . . . . . . . . . . . . 
            . . . 2 . . . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . 2 
            . . . . 2 . . . . . . . . . . 2 . 
            . . . . . 2 . . . . . . . 2 2 . . 
            . . . . . . 2 . . . . . 2 . . . . 
            . . . . . . 2 . . . 2 2 . . . . . 
            . . . . . . . 2 . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . 2 . . . . . . . 
            . . . . . 2 2 . . . 2 . . . . . . 
            . . . . 2 . . . . . 2 . . . . . . 
            . . 2 2 . . . . . . . 2 . . . . . 
            . 2 . . . . . . . . . . 2 . . . . 
            2 . . . . . . . . . . . 2 . . . . 
            . . . . . . . . . . . . . 2 . . . 
            . . . . . . . . . . . . . . 2 . . 
            `,img`
            . . . 2 . . . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 2 
            . . . . . . 2 . . . . . . . 2 2 . 
            . . . . . . 2 . . . . . . 2 . . . 
            . . . . . . . 2 . . . 2 2 . . . . 
            . . . . . . . 2 . 2 2 . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 . 2 . . . . . . . 
            . . . . 2 2 . . . 2 . . . . . . . 
            . . . 2 . . . . . . 2 . . . . . . 
            . 2 2 . . . . . . . 2 . . . . . . 
            2 . . . . . . . . . . 2 . . . . . 
            . . . . . . . . . . . . 2 . . . . 
            . . . . . . . . . . . . 2 . . . . 
            . . . . . . . . . . . . . 2 . . . 
            `,img`
            . . . . 2 . . . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . 2 
            . . . . . . 2 . . . . . . . 2 2 . 
            . . . . . . . 2 . . . 2 2 2 . . . 
            . . . . . . . 2 . 2 2 . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 . 2 . . . . . . . 
            . . . 2 2 2 . . . 2 . . . . . . . 
            . 2 2 . . . . . . . 2 . . . . . . 
            2 . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . . 2 . . . . . 
            . . . . . . . . . . . 2 . . . . . 
            . . . . . . . . . . . . 2 . . . . 
            `,img`
            . . . . . 2 . . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 2 
            . . . . . . . 2 . . . . . 2 2 2 . 
            . . . . . . . 2 . 2 2 2 2 . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . 2 2 2 2 . 2 . . . . . . . 
            . 2 2 2 . . . . . 2 . . . . . . . 
            2 . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . . 2 . . . . . 
            `,img`
            . . . . . . 2 . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 2 
            . . . . . . . 2 . 2 2 2 2 2 2 2 . 
            . . . . . . . . 2 . . . . . . . . 
            . 2 2 2 2 2 2 2 . 2 . . . . . . . 
            2 . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            `,img`
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            `,img`
            . . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            2 . . . . . . . . 2 . . . . . . . 
            . 2 2 2 2 2 2 2 . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . 2 2 2 2 2 2 2 . 
            . . . . . . . 2 . . . . . . . . 2 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . 2 . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . . 
            2 . . . . . . . . 2 . . . . . . . 
            . 2 2 2 . . . . . 2 . . . . . . . 
            . . . . 2 2 2 2 . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . 2 2 2 2 . . . . 
            . . . . . . . 2 . . . . . 2 2 2 . 
            . . . . . . . 2 . . . . . . . . 2 
            . . . . . . . 2 . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 2 . . . . 
            . . . . . . . . . . . 2 . . . . . 
            . . . . . . . . . . . 2 . . . . . 
            . . . . . . . . . . 2 . . . . . . 
            2 . . . . . . . . . 2 . . . . . . 
            . 2 2 . . . . . . . 2 . . . . . . 
            . . . 2 2 2 . . . 2 . . . . . . . 
            . . . . . . 2 2 . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . 2 2 . . . . . . 
            . . . . . . . 2 . . . 2 2 2 . . . 
            . . . . . . 2 . . . . . . . 2 2 . 
            . . . . . . 2 . . . . . . . . . 2 
            . . . . . . 2 . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 2 . . . 
            . . . . . . . . . . . . 2 . . . . 
            . . . . . . . . . . . . 2 . . . . 
            2 . . . . . . . . . . 2 . . . . . 
            . 2 2 . . . . . . . 2 . . . . . . 
            . . . 2 . . . . . . 2 . . . . . . 
            . . . . 2 2 . . . 2 . . . . . . . 
            . . . . . . 2 2 . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . 2 2 . . . . . . 
            . . . . . . . 2 . . . 2 2 . . . . 
            . . . . . . 2 . . . . . . 2 . . . 
            . . . . . . 2 . . . . . . . 2 2 . 
            . . . . . 2 . . . . . . . . . . 2 
            . . . . 2 . . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . . 
            . . . 2 . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        timer.after(1000, function () {
            controller.moveSprite(DroneTop, 100, 100)
        })
        timerthing += 6
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (directionalaim == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . 2 . . . . . 2 2 . . . . . 2 . 
            . 2 . . . . . 2 2 . . . . . 2 . 
            . 2 . . . . . 2 2 . . . . . 2 . 
            . . 2 . . . . 2 2 . . . . 2 . . 
            . . 2 . . . . 2 2 . . . . 2 . . 
            . . 2 . . . . 2 2 . . . . 2 . . 
            . . . 2 . . . 2 2 . . . 2 . . . 
            . . . 2 . . . 2 2 . . . 2 . . . 
            . . . 2 . . . 2 2 . . . 2 . . . 
            . . . . 2 . . 2 2 . . 2 . . . . 
            . . . . 2 . . 2 2 . . 2 . . . . 
            . . . . 2 . . 2 2 . . 2 . . . . 
            . . . . . 2 . 2 2 . 2 . . . . . 
            . . . . . 2 . 2 2 . 2 . . . . . 
            . . . . . 2 . 2 2 . 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, DroneTop, 0, -90)
        projectile.setScale(1.3, ScaleAnchor.Middle)
    } else if (directionalaim == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . 2 2 . 2 . . . . . 
            . . . . . 2 . 2 2 . 2 . . . . . 
            . . . . . 2 . 2 2 . 2 . . . . . 
            . . . . 2 . . 2 2 . . 2 . . . . 
            . . . . 2 . . 2 2 . . 2 . . . . 
            . . . . 2 . . 2 2 . . 2 . . . . 
            . . . 2 . . . 2 2 . . . 2 . . . 
            . . . 2 . . . 2 2 . . . 2 . . . 
            . . . 2 . . . 2 2 . . . 2 . . . 
            . . 2 . . . . 2 2 . . . . 2 . . 
            . . 2 . . . . 2 2 . . . . 2 . . 
            . . 2 . . . . 2 2 . . . . 2 . . 
            . 2 . . . . . 2 2 . . . . . 2 . 
            . 2 . . . . . 2 2 . . . . . 2 . 
            . 2 . . . . . 2 2 . . . . . 2 . 
            `, DroneTop, 0, 90)
        projectile.setScale(1.3, ScaleAnchor.Middle)
    } else if (directionalaim == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            . . . 2 2 2 . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . . . 2 2 2 . . . . 
            . . . . . . . . . . . . 2 2 2 . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 2 2 2 . 
            . . . . . . . . . 2 2 2 . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . 2 2 2 . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, DroneTop, -90, 0)
        projectile.setScale(1.3, ScaleAnchor.Middle)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 2 2 2 
            . . . . . . . . . . 2 2 2 . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . 2 2 2 . . . . . . . . . 
            . 2 2 2 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . . 
            . 2 2 2 . . . . . . . . . . . . 
            . . . . 2 2 2 . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . 2 2 2 . . . 
            . . . . . . . . . . . . . 2 2 2 
            . . . . . . . . . . . . . . . . 
            `, DroneTop, 90, 0)
        projectile.setScale(1.3, ScaleAnchor.Middle)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    directionalaim = 2
    DroneTop.setImage(img`
        . . . . . . . . . . . . . . . . 
        . b b b b d . . . . b b b b d . 
        b b b b d d d . . b b b b d d d 
        b b b d b b b . . b b b d b b b 
        d d d b b b b . . d d d b b b b 
        . d b b b b c c c c d b b b b . 
        . . b b b c c c c c c b b b c . 
        . . c c c c c c c c c c 9 7 c . 
        . . c c c c c c c c c c 7 6 c . 
        . . b b b c c c c c c b b b c . 
        . b b b b d c c c c b b b b d . 
        b b b b d d d . . b b b b d d d 
        b b b d b b b . . b b b d b b b 
        d d d b b b b . . d d d b b b b 
        . d b b b b . . . . d b b b b . 
        . . b b b . . . . . . b b b . . 
        `)
    animation.runImageAnimation(
    DroneTop,
    [img`
        . . b b b . . . . . . b b b . . 
        . b b b b d . . . . b b b b d . 
        b b b b d d d . . b b b b d d d 
        b b b d b b b . . b b b d b b b 
        d d d b b b b . . d d d b b b b 
        . d b b b b c c c c d b b b b . 
        . . b b b c c c c c c b b b c . 
        . . c c c c c c c c c c 9 7 c . 
        . . c c c c c c c c c c 7 6 c . 
        . . b b b c c c c c c b b b c . 
        . b b b b d c c c c b b b b d . 
        b b b b d d d . . b b b b d d d 
        b b b d b b b . . b b b d b b b 
        d d d b b b b . . d d d b b b b 
        . d b b b b . . . . d b b b b . 
        . . b b b . . . . . . b b b . . 
        `,img`
        . . b b b . . . . . . b b b . . 
        . b b b b b . . . . b b b b b . 
        d d d b b b b . . d d d b b b b 
        b b d d d b b . . b b d d d b b 
        b b b b d d d . . b b b b d d d 
        . b b b b b c c c c b b b b b . 
        . . b b b c c c c c c b b b c . 
        . . c c c c c c c c c c 9 7 c . 
        . . c c c c c c c c c c 7 6 c . 
        . . b b b c c c c c c b b b c . 
        . b b b b b c c c c b b b b b . 
        d d d b b b b . . d d d b b b b 
        b b d d d b b . . b b d d d b b 
        b b b b d d d . . b b b b d d d 
        . b b b b b . . . . b b b b b . 
        . . b b b . . . . . . b b b . . 
        `,img`
        . . b b b . . . . . . b b b . . 
        . d b b b b . . . . d b b b b . 
        d d d b b b b . . d d d b b b b 
        b b b d b b b . . b b b d b b b 
        b b b b d d d . . b b b b d d d 
        . b b b b d c c c c b b b b d . 
        . . b b b c c c c c c b b b c . 
        . . c c c c c c c c c c 9 7 c . 
        . . c c c c c c c c c c 7 6 c . 
        . . b b b c c c c c c b b b c . 
        . d b b b b c c c c d b b b b . 
        d d d b b b b . . d d d b b b b 
        b b b d b b b . . b b b d b b b 
        b b b b d d d . . b b b b d d d 
        . b b b b d . . . . b b b b d . 
        . . b b b . . . . . . b b b . . 
        `,img`
        . . d b b . . . . . . d b b . . 
        . b d b b b . . . . b d b b b . 
        b b d d b b b . . b b d d b b b 
        b b b d b b b . . b b b d b b b 
        b b b d d b b . . b b b d d b b 
        . b b b d b c c c c b b b d b . 
        . . b b d c c c c c c b b d c . 
        . . c c c c c c c c c c 9 7 c . 
        . . c c c c c c c c c c 7 6 c . 
        . . d b b c c c c c c d b b c . 
        . b d b b b c c c c b d b b b . 
        b b d d b b b . . b b d d b b b 
        b b b d b b b . . b b b d b b b 
        b b b d d b b . . b b b d d b b 
        . b b b d b . . . . b b b d b . 
        . . b b d . . . . . . b b d . . 
        `,img`
        . . b b d . . . . . . b b d . . 
        . b b b d b . . . . b b b d b . 
        b b b d d b b . . b b b d d b b 
        b b b d b b b . . b b b d b b b 
        b b d d b b b . . b b d d b b b 
        . b d b b b c c c c b d b b b . 
        . . d b b c c c c c c d b b c . 
        . . c c c c c c c c c c 9 7 c . 
        . . c c c c c c c c c c 7 6 c . 
        . . b b d c c c c c c b b d c . 
        . b b b d b c c c c b b b d b . 
        b b b d d b b . . b b b d d b b 
        b b b d b b b . . b b b d b b b 
        b b d d b b b . . b b d d b b b 
        . b d b b b . . . . b d b b b . 
        . . d b b . . . . . . d b b . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    directionalaim = 3
    DroneTop.setImage(img`
        . . b b b . . . . . . b b b . . 
        . b b b b d . . . . b b b b d . 
        b b b b d d d . . b b b b d d d 
        b b b d b b b . . b b b d b b b 
        d d d b b b b . . d d d b b b b 
        . d b b b b c c c c d b b b b . 
        . c b b b c c c c c c b b b . . 
        . c 6 7 c c c c c c c c c c . . 
        . c 7 9 c c c c c c c c c c . . 
        . c b b b c c c c c c b b b . . 
        . b b b b d c c c c b b b b d . 
        b b b b d d d . . b b b b d d d 
        b b b d b b b . . b b b d b b b 
        d d d b b b b . . d d d b b b b 
        . d b b b b . . . . d b b b b . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.runImageAnimation(
    DroneTop,
    [img`
        . . b b b . . . . . . b b b . . 
        . b b b b d . . . . b b b b d . 
        b b b b d d d . . b b b b d d d 
        b b b d b b b . . b b b d b b b 
        d d d b b b b . . d d d b b b b 
        . d b b b b c c c c d b b b b . 
        . c b b b c c c c c c b b b . . 
        . c 6 7 c c c c c c c c c c . . 
        . c 7 9 c c c c c c c c c c . . 
        . c b b b c c c c c c b b b . . 
        . b b b b d c c c c b b b b d . 
        b b b b d d d . . b b b b d d d 
        b b b d b b b . . b b b d b b b 
        d d d b b b b . . d d d b b b b 
        . d b b b b . . . . d b b b b . 
        . . b b b . . . . . . b b b . . 
        `,img`
        . . b b b . . . . . . b b b . . 
        . b b b b b . . . . b b b b b . 
        d d d b b b b . . d d d b b b b 
        b b d d d b b . . b b d d d b b 
        b b b b d d d . . b b b b d d d 
        . b b b b b c c c c b b b b b . 
        . c b b b c c c c c c b b b . . 
        . c 6 7 c c c c c c c c c c . . 
        . c 7 9 c c c c c c c c c c . . 
        . c b b b c c c c c c b b b . . 
        . b b b b b c c c c b b b b b . 
        d d d b b b b . . d d d b b b b 
        b b d d d b b . . b b d d d b b 
        b b b b d d d . . b b b b d d d 
        . b b b b b . . . . b b b b b . 
        . . b b b . . . . . . b b b . . 
        `,img`
        . . b b b . . . . . . b b b . . 
        . d b b b b . . . . d b b b b . 
        d d d b b b b . . d d d b b b b 
        b b b d b b b . . b b b d b b b 
        b b b b d d d . . b b b b d d d 
        . b b b b d c c c c b b b b d . 
        . c b b b c c c c c c b b b . . 
        . c 6 7 c c c c c c c c c c . . 
        . c 7 9 c c c c c c c c c c . . 
        . c b b b c c c c c c b b b . . 
        . d b b b b c c c c d b b b b . 
        d d d b b b b . . d d d b b b b 
        b b b d b b b . . b b b d b b b 
        b b b b d d d . . b b b b d d d 
        . b b b b d . . . . b b b b d . 
        . . b b b . . . . . . b b b . . 
        `,img`
        . . d b b . . . . . . d b b . . 
        . b d b b b . . . . b d b b b . 
        b b d d b b b . . b b d d b b b 
        b b b d b b b . . b b b d b b b 
        b b b d d b b . . b b b d d b b 
        . b b b d b c c c c b b b d b . 
        . c b b d c c c c c c b b d . . 
        . c 6 7 c c c c c c c c c c . . 
        . c 7 9 c c c c c c c c c c . . 
        . c d b b c c c c c c d b b . . 
        . b d b b b c c c c b d b b b . 
        b b d d b b b . . b b d d b b b 
        b b b d b b b . . b b b d b b b 
        b b b d d b b . . b b b d d b b 
        . b b b d b . . . . b b b d b . 
        . . b b d . . . . . . b b d . . 
        `,img`
        . . b b d . . . . . . b b d . . 
        . b b b d b . . . . b b b d b . 
        b b b d d b b . . b b b d d b b 
        b b b d b b b . . b b b d b b b 
        b b d d b b b . . b b d d b b b 
        . b d b b b c c c c b d b b b . 
        . c d b b c c c c c c d b b . . 
        . c 6 7 c c c c c c c c c c . . 
        . c 7 9 c c c c c c c c c c . . 
        . c b b d c c c c c c b b d . . 
        . b b b d b c c c c b b b d b . 
        b b b d d b b . . b b b d d b b 
        b b b d b b b . . b b b d b b b 
        b b d d b b b . . b b d d b b b 
        . b d b b b . . . . b d b b b . 
        . . d b b . . . . . . d b b . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile0`, function (sprite, location) {
    one_time += 1
    tiles.setTileAt(location, Groundtile._pickRandom())
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    directionalaim = 1
    DroneTop.setImage(img`
        . . d b b . . . . . . d b b . . 
        . d d b b b c c c c d d b b b . 
        . b d b b b b 7 6 b b d b b b b 
        . b b d b b b 9 7 b b b d b b b 
        . b b b d b b c c b b b b d b b 
        . b b b d d c c c c b b b d d . 
        . . b b d c c c c c c b b d . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . d b b c c c c c c d b b . . 
        . d d b b b c c c c d d b b b . 
        . b d b b b b c c b b d b b b b 
        . b b d b b b c c b b b d b b b 
        . b b b d b b c c b b b b d b b 
        . b b b d d . . . . b b b d d . 
        . . b b d . . . . . . b b d . . 
        `)
    animation.runImageAnimation(
    DroneTop,
    [img`
        . . d b b . . . . . . d b b . . 
        . d d b b b c c c c d d b b b . 
        b b d b b b b 7 6 b b d b b b b 
        b b b d b b b 9 7 b b b d b b b 
        b b b b d b b c c b b b b d b b 
        . b b b d d c c c c b b b d d . 
        . . b b d c c c c c c b b d . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . d b b c c c c c c d b b . . 
        . d d b b b c c c c d d b b b . 
        b b d b b b b c c b b d b b b b 
        b b b d b b b c c b b b d b b b 
        b b b b d b b c c b b b b d b b 
        . b b b d d . . . . b b b d d . 
        . . b b d . . . . . . b b d . . 
        `,img`
        . . b b d . . . . . . b b d . . 
        . b b b d b c c c c b b b d b . 
        b b b d d b b 7 6 b b b d d b b 
        b b b d b b b 9 7 b b b d b b b 
        b b d d b b b c c b b d d b b b 
        . b d b b b c c c c b d b b b . 
        . . d b b c c c c c c d b b . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . b b d c c c c c c b b d . . 
        . b b b d b c c c c b b b d b . 
        b b b d d b b c c b b b d d b b 
        b b b d b b b c c b b b d b b b 
        b b d d b b b c c b b d d b b b 
        . b d b b b . . . . b d b b b . 
        . . d b b . . . . . . d b b . . 
        `,img`
        . . b b d . . . . . . b b d . . 
        . b b b d d c c c c b b b d d . 
        b b b b d b b 7 6 b b b b d b b 
        b b b d b b b 9 7 b b b d b b b 
        b b d b b b b c c b b d b b b b 
        . d d b b b c c c c d d b b b . 
        . . d b b c c c c c c d b b . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . b b d c c c c c c b b d . . 
        . b b b d d c c c c b b b d d . 
        b b b b d b b c c b b b b d b b 
        b b b d b b b c c b b b d b b b 
        b b d b b b b c c b b d b b b b 
        . d d b b b . . . . d d b b b . 
        . . d b b . . . . . . d b b . . 
        `,img`
        . . b b b . . . . . . b b b . . 
        . b b b b b c c c c b b b b b . 
        b b b b d d d 7 6 b b b b d d d 
        b b d d d b b 9 7 b b d d d b b 
        d d d b b b b c c d d d b b b b 
        . b b b b b c c c c b b b b b . 
        . . b b b c c c c c c b b b . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . b b b c c c c c c b b b . . 
        . b b b b b c c c c b b b b b . 
        b b b b d d d c c b b b b d d d 
        b b d d d b b c c b b d d d b b 
        d d d b b b b c c d d d b b b b 
        . b b b b b . . . . b b b b b . 
        . . b b b . . . . . . b b b . . 
        `,img`
        . . b b b . . . . . . b b b . . 
        . b b b b b c c c c b b b b b . 
        d d d b b b b 7 6 d d d b b b b 
        b b d d d b b 9 7 b b d d d b b 
        b b b b d d d c c b b b b d d d 
        . b b b b b c c c c b b b b b . 
        . . b b b c c c c c c b b b . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c c c c c . . . . . 
        . . b b b c c c c c c b b b . . 
        . b b b b b c c c c b b b b b . 
        d d d b b b b c c d d d b b b b 
        b b d d d b b c c b b d d d b b 
        b b b b d d d c c b b b b d d d 
        . b b b b b . . . . b b b b b . 
        . . b b b . . . . . . b b b . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.fire, 500)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile13`)
})
function cooldown () {
    if (timerthing > 0) {
        pause(1000)
        timerthing += -1
    } else {
        timerthing = 0
    }
}
let one_time = 0
let projectile: Sprite = null
let idkwhy: Sprite = null
let timerthing = 0
let directionalaim = 0
let Light: Sprite = null
let Groundtile: Image[] = []
let DroneTop: Sprite = null
game.showLongText("Press A/Spacebar to fire directionally, press X to fire in a 360 field (6 second cooldown), use the WASD keys to change directions and move, the map is intentionally dark, you need to use lidar to map it out so you can see where your going.", DialogLayout.Bottom)
game.showLongText("Also you need to collect all the data drives (shining lights) to win the game, there's 31, so if you can't find anymore, look again", DialogLayout.Bottom)
game.showLongText("And finally, the last bit of info I have to give is that the orange tiles are walls.", DialogLayout.Bottom)
Render.setViewMode(ViewMode.tilemapView)
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
DroneTop = sprites.create(img`
    . . d b b . . . . . . d b b . . 
    . d d b b b . . . . d d b b b . 
    b b d b b b b c c b b d b b b b 
    b b b d b b b c c b b b d b b b 
    b b b b d b b c c b b b b d b b 
    . b b b d d c c c c b b b d d . 
    . . b b d c c c c c c b b d . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . d b b c c c c c c d b b . . 
    . d d b b b c c c c d d b b b . 
    b b d b b b b c c b b d b b b b 
    b b b d b b b 7 9 b b b d b b b 
    b b b b d b b 6 7 b b b b d b b 
    . b b b d d c c c c b b b d d . 
    . . b b d . . . . . . b b d . . 
    `, SpriteKind.Player)
tiles.placeOnTile(DroneTop, tiles.getTileLocation(7, 95))
scene.cameraFollowSprite(DroneTop)
DroneTop.setStayInScreen(true)
controller.moveSprite(DroneTop)
animation.runImageAnimation(
DroneTop,
[img`
    . . d b b . . . . . . d b b . . 
    . d d b b b . . . . d d b b b . 
    b b d b b b b c c b b d b b b b 
    b b b d b b b c c b b b d b b b 
    b b b b d b b c c b b b b d b b 
    . b b b d d c c c c b b b d d . 
    . . b b d c c c c c c b b d . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . d b b c c c c c c d b b . . 
    . d d b b b c c c c d d b b b . 
    b b d b b b b c c b b d b b b b 
    b b b d b b b 7 9 b b b d b b b 
    b b b b d b b 6 7 b b b b d b b 
    . b b b d d c c c c b b b d d . 
    . . b b d . . . . . . b b d . . 
    `,img`
    . . b b d . . . . . . b b d . . 
    . b b b d b . . . . b b b d b . 
    b b b d d b b c c b b b d d b b 
    b b b d b b b c c b b b d b b b 
    b b d d b b b c c b b d d b b b 
    . b d b b b c c c c b d b b b . 
    . . d b b c c c c c c d b b . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . b b d c c c c c c b b d . . 
    . b b b d b c c c c b b b d b . 
    b b b d d b b c c b b b d d b b 
    b b b d b b b 7 9 b b b d b b b 
    b b d d b b b 6 7 b b d d b b b 
    . b d b b b c c c c b d b b b . 
    . . d b b . . . . . . d b b . . 
    `,img`
    . . b b d . . . . . . b b d . . 
    . b b b d d . . . . b b b d d . 
    b b b b d b b c c b b b b d b b 
    b b b d b b b c c b b b d b b b 
    b b d b b b b c c b b d b b b b 
    . d d b b b c c c c d d b b b . 
    . . d b b c c c c c c d b b . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . b b d c c c c c c b b d . . 
    . b b b d d c c c c b b b d d . 
    b b b b d b b c c b b b b d b b 
    b b b d b b b 7 9 b b b d b b b 
    b b d b b b b 6 7 b b d b b b b 
    . d d b b b c c c c d d b b b . 
    . . d b b . . . . . . d b b . . 
    `,img`
    . . b b b . . . . . . b b b . . 
    . b b b b b . . . . b b b b b . 
    b b b b d d d c c b b b b d d d 
    b b d d d b b c c b b d d d b b 
    d d d b b b b c c d d d b b b b 
    . b b b b b c c c c b b b b b . 
    . . b b b c c c c c c b b b . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . b b b c c c c c c b b b . . 
    . b b b b b c c c c b b b b b . 
    b b b b d d d c c b b b b d d d 
    b b d d d b b 7 9 b b d d d b b 
    d d d b b b b 6 7 d d d b b b b 
    . b b b b b c c c c b b b b b . 
    . . b b b . . . . . . b b b . . 
    `,img`
    . . b b b . . . . . . b b b . . 
    . b b b b b . . . . b b b b b . 
    d d d b b b b c c d d d b b b b 
    b b d d d b b c c b b d d d b b 
    b b b b d d d c c b b b b d d d 
    . b b b b b c c c c b b b b b . 
    . . b b b c c c c c c b b b . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . b b b c c c c c c b b b . . 
    . b b b b b c c c c b b b b b . 
    d d d b b b b c c d d d b b b b 
    b b d d d b b 7 9 b b d d d b b 
    b b b b d d d 6 7 b b b b d d d 
    . b b b b b c c c c b b b b b . 
    . . b b b . . . . . . b b b . . 
    `],
100,
true
)
Groundtile = [
assets.tile`myTile3`,
assets.tile`myTile9`,
assets.tile`myTile10`,
assets.tile`myTile11`,
assets.tile`myTile12`,
assets.tile`myTile15`
]
for (let value of tiles.getTilesByType(assets.tile`myTile29`)) {
    Light = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . 6 7 5 7 6 . . . . . . 
        . . . . . 7 5 5 5 7 . . . . . . 
        . . . . . 6 7 5 7 6 . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    Light,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . 6 7 5 7 6 . . . . . . 
        . . . . . 7 5 5 5 7 . . . . . . 
        . . . . . 6 7 5 7 6 . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 7 7 7 6 . . . . . . 
        . . . . 6 7 5 5 5 7 6 . . . . . 
        . . . . 7 5 5 1 5 5 7 . . . . . 
        . . . . 7 5 1 1 1 5 7 . . . . . 
        . . . . 7 5 5 1 5 5 7 . . . . . 
        . . . . 6 7 5 5 5 7 6 . . . . . 
        . . . . . 6 7 7 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    tiles.placeOnTile(Light, value)
    tiles.setTileAt(value, assets.tile`myTile0`)
}
forever(function () {
    if (info.score() >= 31) {
        game.setGameOverEffect(true, effects.blizzard)
        game.gameOver(true)
    }
})
forever(function () {
    cooldown()
})
