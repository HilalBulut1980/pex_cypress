var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-hoehe_gesamt",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "200",
    "breite_unten": "1000",
    "gesamthoehe": "2500",
    "gesamthoehe_new": "2000",
    "teilhoehe": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

describe('Testing error messages - VS6 height gesamt 2000', () => {
    configurator.configure_NEG_specialForms(test)
})

