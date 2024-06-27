var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-breite_unten",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "200",
    "breite_unten": "299",
    "breite_unten_new": "300",
    "gesamthoehe": "1500",
    "teilhoehe": "1400",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}

describe('Testing error messages - VS6 min. width bottom 300', () => {
    configurator.configure_NEG_specialForms(test)
})

