$(document).ready(function() {
    $('#titleWeb').text(CONFIG.titleWeb)
    $('body').css('background-image', 'url(./images/' + CONFIG.background + ')')

    for (let i = 1; i <= 6; i++)
        $('#min' + i).css('background-image', 'url(./images/' + CONFIG['min' + i] + ')')

    for (let i = 1; i <= 6; i++)
        $('#max' + i).css('background-image', 'url(./images/' + CONFIG['max' + i] + ')')
})

document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById("bg-music");
    if (sessionStorage.getItem("musicPlaying")) {
        bgMusic.play();
    }
    // Try playing the music automatically
    const playMusic = () => {
        bgMusic.play().catch(() => {
            console.log("Autoplay prevented, waiting for user interaction.");
        });
    };

    // Play music on first user interaction
    document.body.addEventListener("click", playMusic, { once: true });
});