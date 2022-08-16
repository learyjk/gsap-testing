gsap.registerPlugin(Flip);
let thumb = document.querySelector(".thumb-wrap");
let main = document.querySelector(".main-wrap");
let stage = document.querySelector(".stage-wrap");
let state = Flip.getState([
    thumb,
    main,
    stage
]);
setInterval(()=>{
    let stageImg = stage.querySelector("img");
    thumb.append(stageImg);
    let thumbImg = thumb.querySelector("img");
    main.append(thumbImg);
    let mainImg = main.querySelector(":scope > img");
    stage.append(mainImg);
    Flip.from(state, {
        duration: 1
    });
}, 2000);

//# sourceMappingURL=index.c36f364e.js.map
