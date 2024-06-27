var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5SD-hoehe_rechts",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "300",
    "hoehe_rechts": "2100",
    "hoehe_rechts_new": "2000",
    "breite_oben": "200",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

describe('Testing error messages - VS5 SD max. height right 2000', () => {
   configurator.configure_NEG_specialForms(test)
})
