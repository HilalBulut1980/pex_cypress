var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL40-max.hoehe1_links",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "befestigung": "Clip",
    "breite": "1200",
    "hoehe_links": "4100",
    "hoehe_links_new": "3900",
    "hoehe_rechts": "2000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 4000 mm ein."
}


describe('Testing error messages - PL40 max.height left 4000', () => {
    configurator.configure_NEG_specialForms(test)
})
