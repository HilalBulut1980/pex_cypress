
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS3-max.hoehe_1500",
    "product": "Malia 4418",
    "stoff_url": "Malia-4418",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs3",
    "hoehe": "1600",
    "breite": "1500",
    "hoehe_new": "1500",
    "breite_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Testing error messages - VS3 max. height 1500', () => {
    configurator.configure_NEG_specialForms(test)
})
