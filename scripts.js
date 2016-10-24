"use strict";

let currentStop = null;

document.addEventListener("click", function () {
    let scrollstops = Array.from(document.getElementsByClassName('scrollstop'));

    if(!currentStop || currentStop === scrollstops[scrollstops.length - 1]) {
        currentStop = scrollstops[0];
    }else{
        currentStop = scrollstops[scrollstops.indexOf(currentStop) + 1];
    }

    currentStop.scrollIntoView({ block: true, behavior: "smooth"});

});
