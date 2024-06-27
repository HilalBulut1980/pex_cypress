var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL40-min.hoehe2_rechts",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "breite": "500",
    "hoehe_links": "500",
    "hoehe_rechts": "80",
    "hoehe_rechts_new": "100",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein."
}

describe('Testing error messages - PL40 min. small height right 100', () => {
    configurator.configure_NEG_specialForms(test)
})