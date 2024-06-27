var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS4-min.hoehe_links",
    "product": "Bologna 2028",
    "stoff_url": "bologna-2028",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "800",
    "hoehe": "290",
    "hoehe_new": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1000 mm ein."
}

describe('Testing error messages - FDS4 min. height left 300', () => {
    configurator.configure_NEG_specialForms(test)
})
