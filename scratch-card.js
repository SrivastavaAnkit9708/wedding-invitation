/* ==========================================
   Scratch Card V3
   Module for Wedding Invitation
   Version : 3.0
   Author  : Ankit + ChatGPT
========================================== */
console.log("Scratch Card V3 Loaded ✅");
/* ===============================
   Scratch Card V3
=============================== */

const scratchCanvas = document.getElementById("scratchCanvas");
const scratchCard = document.getElementById("scratchCard");

console.log(scratchCanvas);
console.log(scratchCard);
/* ===============================
   Canvas Setup
=============================== */

const scratchCtx = scratchCanvas.getContext("2d", {
    willReadFrequently: true
});

/* ===============================
   Scratch Variables
=============================== */

let isDrawing = false;

let lastPoint = null;

let isRevealed = false;

function resizeScratchCanvas() {

    const rect = scratchCard.getBoundingClientRect();

    scratchCanvas.width = rect.width;
    scratchCanvas.height = rect.height;

    console.log(
        "Canvas Size:",
        scratchCanvas.width,
        scratchCanvas.height
    );

drawGoldLayer();

}
/* ===============================
   Draw Gold Layer
=============================== */

function drawGoldLayer() {

    scratchCtx.clearRect(
        0,
        0,
        scratchCanvas.width,
        scratchCanvas.height
    );

    const gradient = scratchCtx.createLinearGradient(
        0,
        0,
        scratchCanvas.width,
        scratchCanvas.height
    );

    gradient.addColorStop(0, "#c99a16");
gradient.addColorStop(0.5, "#f6d86b");
gradient.addColorStop(1, "#d4af37");

    scratchCtx.fillStyle = gradient;

    scratchCtx.fillRect(
        0,
        0,
        scratchCanvas.width,
        scratchCanvas.height
    );
    drawShine();

drawFoilTexture();

 drawScratchText();
}

/* ===============================
   Draw Scratch Text
=============================== */

function drawScratchText() {

    scratchCtx.fillStyle = "#ffffff";

    scratchCtx.font = "700 42px Cinzel";

    scratchCtx.textAlign = "center";

    scratchCtx.textBaseline = "middle";

    scratchCtx.fillText(
        "✨ Scratch Here ✨",
        scratchCanvas.width / 2,
        scratchCanvas.height / 2
    );

}

/* ===============================
   Draw Shine Effect
=============================== */

function drawShine() {

    const shine = scratchCtx.createLinearGradient(
        0,
        0,
        scratchCanvas.width,
        scratchCanvas.height
    );

    shine.addColorStop(0.42, "rgba(255,255,255,0)");
shine.addColorStop(0.50, "rgba(255,255,255,.18)");
shine.addColorStop(0.58, "rgba(255,255,255,0)");

    scratchCtx.fillStyle = shine;

    scratchCtx.fillRect(
        0,
        0,
        scratchCanvas.width,
        scratchCanvas.height
    );

}

function drawFoilTexture() {

    scratchCtx.save();

    scratchCtx.globalAlpha = 0.08;
    scratchCtx.strokeStyle = "#ffffff";
    scratchCtx.lineWidth = 1;

    for (let i = -scratchCanvas.height; i < scratchCanvas.width; i += 8) {

        scratchCtx.beginPath();

        scratchCtx.moveTo(i, 0);
        scratchCtx.lineTo(i + scratchCanvas.height, scratchCanvas.height);

        scratchCtx.stroke();
    }

    // Fine metallic speckles

scratchCtx.globalAlpha = 0.035;
scratchCtx.fillStyle = "#fff8dc";

for (let i = 0; i < 300; i++) {
    scratchCtx.fillRect(
        Math.random() * scratchCanvas.width,
        Math.random() * scratchCanvas.height,
        1,
        1
    );
}
    scratchCtx.restore();

}

/* ===============================
   Scratch Function
=============================== */

