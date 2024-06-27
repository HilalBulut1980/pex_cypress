var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS7-breite_oben",
    "product": "Duo-4013",
    "stoff_url": "Duo-4013",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "1000",
    "breite_oben": "1401",
    "breite_oben_new": "700",
    "breite_unten": "1500",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 1400 mm ein."
}

describe('Testing error messages - VS7 max. width top wabe 1400', () => {

   configurator.configure_NEG_specialForms(test)
})
