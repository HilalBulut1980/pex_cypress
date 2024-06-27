var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-breite_oben_max_wabe",
    "product": "Duo-Blackout-4043",
    "stoff_url": "Duo-Blackout-4043",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "901",
    "breite_oben_new": "900",
    "breite_unten": "1000",
    "gesamthoehe": "1500",
    "teilhoehe": "1400",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 900 mm ein."
}

describe('Testing error messages - VS6 max. width top wabe 1400', () => {
    configurator.configure_NEG_specialForms(test)
})
