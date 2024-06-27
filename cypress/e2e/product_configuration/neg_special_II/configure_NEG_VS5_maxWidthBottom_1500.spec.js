var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-max_breite_1500",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "1000",
    "hoehe_rechts": "600",
    "breite_oben": "300",
    "breite_unten": "1550",
    "breite_unten_new": "1500",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}

describe('Testing error messages - VS5 max. width 1500', () => {
    configurator.configure_NEG_specialForms(test)
})
