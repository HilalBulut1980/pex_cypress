var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F3-max.breite",
    "product": "Conforto 4336",
    "stoff_url": "Conforto-4336",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f3",
    "hoehe": "1500",
    "breite": "1600",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 150 mm und 1500 mm ein."
}

describe('Testing error messages - F3 max. width 1500', () => {
    configurator.configure_NEG_specialForms(test)
})