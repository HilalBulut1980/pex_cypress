var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS10-breite",
    "product": "Alegria 4565",
    "stoff_url": "Alegria-4565",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs10",
    "breite": "299",
    "breite_new": "300",
    "hoehe": "1000",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1200 mm ein."
}

describe('Testing error messages - VS10 min. width 300', () => {
    configurator.configure_NEG_specialForms(test)
})
