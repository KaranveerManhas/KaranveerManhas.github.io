particlesJS("particles", {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: ["#6746ff", "#ffffff", "#782aed"]
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: "#782aed"
            },
            polygon: {
                nb_sides: 6
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 1,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 1,
                sync: true
            }
        },
        size: {
            value: 30,
            random: true
        },
        line_linked: {
            enable: false,
            distance: 200,
            color: {
                value: ["#6746ff", "#ffffff", "#782aed"]
            },
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 10,
            direction: "top-left",
            random: false,
            straight: false,
            out_mode: "out",
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "remove"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 0,
                line_linked: {
                    opacity: 0
                }
            },
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 1
            }
        }
    },
    retina_detect: true
});


const switchModes = document.querySelector(".switch-modes");
const body = document.getElementsByTagName("body")[0];
const whites = document.querySelectorAll(".white");
const logo = document.getElementById('logo');
const scrollTopButton = document.querySelector('.scroll-top');
const navBarLinks = document.querySelectorAll('.nav-link');
const dripContainer = document.querySelector('.drip-wrapper');
const contactCard = document.querySelector('.contact-card');
let isNightMode = true;

for (navLink of navBarLinks) {
    navLink.addEventListener('mouseover', function(){
        if (isNightMode) {
            this.style.borderColor = "#fff";
        }else {
            this.style.borderColor = "#000";
        }
    })
}

for (navLink of navBarLinks) {
    navLink.addEventListener('mouseout', function(){
        this.style.borderColor = "transparent";  
    })
}

function changeSwitchBorder(switchButton) {
    if (isNightMode) {
        switchButton.style.border = "2px solid #fff";
    }else {
        switchButton.style.border = "2px solid #000";
    }
    // switchModes.addEventListener('mouseout', function() {
    //     switchModeButtonCircle.style.borderColor = "transparent";
    // });
}

function removeBorder(switchButton) {
    switchButton.style.border = "2px solid transparent";
}

switchModes.addEventListener("click", function() {
    if (isNightMode) {
        for (white of whites) {
            white.classList.replace("white", "black");
        }
        switchModes.innerHTML = `
        <div class="circle"></div>
        <i class='bx bx-sun black'></i>`;
        body.style.backgroundColor = "#fff";
        body.style.cursor = `url("./assets/cursor_black.png"), auto`;
        logo.src = "assets/logo_black.png";
        scrollTopButton.style.borderColor = "#000";
        scrollTopButton.children[0].style.color = "#000";
        contactCard.style.background = "lightgrey";
        isNightMode = !isNightMode;
        }
    else{
        for (white of whites) {
            white.classList.replace("black", "white");
        }
        switchModes.innerHTML = `
        <div class="circle"></div>
        <i class='bx bx-moon white'></i>`;
        body.style.backgroundColor = "rgb(24, 6, 27)";
        body.style.cursor = `url("./assets/cursor_white.png"), auto`;
        logo.src = "assets/logo_white.png";
        scrollTopButton.style.borderColor = "#fff";
        scrollTopButton.children[0].style.color = "#fff";
        contactCard.style.background = "#242424";
        isNightMode = !isNightMode;
    }
});


function scrollToTop() {
    window.scrollTo ({
        top:0
    });
}

window.addEventListener('scroll', function() {
    if (window.scrollY >= 300) {
        scrollTopButton.style.display = 'block';
    }else {
        scrollTopButton.style.display = 'none';
    }
})

function showCaption(logoContainer) {
    logoContainer.children[1].style.opacity = '1';
}

function hideCaption(logoContainer) {
    logoContainer.children[1].style.opacity = '0';
}


function createRandomPath() {
    const dripElements = document.querySelectorAll('.drip');
    let randomPath = [];
    let randomSize = [];
    for (let i = 2; i < 50; i+=2) {
        randomSize.push(i);
    }
    for (var i = 1; i < 90; i+=2) {
        randomPath.push(i);
    }
    for (dripElement of dripElements) {
        let left = randomPath[Math.floor(Math.random() * randomPath.length)];
        let size = randomSize[Math.floor(Math.random() * randomSize.length)];
        dripElement.style.left = `${left}%`;
        dripElement.style.width = `${size}px`;
        dripElement.style.height = `${size}px`;
        dripElement.style.background = "#6746ff";
    }
}

const createDrippingElements = () => {
    const cont = document.createElement('div');
    cont.className = 'cont';
    for (var i = 0; i < 25; i++){
        const dripDiv = document.createElement('div');
        dripDiv.className = 'drip';
        cont.appendChild(dripDiv);
    }
    cont.innerHTML += `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    `;
    dripContainer.appendChild(cont);
    createRandomPath();
};

createDrippingElements();
