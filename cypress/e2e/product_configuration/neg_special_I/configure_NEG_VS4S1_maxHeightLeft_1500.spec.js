
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S1-max.hoehe_links_1500",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1500",
    "hoehe_links": "1600",
    "hoehe_links_new": "1500",
    "hoehe_rechts": "500",
    "ausrichtung": "links",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Testing error messages - VS4S1 max. height left 1500', () => {
    configurator.configure_NEG_specialForms(test)
})
