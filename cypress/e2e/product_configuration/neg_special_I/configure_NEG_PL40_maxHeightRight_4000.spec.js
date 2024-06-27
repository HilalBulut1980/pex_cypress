var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL40-max.hoehe1_rechts",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "breite": "1200",
    "hoehe_links": "2000",
    "hoehe_rechts": "4100",
    "hoehe_rechts_new": "3900",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 4000 mm ein."
}


describe('Testing error messages - PL40 max. height right 4000', () => {
    configurator.configure_NEG_specialForms(test)
})