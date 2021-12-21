function addObs() {

    loop(1.7, () => {
        add([
            pos(width(), 320),
            sprite("obstacle", { anim: "a" }),
            area(),
            body(),
            "Object",
            { passed: false }
        ])
    })
}

module.exports = addObs