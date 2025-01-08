bg = document.querySelector('.bg');
loadText = document.querySelector('.loading-text');

let loadPercent = 0;

let loadInterval = setInterval(blurryLoad, 30)

function blurryLoad() {
    loadPercent++;
    if (loadPercent > 99){
        clearInterval(loadInterval);
    }

    let blurValue = (70-70/100 * loadPercent);
    bg.style.filter = "blur(" + blurValue + "px)";
    loadText.innerHTML = loadPercent + '%';
}

blurryLoad();

// for (i=0;i<=100;i++){
    
//     setInterval(() => {
//         loadText.innerHTML = i + '%';    
//     }, 0.02);
// }