document.addEventListener("DOMContentLoaded", function() {
    var colors = [
        '#028063',
        '#112A46',
        '#4985c0',
        '#377b40',
        '#9b411b',
    ];

    function applyColor(color) {
        document.documentElement.style.setProperty('--header-color', color);
    }

    function pickRandom() {
        var current = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-color').trim();
        var choices = colors.filter(function(c) { return c !== current; });
        return choices[Math.floor(Math.random() * choices.length)];
    }

    var btn = document.createElement('button');
    btn.className = 'color-randomiser-btn';
    btn.title = 'Randomise header colour';
    btn.innerHTML = '🎨';
    btn.addEventListener('click', function() {
        applyColor(pickRandom());
    });

    var header = document.querySelector('.md-header__inner');
    if (header) header.appendChild(btn);
});
