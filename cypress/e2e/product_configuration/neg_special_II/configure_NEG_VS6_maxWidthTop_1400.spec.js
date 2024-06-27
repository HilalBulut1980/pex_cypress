var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-breite_oben_max",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "1401",
    "breite_oben_new": "1400",
    "breite_unten": "1500",
    "gesamthoehe": "1500",
    "teilhoehe": "1400",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 1400 mm ein."
}

describe('Testing error messages - VS6 max. width top 1400', () => {
    configurator.configure_NEG_specialForms(test)
})
