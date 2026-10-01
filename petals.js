/* =====================================
   Falling Rose Petals V1.0
===================================== */

const petalImages = [

    "images/petals/petal1.png",
    "images/petals/petal2.png",
    "images/petals/petal3.png",
    "images/petals/petal4.png",
    "images/petals/petal5.png",
    "images/petals/petal6.png",
    "images/petals/petal7.png",
    "images/petals/petal8.png",
    "images/petals/petal9.png",
    "images/petals/petal10.png",
    "images/petals/petal11.png",
    "images/petals/petal12.png"

];

const petalsContainer = document.querySelector(".petals-container");

if (petalsContainer) {

    const PETAL_COUNT = 10;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createPetal() {

        const petal = document.createElement("img");

        petal.className = "petal";

        petal.src =
            petalImages[Math.floor(Math.random() * petalImages.length)];

        petalsContainer.appendChild(petal);

        function drop() {

            petal.src =
                petalImages[Math.floor(Math.random() * petalImages.length)];

            petal.style.left = random(0, 100) + "vw";
            petal.style.top = "-80px";
            petal.style.width = random(24, 52) + "px";

            petal.animate(
               [
    {
        transform: `translateX(0px) translateY(0px) rotate(0deg)`,
        offset: 0
    },
    {
        transform: `translateX(${random(-40,40)}px) translateY(25vh) rotate(${random(80,180)}deg)`,
        offset: 0.25
    },
    {
        transform: `translateX(${random(-80,80)}px) translateY(50vh) rotate(${random(180,360)}deg)`,
        offset: 0.5
    },
    {
        transform: `translateX(${random(-40,40)}px) translateY(75vh) rotate(${random(360,540)}deg)`,
        offset: 0.75
    },
    {
        transform: `translateX(${random(-120,120)}px) translateY(calc(100vh + 150px)) rotate(${random(540,900)}deg)`,
        offset: 1
    }
],
                {
                    duration: random(7000, 15000),
                    easing: "linear",
                    fill: "forwards",
                    iterations: 1,
                }
            ).onfinish = drop;

        }

        drop();

    }

    for (let i = 0; i < PETAL_COUNT; i++) {

        createPetal();

    }

}