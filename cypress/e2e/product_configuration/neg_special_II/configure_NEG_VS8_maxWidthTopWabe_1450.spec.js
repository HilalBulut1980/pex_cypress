var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS8-breite_oben",
    "product": "Wabe-Object-4124",
    "stoff_url": "Wabe-Object-4124",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "hoehe": "1000",
    "breite_oben": "1451",
    "breite_oben_new": "1300",
    "breite_unten": "1500",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 1450 mm ein."
}

describe('Testing error messages - VS8 max. width top wabe 1450', () => {
   configurator.configure_NEG_specialForms(test)
})
