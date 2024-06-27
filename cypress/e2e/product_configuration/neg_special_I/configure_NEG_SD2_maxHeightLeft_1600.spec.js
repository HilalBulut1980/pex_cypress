
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-SD2-max.hoehe_links",
    "product": "Luna 4177",
    "stoff_url": "Luna-4177",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd2",
    "breite": "1000",
    "hoehe": "1700",
    "hoehe_new": "1600",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1600 mm ein."
}

describe('Testing error messages - SD2 max. height left 1600', () => {
   configurator.configure_NEG_specialForms(test)
})
