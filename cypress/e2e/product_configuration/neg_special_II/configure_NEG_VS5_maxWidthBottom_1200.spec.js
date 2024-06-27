var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-max_breite_1200",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "2000",
    "hoehe_rechts": "300",
    "breite_oben": "200",
    "breite_unten": "1300",
    "breite_unten_new": "1200",
    "ausrichtung": "links",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2000 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Testing error messages - VS5 max. width 1200', () => {
    configurator.configure_NEG_specialForms(test)
})
