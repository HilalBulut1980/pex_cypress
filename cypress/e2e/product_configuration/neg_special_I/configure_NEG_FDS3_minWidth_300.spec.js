var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS3-min.breite",
    "product": "Rimini 1017",
    "stoff_url": "rimini-1017",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "200",
    "breite_new": "300",
    "hoehe": "350",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Testing error messages - FDS3 min. width 300', () => {
    configurator.configure_NEG_specialForms(test)
})
