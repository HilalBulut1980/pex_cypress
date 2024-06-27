var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS9-hoehe",
    "product": "Floral 4105",
    "stoff_url": "floral-4105",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "2001",
    "hoehe_new": "1300",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

describe('Testing error messages - VS9 max. height 2000', () => {
   configurator.configure_NEG_specialForms(test)
})
