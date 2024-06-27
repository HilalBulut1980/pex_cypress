var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5SD-breite_unten_wabe",
    "product": "Novella 4930",
    "stoff_url": "Novella-4933",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben_new": "120",
    "breite_unten": "10",
    "breite_unten_new": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1000 mm ein."
}


describe('Testing error messages - VS5 SD min. width bottom wabe 300 ', () => {
    configurator.configure_NEG_specialForms(test)
})
