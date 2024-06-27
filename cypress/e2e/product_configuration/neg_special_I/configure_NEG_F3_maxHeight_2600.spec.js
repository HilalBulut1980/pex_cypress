var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F3-max.hoehe",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f3",
    "hoehe": "2700",
    "hoehe_new": "2600",
    "breite": "1200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

describe('Testing error messages - F3 max. height 2600', () => {
    configurator.configure_NEG_specialForms(test)
})