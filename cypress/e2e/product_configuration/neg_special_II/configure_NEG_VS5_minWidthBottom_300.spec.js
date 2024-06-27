var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-breite_unten",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben_new": "100",
    "breite_unten": "10",
    "breite_unten_new": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}


describe('Testing error messages - VS5 min. width bottom 300', () => {

    configurator.configure_NEG_specialForms(test)
})
