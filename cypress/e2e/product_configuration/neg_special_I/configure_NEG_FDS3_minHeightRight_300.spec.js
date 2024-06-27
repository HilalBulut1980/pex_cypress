var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS3-min.hoehe_rechts",
    "product": "Syrakus 4215",
    "stoff_url": "syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "1000",
    "hoehe": "200",
    "hoehe_new": "300",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1600 mm ein."
}

describe('Testing error messages - FDS3 min. height right 300', () => {
    configurator.configure_NEG_specialForms(test)
})