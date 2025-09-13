const canvas     = document.createElement('canvas'),
      ctx        = canvas.getContext('2d'),
      particles  = [];

let   w          = canvas.width = innerWidth,
      h          = canvas.height = innerHeight,
      properties = {
        bgColor: '#fff',
        particleColor: '#000',
        particleRadius: 4,
        particleCount: particleCounter(),
        particleMaxVelocity: 1,
        lineLength: 120,
        particleLife: 600
      };


document.body.appendChild(canvas);

window.addEventListener('resize', () => {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
});

function particleCounter() {
    if (w < 500) return 20;
    if (w < 800) return 40;
    if (w < 1280) return 80;
    else return 100;
}

class Particle {
    constructor() {
        this.init();
    }

    init() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.life = Math.random() * properties.particleLife * 60;
    }

    position() {
        if (this.x + this.velocityX > w || this.x + this.velocityX < 0) this.velocityX *= -1;
        if (this.y + this.velocityY > h || this.y + this.velocityY < 0) this.velocityY *= -1;
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    reDraw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = properties.particleColor;
        ctx.fill();
    }

    reCalculateLife() {
        if (this.life < 1) {
            this.init();
        }
        this.life--;
    }
}

function reDrawBackground() {
    ctx.fillStyle = properties.bgColor;
    ctx.fillRect(0, 0, w, h);
}

function drawLines() {
    particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
            const x1 = particle.x;
            const y1 = particle.y;
            const x2 = particles[j].x;
            const y2 = particles[j].y;
            const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            if (length < properties.lineLength) {
                const opacity = 1 - length / properties.lineLength;
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = properties.particleColor;
                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.closePath();
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    });
}

function reDrawParticles() {
    particles.forEach(particle => {
        particle.reCalculateLife();
        particle.position();
        particle.reDraw();
    });
}

function loop() {
    reDrawBackground();
    reDrawParticles();
    drawLines();
    requestAnimationFrame(loop);
}

function init() {
    for (let i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle());
    }
    loop();
}

init();