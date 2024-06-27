
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS3-max.breite_1500",
    "product": "Clasico 4410",
    "stoff_url": "Clasico-4410",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs3",
    "hoehe": "1000",
    "breite": "1600",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1500 mm ein."
}

describe('Testing error messages - VS3 max. width 1500', () => {
    configurator.configure_NEG_specialForms(test)
})

