var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs2_minHeight_200",
    "product": "Liviano 4313",
    "stoff_url": "liviano-4313",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe": "180",
    "breite": "1000",
    "hoehe_new": "200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

describe('Testing error messages - VS2 - min. height 200', () => {
    configurator.configure_NEG_vertical(test)
})