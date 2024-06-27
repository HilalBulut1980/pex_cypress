
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-min.hoehe_klein_links",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "500",
    "hoehe_links": "80",
    "hoehe_links_new": "100",
    "hoehe_rechts": "500",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2600 mm ein."
}

describe('Testing error messages - FS2 small height left 100', () => {
   configurator.configure_NEG_specialForms(test)
})
