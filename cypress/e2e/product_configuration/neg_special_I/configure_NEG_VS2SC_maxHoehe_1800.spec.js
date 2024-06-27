var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-vs2sc_max.Height_1800",
    "product": "Novara 1234",
    "stoff_url": "novara-1234",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "1900",
    "breite": "1600",
    "hoehe_new": "1800",
    // "breite_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1800 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1500 mm beträgt."

}

describe('Testing error messages - VS2SC - max. height 1800', () => {
    configurator.configure_NEG_specialForms(test)
})