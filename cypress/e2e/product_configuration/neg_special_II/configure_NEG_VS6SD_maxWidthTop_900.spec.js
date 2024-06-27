var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-breite_oben_max",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "901",
    "breite_oben_new": "900",
    "breite_unten": "1000",
    "gesamthoehe": "1500",
    "teilhoehe": "1400",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 900 mm ein."
}

describe('Testing error messages - VS6 SD max. width top 1400', () => {
    configurator.configure_NEG_specialForms(test)
})
