var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VSSD-max.breite",
    "product": "Tarent 1277",
    "stoff_url": "Tarent-1277",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vssd",
    "hoehe": "1000",
    "breite": "1100",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1000 mm ein."
}

describe('Testing error messages - VS SD max. width 1000', () => {
    configurator.configure_NEG_specialForms(test)
})
