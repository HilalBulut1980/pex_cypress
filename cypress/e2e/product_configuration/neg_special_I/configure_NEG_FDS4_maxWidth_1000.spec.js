var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS4-max.breite",
    "product": "Peschiera 2034",
    "stoff_url": "peschiera-2034",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "1600",
    "breite_new": "1000",
    "hoehe": "500",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1000 mm ein."
}

describe('Testing error messages - FDS4 max. width 1000', () => {
    configurator.configure_NEG_specialForms(test)
})
