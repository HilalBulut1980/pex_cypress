var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs1_maxWidth_1200",
    "product": "Duo 4001",
    "stoff_url": "duo-4001",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe": "2000",
    "breite": "1300",
    "breite_new": "1200",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt. Wenn Sie ein größeres Fenster haben, empfehlen wir sogenannte freihängende Plissees - den passenden Konfigurator finden Sie hier."
}

describe('Testing error messages - VS1 - max. width 1200', () => {
    configurator.configure_NEG_vertical(test)
})