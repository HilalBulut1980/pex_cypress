var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-breite_oben_wabe",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben": "10",
    "breite_oben_new": "120",
    "breite_unten": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 1450 mm ein."
}


describe('Testing error messages - VS5 min. width top wabe 120  ', () => {

    configurator.configure_NEG_specialForms(test)
})
