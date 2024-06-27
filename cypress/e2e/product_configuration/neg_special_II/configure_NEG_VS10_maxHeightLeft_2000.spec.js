var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS10-hoehe_links",
    "product": "Bologna 2028",
    "stoff_url": "Bologna-2028",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs10",
    "breite": "1000",
    "hoehe": "2001",
    "hoehe_new": "2000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

describe('Testing error messages - VS10 max. height left 2000', () => {
    configurator.configure_NEG_specialForms(test)
})
