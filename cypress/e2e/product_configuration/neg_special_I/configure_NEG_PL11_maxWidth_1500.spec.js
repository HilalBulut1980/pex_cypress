var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL11-max.breite",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl11",
    "befestigung": "Clip",
    "hoehe": "3000",
    "breite": "1600",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 200 mm und 1500 mm ein."
}


describe('Testing error messages - PL11 max. width 1500', () => {
    configurator.configure_NEG_specialForms(test)
})