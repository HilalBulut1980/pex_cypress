var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS1-max.breite",
    "product": "Bozen 1161",
    "stoff_url": "bozen-1161",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "breite": "1000",
    "breite_new": "800",
    "hoehe_links": "1000",
    "hoehe_rechts": "500",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 800 mm ein."
}

describe('Testing error messages - FS1 max. width 800', () => {
    configurator.configure_NEG_specialForms(test)
})
