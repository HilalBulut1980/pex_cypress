var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS7-breite_oben_unten",
    "product": "Bast 4141",
    "stoff_url": "Bast-4141",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "1000",
    "breite_oben": "1000",
    "breite_oben_new": "400",
    "hoehe_new": "500",
    "breite_unten": "400",
    "breite_unten_new": "1000",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

describe('Testing error messages - VS7 width top/bottom', () => {

   configurator.configure_NEG_specialForms(test)
})
