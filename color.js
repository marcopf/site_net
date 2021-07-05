let colors = ['#e63946', '#e9c46a', '#f4a261', '#e76f51', '#a8dadc', '#e5e5e5']
let cardsColor = document.querySelectorAll('.sub-container')
let oldColor = 0

// function randomColor() {
//     let newColor = Math.floor(Math.random() * colors.length)
//     while (newColor == oldColor) {
//         newColor = Math.floor(Math.random() * colors.length)
//     }
//     oldColor = newColor
//     return colors[newColor]
// }

for (let i = 0; i < cardsColor.length; i++) {
    let color = colors[i]
    cardsColor[i].style.backgroundColor = color
    if (lightOrDark(color) == 'dark') {
        cardsColor[i].style.color = 'white'
    }
}

document.querySelector('.mail').onclick = () => {
        document.querySelector('.text-mail').innerText = 'federico.cosentino15@gmail.com'
    }
    // for (let i = 0; i < cardsColor.length; i++) {

// var rgb = getAverageRGB(document.querySelector('.color-info'));
// cardsColor[i].style.backgroundColor = 'rgb(' + (rgb.r) + ',' + (rgb.g) + ',' + (rgb.b) + ')';
// if (lightOrDark(rgb) == 'light') {
//     document.querySelector('.singleCard').style.color = 'black'
// } else {
//     document.querySelector('.singleCard').style.color = 'white'
// }


// function getAverageRGB(imgEl) {

//     var blockSize = 5, // only visit every 5 pixels
//         defaultRGB = {
//             r: 0,
//             g: 0,
//             b: 0
//         }, // for non-supporting envs
//         canvas = document.createElement('canvas'),
//         context = canvas.getContext && canvas.getContext('2d'),
//         data, width, height,
//         i = -4,
//         length,
//         rgb = {
//             r: 0,
//             g: 0,
//             b: 0
//         },
//         count = 0;

//     if (!context) {
//         return defaultRGB;
//     }

//     height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
//     width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

//     context.drawImage(imgEl, 0, 0);

//     try {
//         data = context.getImageData(0, 0, width, height);
//     } catch (e) {
//         /* security error, img on diff domain */
//         return defaultRGB;
//     }

//     length = data.data.length;

//     while ((i += blockSize * 4) < length) {
//         ++count;
//         rgb.r += data.data[i];
//         rgb.g += data.data[i + 1];
//         rgb.b += data.data[i + 2];
//     }

//     // ~~ used to floor values
//     rgb.r = ~~(rgb.r / count);
//     rgb.g = ~~(rgb.g / count);
//     rgb.b = ~~(rgb.b / count);

//     return rgb;

// }
// console.log(lightOrDark(rgb))

function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If RGB --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    } else {

        // If hex --> Convert it to RGB: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        return 'light';
    } else {

        return 'dark';
    }
}