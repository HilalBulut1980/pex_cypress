var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS7-hoehe_1500",
    "product": "Clasico 4410",
    "stoff_url": "Clasico-4410",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "1600",
    "hoehe_new": "1500",
    "breite_oben": "100",
    "breite_unten": "1300",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2000 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Testing error messages - VS7 max. height 1500', () => {
    configurator.configure_NEG_specialForms(test)
})
