var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS8-breite_oben_wabe",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "hoehe": "1000",
    "breite_oben": "50",
    "breite_oben_new": "120",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 1450 mm ein."
}

describe('Testing error messages - VS8 min. width top wabe 120', () => {
   configurator.configure_NEG_specialForms(test)
})
