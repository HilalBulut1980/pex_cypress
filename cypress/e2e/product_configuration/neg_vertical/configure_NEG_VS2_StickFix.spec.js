var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs2-stickFix",
    "product": "Bologna 2027",
    "stoff_url": "bologna-2027",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix",
    "hoehe": "2200",
    "breite": "910",
    "breite_new": "900",
    "message": "Leider ist die Klebetechnik \"Stick & Fix\" für eine Fläche von mehr als 2,0 m² nicht geeignet - bitte wählen Sie eine alternative Befestigungsmethode"
}

describe('Testing error messages - VS2 - Stick & Fix', () => {
    configurator.configure_NEG_vertical(test)
})