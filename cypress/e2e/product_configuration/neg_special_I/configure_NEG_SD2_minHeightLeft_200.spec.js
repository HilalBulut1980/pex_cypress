
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-SD2-min.hoehe_links",
    "product": "Luna 4177",
    "stoff_url": "Luna-4177",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd2",
    "breite": "1000",
    "hoehe": "150",
    "hoehe_new": "200",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1600 mm ein."
}

describe('Testing error messages - SD2 min. height left 200', () => {
   configurator.configure_NEG_specialForms(test)
})
