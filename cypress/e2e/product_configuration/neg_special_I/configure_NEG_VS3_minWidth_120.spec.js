
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS3-min.breite",
    "product": "Clasico 4410",
    "stoff_url": "Clasico-4410",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs3",
    "hoehe": "1000",
    "breite": "100",
    "breite_new": "120",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1500 mm ein."
}

describe('Testing error messages - VS3 min. width 120', () => {
    configurator.configure_NEG_specialForms(test)
})
