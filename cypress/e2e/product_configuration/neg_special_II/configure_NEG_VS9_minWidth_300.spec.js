var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS9-breite",
    "product": "Syrakus 4215",
    "stoff_url": "Syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "300",
    "breite": "299",
    "breite_new": "300",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}

describe('Testing error messages - VS9 min. width 300', () => {
   configurator.configure_NEG_specialForms(test)
})
