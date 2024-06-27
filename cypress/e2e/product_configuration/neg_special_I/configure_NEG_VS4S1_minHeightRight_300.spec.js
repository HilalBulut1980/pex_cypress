
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S1-min.hoehe_rechts",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1000",
    "hoehe_links": "100",
    "hoehe_rechts": "230",
    "hoehe_rechts_new": "300",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Testing error messages - VS4S1 min. height right 300', () => {
    configurator.configure_NEG_specialForms(test)
})
