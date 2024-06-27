var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs1_minWidth_120",
    "product": "Bruneck 1186",
    "stoff_url": "bruneck-1186",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe": "1000",
    "breite": "100",
    "breite_new": "120",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1500 mm ein."
}

describe('Testing error messages - VS1 - min. width 120', () => {
    configurator.configure_NEG_vertical(test)
})