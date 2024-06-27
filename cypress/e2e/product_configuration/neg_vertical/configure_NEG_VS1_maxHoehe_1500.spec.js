var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs1_maxHeight_1500",
    "product": "Novara 1234",
    "stoff_url": "novara-1234",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe": "1600",
    "breite": "1600",
    "hoehe_new": "1500",
    "breite_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt. Wenn Sie ein größeres Fenster haben, empfehlen wir sogenannte freihängende Plissees - den passenden Konfigurator finden Sie hier."
}

describe('Testing error messages - VS1 - max. height 1500', () => {
    configurator.configure_NEG_vertical(test)
})