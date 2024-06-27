var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS4-min.breite",
    "product": "Peschiera 2034",
    "stoff_url": "peschiera-2034",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "250",
    "breite_new": "300",
    "hoehe": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1000 mm ein."
}

describe('Testing error messages - FDS4 min. width 300', () => {
    configurator.configure_NEG_specialForms(test)
})

