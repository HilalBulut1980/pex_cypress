var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS6-breite_oben_unten",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "1000",
    "breite_oben_new": "100",
    "breite_unten": "1000",
    "breite_unten_new": "1000",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

describe('Testing error messages - VS6 width top/bottom', () => {
  configurator.configure_NEG_specialForms(test)
})
