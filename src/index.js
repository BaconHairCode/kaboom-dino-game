import kaboom from "kaboom"

kaboom({
    background: [0, 0, 0],
})

scene("game", () => {

    add([
        pos(0, height()/2),
        rect(width(), height()),
        outline(3),
        area(),
        solid()
    ])

    const dino = add([
        pos(100, 405),
        rect(70, 70),
        color(0, 0, 255),
        area(),
        body(),
    ])

    add([
        pos(500, 100),
        rect(70,70),
        color(400, 0, 0),
        area(),
        body(),
        "obs"
    ])


    keyPress("space", () => {
        if (dino.pos.y > 400) {
            dino.jump(700)
        }
        console.log(dino.pos.y)
    })

    action("obs", (obs) => {
        obs.move(-160, 0)
    })

    dino.collides("obs", () => {
        go("gameover")
    })
})

scene("gameover", () => {
    add([
        text("GAME OVER!")
    ])

    onKeyPress("space", () => {
        go("game")
    })
})

go("game")
