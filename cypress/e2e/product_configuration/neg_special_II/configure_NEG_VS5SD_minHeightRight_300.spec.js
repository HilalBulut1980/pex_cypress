var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5SD-hoehe_rechts",
    "product": "Luna 4176",
    "stoff_url": "Luna-4176",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links_new": "100",
    "hoehe_rechts": "10",
    "hoehe_rechts_new": "350",
    "breite_oben": "200",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}


describe('Testing error messages - VS5 SD min. height right 300', () => {
   configurator.configure_NEG_specialForms(test)
})

