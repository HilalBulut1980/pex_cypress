var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F1-max.breite",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "hoehe": "2500",
    "breite": "2400",
    "breite_new": "2300",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 150 mm und 2300 mm ein."
}

describe('Testing error messages - F1 max. width 2300', () => {
    configurator.configure_NEG_specialForms(test)
})