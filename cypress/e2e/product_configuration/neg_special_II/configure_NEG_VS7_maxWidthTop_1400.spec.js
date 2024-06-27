var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS7-breite_oben",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "500",
    "breite_oben": "1401",
    "breite_oben_new": "1000",
    "breite_unten": "1500",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 1400 mm ein."
}

describe('Testing error messages - VS7 max. width top 1400', () => {

   configurator.configure_NEG_specialForms(test)
})
