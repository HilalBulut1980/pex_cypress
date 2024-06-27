var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs2_minWidth_230",
    "product": "Bruneck 1186",
    "stoff_url": "bruneck-1186",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe": "1000",
    "breite": "200",
    "breite_new": "230",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1500 mm ein."
}

describe('Testing error messages - VS2 - min. width 230', () => {
    configurator.configure_NEG_vertical(test)
})