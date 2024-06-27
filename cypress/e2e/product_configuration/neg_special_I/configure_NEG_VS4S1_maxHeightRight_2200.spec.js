
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S1-max.hoehe_rechts_2200",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1500",
    "hoehe_links": "500",
    "hoehe_rechts": "2300",
    "hoehe_rechts_new": "1500",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Testing error messages - VS4S1 max. height right 2200', () => {
    configurator.configure_NEG_specialForms(test)
})