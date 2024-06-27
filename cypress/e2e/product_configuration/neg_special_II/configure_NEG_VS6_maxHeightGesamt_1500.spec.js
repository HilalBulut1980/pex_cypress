var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-hoehe_gesamt_1500",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "200",
    "breite_unten": "1500",
    "gesamthoehe": "1600",
    "gesamthoehe_new": "1500",
    "teilhoehe": "1000",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2000 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Testing error messages - VS6 height gesamt 1500', () => {
    configurator.configure_NEG_specialForms(test)
})
