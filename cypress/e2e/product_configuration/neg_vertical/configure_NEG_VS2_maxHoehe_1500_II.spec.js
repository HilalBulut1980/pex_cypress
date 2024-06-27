var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs2_maxHeight_1500_II",
    "product": "Wabe-Light-4733",
    "stoff_url": "wabe-light-4733",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe": "1600",
    "breite": "1200",
    "hoehe_new": "1500",
    "breite_new": "1200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1500 mm ein." //Wabe-Light and Wabe-Twine only till 1500 mm --> PEX-4084

}

describe('Testing error messages - VS2 - max. height 1500 II', () => {
    configurator.configure_NEG_vertical(test)
})