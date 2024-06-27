var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5SD-hoehe_links",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "2100",
    "hoehe_links_new": "2000",
    "hoehe_rechts": "300",
    "breite_oben": "200",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}


describe('Testing error messages - VS5 SD max. height left 2000', () => {
    configurator.configure_NEG_specialForms(test)
})
