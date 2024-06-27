var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS3-max.breite",
    "product": "Rimini 1017",
    "stoff_url": "rimini-1017",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "2300",
    "breite_new": "2200",
    "hoehe": "600",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Testing error messages - FDS3 max. width 2200', () => {
    configurator.configure_NEG_specialForms(test)
})
