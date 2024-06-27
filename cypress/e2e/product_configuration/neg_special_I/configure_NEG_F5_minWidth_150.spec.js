var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F5-min.breite",
    "product": "Conforto 4336",
    "stoff_url": "Conforto-4336",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f5",
    "hoehe": "1500",
    "breite": "100",
    "breite_new": "150",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 150 mm und 2000 mm ein."
}

describe('Testing error messages - F5 min. width 150', () => {
    configurator.configure_NEG_specialForms(test)
})