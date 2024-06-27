var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F1-min.hoehe",
    "product": "Dimout 4490",
    "stoff_url": "Dimout-4490",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "hoehe": "200",
    "hoehe_new": "300",
    "breite": "1500",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

describe('Testing error messages - F1 min. height 300', () => {
    configurator.configure_NEG_specialForms(test)
})