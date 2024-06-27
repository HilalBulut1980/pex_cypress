var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS3-min.hoehe_links",
    "product": "Syrakus 4215",
    "stoff_url": "syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "1000",
    "hoehe": "100",
    "hoehe_new": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1600 mm ein."
}

describe('Testing error messages - FDS3 min. height left 300', () => {
    configurator.configure_NEG_specialForms(test)
})

