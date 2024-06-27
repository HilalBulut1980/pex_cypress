var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-hoehe_links_2000",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_rechts": "1500",
    "hoehe_links": "2001",
    "hoehe_links_new": "2000",
    "breite_oben": "300",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}


describe('Testing error messages - VS5 max. height left 2000', () => {
   configurator.configure_NEG_specialForms(test)
})