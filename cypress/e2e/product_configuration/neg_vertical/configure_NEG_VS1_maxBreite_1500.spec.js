var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs1_maxWidth_1500",
    "product": "Bologna 2027",
    "stoff_url": "bologna-2027",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe": "1500",
    "breite": "1700",
    "hoehe_new": "1500",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1500 mm ein. Wenn Sie ein breiteres Fenster haben, empfehlen wir Ihnen den Plisseetyp \"Freihängend F1\" - den passenden Konfigurator finden Sie hier."
}

describe('Testing error messages - VS1 - max. width 1500', () => {
    configurator.configure_NEG_vertical(test)
})