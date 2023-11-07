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
let isNightMode = true;



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
        isNightMode = !isNightMode;
    }
    else{
        for (white of whites) {
            white.classList.replace("black", "white");
        }
        switchModes.innerHTML = `
        <div class="circle"></div>
        <i class='bx bx-moon white'></i>`;
        body.style.backgroundColor = "#000";
        body.style.cursor = `url("./assets/cursor_white.png"), auto`;
        logo.src = "assets/logo_white.png";
        scrollTopButton.style.borderColor = "#fff";
        scrollTopButton.children[0].style.color = "#fff";
        isNightMode = !isNightMode;
    }
});

function scrollToTop() {
    window.scrollTo ({
        top:0
    });
}

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 300) {
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