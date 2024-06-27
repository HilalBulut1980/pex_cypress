var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL11-max.hoehe",
    "product": "Novella 4930",
    "stoff_url": "Novella-4933",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl11",
    "befestigung": "Clip",
    "hoehe": "4500",
    "hoehe_new": "4000",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 4000 mm ein."
}


describe('Testing error messages - PL11 max. height 4000', () => {
    configurator.configure_NEG_specialForms(test)
})