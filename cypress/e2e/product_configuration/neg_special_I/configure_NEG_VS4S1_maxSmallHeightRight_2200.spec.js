
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S1-max.hoehe_rechts_2200",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1200",
    "hoehe_links": "2500",
    "hoehe_links_new": "2200",
    "hoehe_rechts": "2250",
    "hoehe_rechts_new": "2000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2200 mm ein."
}

describe('Testing error messages - VS4S1 max. small height right 2200', () => {

    configurator.configure_NEG_specialForms(test)
})