function scratch(x, y) {

    scratchCtx.globalCompositeOperation = "destination-out";

    scratchCtx.lineJoin = "round";
    scratchCtx.lineCap = "round";
    scratchCtx.lineWidth = 50;

    if (!lastPoint) {
        lastPoint = { x, y };
    }

    scratchCtx.beginPath();

    scratchCtx.moveTo(
        lastPoint.x,
        lastPoint.y
    );

    scratchCtx.lineTo(
        x,
        y
    );

    scratchCtx.stroke();

    scratchCtx.beginPath();

    scratchCtx.arc(
        x,
        y,
        25,
        0,
        Math.PI * 2
    );

    scratchCtx.fill();

    lastPoint = { x, y };

}
/* ===============================
   Sparkle Burst
=============================== */

function createSparkles() {

    const container = document.getElementById("sparkles");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {

        const s = document.createElement("span");

        s.className = "sparkle";

        s.style.left = (40 + Math.random() * 20) + "%";
        s.style.top = (40 + Math.random() * 20) + "%";

        s.style.setProperty(
            "--x",
            (Math.random() * 240 - 120) + "px"
        );

        s.style.setProperty(
            "--y",
            (Math.random() * 200 - 100) + "px"
        );

        container.appendChild(s);

    }

    setTimeout(() => {

        container.innerHTML = "";

    }, 1200);

}
/* ===============================
   Reveal Detection
=============================== */

function checkReveal() {

    if (isRevealed) return;

    const pixels = scratchCtx.getImageData(
        0,
        0,
        scratchCanvas.width,
        scratchCanvas.height
    ).data;

    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {

        if (pixels[i] === 0) {
            transparentPixels++;
        }

    }

    const scratchedPercent =
        transparentPixels /
        (scratchCanvas.width * scratchCanvas.height);

    console.log(
        "Scratched:",
        Math.round(scratchedPercent * 100) + "%"
    );
if (scratchedPercent > 0.55) {

    isRevealed = true;

    console.log("Reveal Started ✅");

console.log("Creating Sparkles...");

createSparkles();

    // Show Date
    const revealContent = document.getElementById("revealContent");

    if (revealContent) {
        revealContent.style.opacity = "1";
    }

    // Fade Canvas
    scratchCanvas.style.transition = "opacity .6s ease";

    scratchCanvas.style.opacity = "0";

// Remove Canvas

    setTimeout(() => {

    scratchCanvas.style.display = "none";

}, 600);

}

}


/* ===============================
   Mouse Position
=============================== */

function getPosition(e) {

    const rect = scratchCanvas.getBoundingClientRect();

    return {

        x: e.clientX - rect.left,
        y: e.clientY - rect.top

    };

}

/* ===============================
   Mouse Events
=============================== */

scratchCanvas.addEventListener("mousedown", () => {

    isDrawing = true;

});

window.addEventListener("mouseup", () => {

    isDrawing = false;

    lastPoint = null;

    checkReveal();

});

scratchCanvas.addEventListener("mousemove", (e) => {

    if (!isDrawing) return;

    const pos = getPosition(e);

    scratch(pos.x, pos.y);

});
resizeScratchCanvas();

window.addEventListener("resize", resizeScratchCanvas);

/* ===============================
   Touch Events
=============================== */

scratchCanvas.addEventListener("touchstart", (e) => {

    isDrawing = true;

    const touch = e.touches[0];

    const pos = {
        x: touch.clientX - scratchCanvas.getBoundingClientRect().left,
        y: touch.clientY - scratchCanvas.getBoundingClientRect().top
    };

    scratch(pos.x, pos.y);

});

scratchCanvas.addEventListener("touchmove", (e) => {

    e.preventDefault();

    if (!isDrawing) return;

    const touch = e.touches[0];

    const pos = {
        x: touch.clientX - scratchCanvas.getBoundingClientRect().left,
        y: touch.clientY - scratchCanvas.getBoundingClientRect().top
    };

    scratch(pos.x, pos.y);

}, { passive: false });

window.addEventListener("touchend", () => {

    isDrawing = false;

    lastPoint = null;

    checkReveal();

});