var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-F1-max.hoehe",
    "product": "Dimout 4490",
    "stoff_url": "Dimout-4490",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "hoehe": "2700",
    "hoehe_new": "2600",
    "breite": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

describe('Testing error messages - F1 max. height 2600', () => {
    configurator.configure_NEG_specialForms(test)
})