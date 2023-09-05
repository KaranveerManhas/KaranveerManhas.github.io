var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for(var i = 0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();

        var targetSectionId = this.getAttribute('href');
        targetSectionId = targetSectionId.slice(1);
        var targetSection = document.getElementById(targetSectionId);
        var interval = setInterval(function() {
            let targetSectionCoordinates = targetSection.getBoundingClientRect();
            if (targetSectionCoordinates.y <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 10);
    });
}


var skillBars = document.querySelectorAll('.skill-progress > div');



function initializeBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';    
}

for(var bar of skillBars){
    initializeBar(bar);
}


function fillBar(bar) {
    let targetWidth = bar.getAttribute("data-skill-width");
    let currentWidth = 0;
    let interval = setInterval(function(){
        if(currentWidth >= targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 10);
    

}

function checkScroll() {
    for(let bar of skillBars){
        var barCoordinates = bar.getBoundingClientRect();
        if(bar.getAttribute("data-visited") == "false" && 
        barCoordinates.top <= (window.innerHeight- barCoordinates.height)) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }
        else if(barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initializeBar(bar);
        }
}
}


window.addEventListener('scroll', checkScroll);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const percentageSpan = document.getElementById('percentage');
var body = document.getElementsByTagName('body')[0];
var pageheight = body.getBoundingClientRect().height;


function percentageScrolled() {
    var windowTop = window.scrollY;
    var windowHeight = window.innerHeight;
    console.log(windowHeight);
    var scrollPercent = windowTop / (pageheight - windowHeight);
    percentageSpan.innerHTML = Math.round(scrollPercent*100);
}
window.addEventListener('scroll', percentageScrolled);
