var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F5-max.breite",
    "product": "Conforto 4336",
    "stoff_url": "Conforto-4336",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f5",
    "hoehe": "1000",
    "breite": "2100",
    "breite_new": "2000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 150 mm und 2000 mm ein."
}

describe('Testing error messages - F5 max. width 2000', () => {
    configurator.configure_NEG_specialForms(test)
})