var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FK-max.breite",
    "product": "Bast 4141",
    "stoff_url": "Bast-4141",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fk",
    "hoehe": "1000",
    "breite": "2400",
    "breite_new": "2300",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 2300 mm ein."
}

describe('Testing error messages - FK max. width 2300', () => {
    configurator.configure_NEG_specialForms(test)
})
