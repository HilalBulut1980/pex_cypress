var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6SD-breite_oben",
    "product": "Alegria 4565",
    "stoff_url": "Alegria-4565",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "50",
    "breite_oben_new": "70",
    "breite_unten": "1000",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 900 mm ein."
}

describe('Testing error messages - VS6SD min. width top 70', () => {
    configurator.configure_NEG_specialForms(test)
})
