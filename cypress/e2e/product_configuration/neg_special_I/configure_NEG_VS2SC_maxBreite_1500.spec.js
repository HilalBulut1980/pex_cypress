var configurator = require("../../../support/configurator_NEG_specialForms.js");


var test = {
    "name": "Neg.PEX-vs2sc_max.Width_1500",
    "product": "Duo 4001",
    "stoff_url": "duo-4001",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "2000",
    "breite": "1600",
    "breite_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1800 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1500 mm beträgt."
}

describe('Testing error messages - VS2SC - max. width 1500', () => {
    configurator.configure_NEG_specialForms(test)
})