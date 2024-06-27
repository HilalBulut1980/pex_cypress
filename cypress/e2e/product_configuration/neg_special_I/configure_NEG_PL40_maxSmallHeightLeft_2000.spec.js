var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL40-max.hoehe2_links",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "breite": "1200",
    "hoehe_links": "2100",
    "hoehe_links_new": "2000",
    "hoehe_rechts": "3000",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein."
}


describe('Testing error messages - PL40 max. small height left 2000', () => {
    configurator.configure_NEG_specialForms(test)
})