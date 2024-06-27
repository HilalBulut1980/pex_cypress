var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S2-min.hoehe_links",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s2",
    "breite": "1000",
    "hoehe_links": "230",
    "hoehe_links_new": "500",
    "hoehe_rechts": "100",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Testing error messages - VS4S2 min. height left 300', () => {
    configurator.configure_NEG_specialForms(test)
})

