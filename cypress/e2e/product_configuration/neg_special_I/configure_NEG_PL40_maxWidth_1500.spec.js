var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL40-max.breite",
    "product": "Bast 4141",
    "stoff_url": "Bast-4141",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "breite": "1600",
    "breite_new": "1500",
    "hoehe_links": "3500",
    "hoehe_rechts": "2000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}


describe('Testing error messages - PL40 max. width 1500', () => {
    configurator.configure_NEG_specialForms(test)
})