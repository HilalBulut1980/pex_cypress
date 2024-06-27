var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-vs2sc_max.Height_2200",
    "product": "Syrakus 2079",
    "stoff_url": "syrakus-2079",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "2300",
    "breite": "1500",
    "hoehe_new": "2200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

describe('Testing error messages - VS2SC - max. height 2200', () => {
    configurator.configure_NEG_specialForms(test)
})