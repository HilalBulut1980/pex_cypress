var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS3-max.hoehe_links",
    "product": "Syrakus 4215",
    "stoff_url": "syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "1500",
    "hoehe": "1700",
    "hoehe_new": "1600",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1600 mm ein."
}

describe('Testing error messages - FDS3 max. height left 1600', () => {
    configurator.configure_NEG_specialForms(test)
})