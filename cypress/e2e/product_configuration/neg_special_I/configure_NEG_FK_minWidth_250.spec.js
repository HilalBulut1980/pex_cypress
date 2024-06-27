var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FK-min.breite",
    "product": "Bast 4141",
    "stoff_url": "Bast-4141",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fk",
    "hoehe": "2000",
    "breite": "200",
    "breite_new": "250",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 2300 mm ein."
}

describe('Testing error messages - FK min. width 250', () => {
    configurator.configure_NEG_specialForms(test)
})