var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6SD-breite_oben_wabe",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "50",
    "breite_oben_new": "120",
    "breite_unten": "1000",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 900 mm ein."
}

describe('Testing error messages - VS6SD min. width top wabe 120', () => {
    configurator.configure_NEG_specialForms(test)
})
