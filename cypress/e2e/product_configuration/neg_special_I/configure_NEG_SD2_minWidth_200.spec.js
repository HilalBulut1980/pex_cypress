
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-SD2-min.breite",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd2",
    "breite": "100",
    "breite_new": "200",
    "hoehe": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 200 mm und 1600 mm ein."
}

describe('Testing error messages - SD2 min. width 200', () => {
    configurator.configure_NEG_specialForms(test)
})
