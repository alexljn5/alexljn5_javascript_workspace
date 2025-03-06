export let state = {
    clicks: 0
};

let toggleTheMusic = new Audio("audio/music/ramranch.mp3");


document.getElementById("mainClick").addEventListener("click", onClick, false);
document.getElementById("toggleMusic").addEventListener("click", toggleMusic, false);
document.getElementById("muteMusic").addEventListener("click", muteMusic, false);
document.getElementById("volumeSlider").addEventListener("input", volumeSlider, false);

function onClick() {
    document.getElementById("counter").value;
    state.clicks++;
    document.getElementById("counter").value = Math.round(state.clicks);

    console.log(state.clicks);
}

function toggleMusic() {
    toggleTheMusic.play();
}

function muteMusic() {
    toggleTheMusic.pause();
}

function volumeSlider() {
    let theVolumeSlider = document.getElementById("volumeSlider").value;
    toggleTheMusic.volume = theVolumeSlider / 100;
    console.log("Volume set to:", toggleTheMusic.volume);
}

