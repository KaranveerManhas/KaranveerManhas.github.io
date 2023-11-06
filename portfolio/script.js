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
let isNightMode = true;


switchModes.addEventListener("click", function() {
    if (isNightMode) {
        for (white of whites) {
            white.classList.remove("white");
            white.classList.add("black");
        }
        switchModes.innerHTML = `<i class='bx bx-sun black'></i>`;
        body.style.backgroundColor = "#fff";
        logo.src = "assets/logo_black.png";
        isNightMode = !isNightMode;
    }
    else{
        for (white of whites) {
            white.classList.remove("black");
            white.classList.add("white");
        }
        switchModes.innerHTML = `<i class='bx bx-moon white'></i>`;
        body.style.backgroundColor = "#000";
        logo.src = "assets/logo_white.png";
        isNightMode = !isNightMode;
    }
});