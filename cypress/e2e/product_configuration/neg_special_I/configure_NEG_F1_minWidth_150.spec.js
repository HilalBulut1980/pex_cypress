var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F1-min.breite",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "hoehe": "1000",
    "breite": "100",
    "breite_new": "150",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 150 mm und 2300 mm ein."
}

describe('Testing error messages - F1 min. width 150', () => {
    configurator.configure_NEG_specialForms(test)
})