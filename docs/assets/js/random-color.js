document.addEventListener("DOMContentLoaded", function() {
    var colors = [
        '#028063',
        '#112A46',
        '#4985c0',
        '#377b40',
        '#9b411b',
    ];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Set as a CSS variable so hover/active states in CSS still work
    document.documentElement.style.setProperty('--header-color', randomColor);
});
