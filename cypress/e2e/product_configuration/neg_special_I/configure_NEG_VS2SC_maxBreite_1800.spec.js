var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-vs2sc_max.Width_1800",
    "product": "Bologna 2027",
    "stoff_url": "bologna-2027",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "1500",
    "breite": "1900",
    // "hoehe_new": "1500",
    "breite_new": "1800",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1800 mm ein."
}

describe('Testing error messages - VS2SC - max. width 1800', () => {
    configurator.configure_NEG_specialForms(test)
})