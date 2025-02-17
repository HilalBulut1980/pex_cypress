var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL40-min.breite",
    "product": "Bast 4141",
    "stoff_url": "Bast-4141",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "breite": "250",
    "breite_new": "300",
    "hoehe_links": "1000",
    "hoehe_rechts": "500",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}

describe('Testing error messages - PL40 min. width 300', () => {
    configurator.configure_NEG_specialForms(test)
})
