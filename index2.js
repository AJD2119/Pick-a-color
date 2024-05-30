var currentRGB = { red: 0, green: 0, blue: 0 };
var currentAlpha = 1;

function initializeRGB() {
    changeRGB();
}

function changeRGB() {
    var redValue = document.getElementById("slideRed").value;
    var greenValue = document.getElementById("slideGreen").value;
    var blueValue = document.getElementById("slideBlue").value;

    var rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    var hexValue = RGBtoHEX(parseInt(redValue), parseInt(greenValue), parseInt(blueValue));
    var hslValue = RGBtoHSL(parseInt(redValue), parseInt(greenValue), parseInt(blueValue));

    var rgbResultElement = document.getElementById("rgbresult");
    rgbResultElement.style.backgroundColor = rgbValue;

    // Afficher les résultats au niveau du texte "Résultat"
    var resultTextElement = document.getElementById("resultText1");
    resultTextElement.innerHTML = `${rgbValue} : hex:${hexValue} : ${hslValue}`;
}

// Ajouter cette fonction pour convertir RGB en HSL
function RGBtoHSL(r, g, b) {
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

function initializeRGBA() {
    changeRGBA();
    changeAlpha();
}

function changeRGBA() {
    var redValue = document.getElementById("slideRedAlpha").value;
    var greenValue = document.getElementById("slideGreenAlpha").value;
    var blueValue = document.getElementById("slideBlueAlpha").value;
    var alphaValue = document.getElementById("slideAlpha").value;

    var rgbaValue = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
    var hslaValue = RGBtoHSLA(parseInt(redValue), parseInt(greenValue), parseInt(blueValue), parseFloat(alphaValue));

    var rgbaResultElement = document.getElementById("rgbaresult");
    rgbaResultElement.style.backgroundColor = rgbaValue;

    // Déplacer les résultats vers la section "Résultats"
    var resultTextElement = document.getElementById("resultText2");
    resultTextElement.innerHTML = `<div class="result-text">${rgbaValue} : ${hslaValue}</div>`;
}

// Ajouter cette fonction pour convertir RGB en HSLA
function RGBtoHSLA(r, g, b, a) {
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

function changeAlpha() {
    var alphaValue = document.getElementById("slideAlpha").value;
    currentAlpha = alphaValue;

    var rgbaResultElement = document.getElementById("rgbaresult");
    var red = document.getElementById("slideRedAlpha").value;
    var green = document.getElementById("slideGreenAlpha").value;
    var blue = document.getElementById("slideBlueAlpha").value;

    var rgbaValue = `rgba(${red}, ${green}, ${blue}, ${alphaValue})`;
    var hslaValue = RGBtoHSLA(parseInt(red), parseInt(green), parseInt(blue), alphaValue);

    // Déplacer les résultats vers la section "Résultats"
    var resultTextElement = document.getElementById("resultText2");
    resultTextElement.innerHTML = `<div class="result-text">${rgbaValue} : ${hslaValue}</div>`;

    rgbaResultElement.style.backgroundColor = rgbaValue;
    rgbaResultElement.style.opacity = alphaValue;
}

function initializeHEX() {
    changeHEX();
}

function changeHEX() {
    var redValue = document.getElementById("slideRedHex").value;
    var greenValue = document.getElementById("slideGreenHex").value;
    var blueValue = document.getElementById("slideBlueHex").value;

    var hexValue = RGBtoHEX(parseInt(redValue), parseInt(greenValue), parseInt(blueValue));
    var rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    var hslValue = RGBtoHSL(parseInt(redValue), parseInt(greenValue), parseInt(blueValue));

    var hexResultElement = document.getElementById("hexresult");
    hexResultElement.style.backgroundColor = hexValue;

    // Afficher les résultats en ligne sous le rectangle
    var resultTextElement = document.getElementById("resultText3");
    hexResultElement.innerHTML = `<div class="result-text">hex:${hexValue}</div><div class="result-text">${rgbValue}</div><div class="result-text">${hslValue}</div>`;

}

function RGBtoHEX(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function initializeHSL() {
    changeHSL();
}

function changeHSL() {
    var hueValue = document.getElementById("slideHue").value;
    var saturationValue = document.getElementById("slideSaturation").value;
    var lightnessValue = document.getElementById("slideLightness").value;

    var hslValue = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
    var rgbValue = HSLtoRGB(hueValue, saturationValue, lightnessValue);
    var hexValue = RGBtoHEX(rgbValue.red, rgbValue.green, rgbValue.blue);

    // Construction de la chaîne de résultats
    var resultText = `HSL: ${hslValue}, RGB: rgb(${rgbValue.red}, ${rgbValue.green}, ${rgbValue.blue}), HEX: ${hexValue}`;
    var hslResultElement = document.getElementById("hslresult");
    hslResultElement.style.backgroundColor = hslValue;

    // Mise à jour du contenu de l'élément avec l'ID "resultText3"
    var resultTextElement = document.getElementById("resultText3");
    resultTextElement.textContent = resultText;
}

// Ajouter cette fonction pour convertir HSL en RGB
function HSLtoRGB(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    var r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
        red: Math.round(r * 255),
        green: Math.round(g * 255),
        blue: Math.round(b * 255)
    };
}

function initializeHSLA() {
    changeHSLA();
    changeAlphaA();
}

function changeHSLA() {
    var hueValue = document.getElementById("slideHueA").value;
    var saturationValue = document.getElementById("slideSaturationA").value;
    var lightnessValue = document.getElementById("slideLightnessA").value;
    var alphaValue = document.getElementById("slideAlphaA").value;

    var rgbValue = HSLtoRGB(hueValue, saturationValue, lightnessValue);  // Convertir HSL en RGB
    var rgbaValue = `rgba(${rgbValue.red}, ${rgbValue.green}, ${rgbValue.blue}, ${alphaValue})`;
    var hslaValue = `hsla(${hueValue}, ${saturationValue}%, ${lightnessValue}%, ${alphaValue})`;

    var hslaResultElement = document.getElementById("hslAResult");
    hslaResultElement.style.backgroundColor = hslaValue;

    // Afficher les résultats en ligne sous le rectangle
    var resultTextElement = document.getElementById("resultText4");
    resultTextElement.innerHTML = `<div class="result-text">${hslaValue} : ${rgbaValue}</div>`;
}

function changeAlphaA() {
    var alphaValue = document.getElementById("slideAlphaA").value;
    currentAlpha = alphaValue;

    var hslaResultElement = document.getElementById("hslAResult");
    var rgbaValue = `rgba(${currentRGB.red}, ${currentRGB.green}, ${currentRGB.blue}, ${alphaValue})`;

    // Afficher les résultats en ligne sous le rectangle
    var resultTextElement = document.getElementById("resultText4");
    resultTextElement.innerHTML = `<div class="result-text">hsla(${document.getElementById("slideHueA").value}, ${document.getElementById("slideSaturationA").value}%, ${document.getElementById("slideLightnessA").value}%, ${alphaValue}) : ${rgbaValue}</div>`;

    hslaResultElement.style.opacity = alphaValue;
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function isBright(hexColor) {
    var r = parseInt(hexColor.substring(1, 3), 16);
    var g = parseInt(hexColor.substring(3, 5), 16);
    var b = parseInt(hexColor.substring(5, 7), 16);

    var brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128;
}

function adjustTextColor(element, bgColor) {
    var brightness = getBrightness(bgColor);
    element.style.color = brightness > 128 ? 'black' : 'white';
}

function getBrightness(hexColor) {
    var r = parseInt(hexColor.substring(1, 3), 16);
    var g = parseInt(hexColor.substring(3, 5), 16);
    var b = parseInt(hexColor.substring(5, 7), 16);

    return (r * 299 + g * 587 + b * 114) / 1000;
}