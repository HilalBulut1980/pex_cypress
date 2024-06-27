var configurator = require("../../../support/configurator_NEG_vertical.js");

var test = {
    "name": "Neg.PEX-vs2-stickFixFront",
    "product": "Bologna 5027",
    "stoff_url": "bologna-5027",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix_front",
    "hoehe": "2200",
    "breite": "910",
    "breite_new": "900",
    "message": "Leider ist die Klebetechnik \"Stick & Fix Front\" für eine Fläche von mehr als 2,0 m² nicht geeignet - bitte wählen Sie eine alternative Befestigungsmethode"
}

describe('Testing error messages - VS2 - Stick & Fix Front', () => {
    configurator.configure_NEG_vertical(test)
})