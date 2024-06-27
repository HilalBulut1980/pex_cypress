var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs2_maxHeight_2200",
    "product": "Syrakus 2079",
    "stoff_url": "syrakus-2079",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe": "2300",
    "breite": "1000",
    "hoehe_new": "2200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein. Wenn Sie ein größeres Fenster haben, empfehlen wir Ihnen sogenannte freihängende Plissees - den passenden Konfigurator finden Sie hier."
}

describe('Testing error messages - VS2 - max. height 2200', () => {
    configurator.configure_NEG_vertical(test)
})