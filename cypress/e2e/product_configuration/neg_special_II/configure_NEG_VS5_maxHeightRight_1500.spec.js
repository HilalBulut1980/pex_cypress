var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-hoehe_rechts_1500",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "300",
    "hoehe_rechts": "2000",
    "hoehe_rechts_new": "1500",
    "breite_oben": "200",
    "breite_unten": "1300",
    "ausrichtung": "rechts",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2000 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}


describe('Testing error messages - VS5 max. height right 1500', () => {
   configurator.configure_NEG_specialForms(test)
})