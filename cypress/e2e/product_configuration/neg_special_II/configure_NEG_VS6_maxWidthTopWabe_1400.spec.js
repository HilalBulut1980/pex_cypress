var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-breite_oben_max_wabe",
    "product": "Duo-Blackout-4043",
    "stoff_url": "Duo-Blackout-4043",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "1401",
    "breite_oben_new": "1000",
    "breite_unten": "1500",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 1400 mm ein."
}

describe('Testing error messages - VS6 max. width top wabe 1400', () => {
    configurator.configure_NEG_specialForms(test)
})
