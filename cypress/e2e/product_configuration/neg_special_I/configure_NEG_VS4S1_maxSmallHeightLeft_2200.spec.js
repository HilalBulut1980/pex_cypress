var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S1-max.hoehe_klein_links",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1200",
    "hoehe_links": "2250",
    "hoehe_links_new": "2000",
    "hoehe_rechts": "2500",
    "hoehe_rechts_new": "2200",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2200 mm ein."
}

describe('Testing error messages - VS4S1 max. small height left 2200', () => {
    configurator.configure_NEG_specialForms(test)
})
