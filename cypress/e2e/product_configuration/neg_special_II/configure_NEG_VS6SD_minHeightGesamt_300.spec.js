var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-min. hoehe_gesamt",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "200",
    "breite_unten": "500",
    "gesamthoehe": "290",
    "gesamthoehe_new": "300",
    "teilhoehe": "100",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}


describe('Testing error messages - VS6SD min. height gesamt 300', () => {
    configurator.configure_NEG_specialForms(test)
})
