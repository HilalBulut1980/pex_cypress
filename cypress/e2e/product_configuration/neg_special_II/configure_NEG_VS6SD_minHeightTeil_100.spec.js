var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6SD-hoehe_teil_min",
    "product": "Tarent 1277",
    "stoff_url": "Tarent-1277",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "200",
    "breite_unten": "1000",
    "gesamthoehe": "1000",
    "teilhoehe": "50",
    "teilhoehe_new": "100",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein."
}

describe('Testing error messages - VS6SD min. height teil 100', () => {
    configurator.configure_NEG_specialForms(test)
})
