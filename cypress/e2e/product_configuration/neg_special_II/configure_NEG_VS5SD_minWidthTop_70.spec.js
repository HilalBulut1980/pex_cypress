var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5SD-breite_oben",
    "product": "Alegria 4565",
    "stoff_url": "Alegria-4565",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben": "10",
    "breite_oben_new": "70",
    "breite_unten": "400",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 950 mm ein."
}


describe('Testing error messages - VS5 SD min. width top 70 ', () => {
    configurator.configure_NEG_specialForms(test)
})
