var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S1-min.hoehe_klein_rechts",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1500",
    "hoehe_links": "1500",
    "hoehe_rechts": "50",
    "hoehe_rechts_new": "100",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2200 mm ein."
}

describe('Testing error messages - VS4S1 min. small height right 100', () => {

    configurator.configure_NEG_specialForms(test)
})
