
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-SD3-max.breite",
    "product": "Alegria 4570",
    "stoff_url": "Alegria-4570",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd3",
    "hoehe": "1000",
    "breite": "2100",
    "breite_new": "2000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 200 mm und 2000 mm ein."
}

describe('Testing error messages - SD3 max. width 2000', () => {
    configurator.configure_NEG_specialForms(test)
})
