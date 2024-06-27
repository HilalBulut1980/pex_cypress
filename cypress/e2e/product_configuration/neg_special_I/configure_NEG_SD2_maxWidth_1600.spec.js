
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-SD2-max.breite",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd2",
    "breite": "1700",
    "breite_new": "1600",
    "hoehe": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 200 mm und 1600 mm ein."
}

describe('Testing error messages - SD2 max. width 1600', () => {
   configurator.configure_NEG_specialForms(test)
})

