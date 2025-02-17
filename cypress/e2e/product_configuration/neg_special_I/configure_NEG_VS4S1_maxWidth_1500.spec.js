
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S1-max.breite",
    "product": "Bast 4141",
    "stoff_url": "Bast-4141",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1600",
    "breite_new": "1500",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}

describe('Testing error messages - VS4S1 max. width 1500', () => {
    configurator.configure_NEG_specialForms(test)
})
