var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-vs2sc_min.Width_230",
    "product": "Bruneck 1186",
    "stoff_url": "bruneck-1186",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "800",
    "breite": "200",
    "breite_new": "230",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1800 mm ein."
}

describe('Testing error messages - VS2SC - min. width 230', () => {
    configurator.configure_NEG_specialForms(test)
})