var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F5-min.hoehe",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f5",
    "hoehe": "270",
    "hoehe_new": "300",
    "breite": "1200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

describe('Testing error messages - F5 min. height 300', () => {
    configurator.configure_NEG_specialForms(test)
})