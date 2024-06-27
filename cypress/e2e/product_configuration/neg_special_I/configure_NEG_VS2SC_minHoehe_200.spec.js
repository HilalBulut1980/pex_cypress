var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-vs2sc_min.Height_200",
    "product": "Liviano 4313",
    "stoff_url": "liviano-4313",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "150",
    "breite": "1000",
    "hoehe_new": "200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

describe('Testing error messages - VS2SC - min. height 200', () => {
    configurator.configure_NEG_specialForms(test)
})