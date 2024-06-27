var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS4-min.hoehe_rechts",
    "product": "Bologna 2028",
    "stoff_url": "bologna-2028",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "1000",
    "hoehe": "250",
    "hoehe_new": "300",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1000 mm ein."
}

describe('Testing error messages - FDS4 max. height right 1000', () => {
    configurator.configure_NEG_specialForms(test)
})