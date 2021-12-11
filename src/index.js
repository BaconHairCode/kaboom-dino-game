import kaboom from "kaboom"

kaboom({
    background: [60, 60, 60],
})

scene("gameover", () => {
    add([
        text("Game Over")
    ])

    onKeyPress("space", () => {
        go("game")
    })
})

scene("game", () => {

    const dino = add([
        pos(100, 100),
        rect(70, 70),
        color(0, 0, 255),
        area(),
        body(),
    ])

    add([
        pos(500, 100),
        rect(70,70),
        color(255, 0, 0),
        area(),
        body(),
        "Object"
    ])

    add([
        pos(0, height()/2),
        rect(width(), height()),
        area(),
        solid(),
        "ground"
    ])

    keyPress("space", () => {
        if (dino.pos.y > 400) {
            dino.jump(700)
        }
    })

    action("Object", (Object) => {
        Object.move(-150, 0)
    })

    dino.collides("Object", () => {
        go("gameover")
    })
})

go("game")
