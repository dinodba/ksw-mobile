

// Init the Ki Bon Soo array
const kibonsoo =   ['key bon soo one',
                    'key bon soo two',
                    'key bon soo three',
                    'key bon soo four',
                    'key bon soo five',
                    'key bon soo six',
                    'key bon soo seven',
                    'key bon soo eight',
                    'key bon soo nine',
                    'key bon soo ten',
                    'key bon soo eleven',
                    'key bon soo twelve',
                    'key bon soo thirteen',
                    'key bon soo fourteen',
                    'key bon soo fifteen'];

function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


var technique = new SpeechSynthesisUtterance();

var button = document.getElementById('speak');

button.addEventListener('click', function(e) {
    const secondsDelay = document.getElementById("speakDelay").value*1000 || 1500;
    console.log(secondsDelay);
    const shuffledkbs = shuffle(kibonsoo);
    console.log(shuffledkbs);
    (function theLoop (i) {
        setTimeout(function () {
            technique.voiceURI = "fiona";
            technique.lang = "en-scotland";
            technique.text = shuffledkbs[i-1];
            speechSynthesis.speak(technique);
            if (--i) {
                theLoop(i);
            }
        }, secondsDelay);
    })(3);
});
