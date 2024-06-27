var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-breite_oben_max",
    "product": "Alegria 4565",
    "stoff_url": "Alegria-4565",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "1000",
    "hoehe_rechts": "950",
    "breite_unten": "1500",
    "breite_oben": "1451",
    "breite_oben_new": "1450",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 1450 mm ein."
}


describe('Testing error messages - VS5 max. width top 1450', () => {

    configurator.configure_NEG_specialForms(test)
})
