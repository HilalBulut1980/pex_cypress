var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS4-max.hoehe_links",
    "product": "Bologna 2028",
    "stoff_url": "bologna-2028",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "1000",
    "hoehe": "1100",
    "hoehe_new": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1000 mm ein."
}

describe('Testing error messages - FDS4 max. height left 1000', () => {
    configurator.configure_NEG_specialForms(test)
})
