var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS8-breite_oben",
    "product": "Bozen 1161",
    "stoff_url": "bozen-1161",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "hoehe": "1000",
    "breite_oben": "1451",
    "breite_oben_new": "1000",
    "breite_unten": "1500",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 1450 mm ein."
}

describe('Testing error messages - VS8 max. width top 1450', () => {
   configurator.configure_NEG_specialForms(test)
})
