var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-breite_oben_unten",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben": "1000",
    "breite_oben_new": "100",
    "breite_unten": "100",
    "breite_unten_new": "1000",
    "ausrichtung": "links",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

describe('Testing error messages - VS5 width top/bottom', () => {
   configurator.configure_NEG_specialForms(test)
})
