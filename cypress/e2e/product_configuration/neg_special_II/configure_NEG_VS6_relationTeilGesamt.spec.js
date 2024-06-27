var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-hoehe_teil_gesamt",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "200",
    "breite_unten": "1000",
    "gesamthoehe": "2000",
    "teilhoehe": "2000",
    "teilhoehe_new": "1800",
    "message": "Die Gesamthöhe muss größer als die Teilhöhe sein."
}

describe('Testing error messages - VS6 relation height teil/gesamt', () => {
 configurator.configure_NEG_specialForms(test)
})
