var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PLK13-max.breite",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "plk13",
    "befestigung": "Clip",
    "hoehe": "3000",
    "breite": "1600",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 200 mm und 1500 mm ein."
}

describe('Testing error messages - PLK13 max. width 1500', () => {
    configurator.configure_NEG_specialForms(test)
})