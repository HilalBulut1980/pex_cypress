var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS8-hoehe_rechts_1500",
    "product": "Clasico 4410",
    "stoff_url": "Clasico-4410",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "hoehe": "1600",
    "hoehe_new": "1500",
    "breite_oben": "100",
    "breite_unten": "1300",
    "ausrichtung": "rechts",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2000 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Testing error messages - VS8 max. height right 1500', () => {
   configurator.configure_NEG_specialForms(test)
})
