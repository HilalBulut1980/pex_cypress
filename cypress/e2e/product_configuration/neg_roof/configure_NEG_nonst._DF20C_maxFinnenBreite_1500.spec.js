var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20C_fluegel_B_max",
    "product": "Cremona 1093",
    "stoff_url": "cremona-1093",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "800",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1600",
    "df_fluegelhoehe": "1100",
    "df_fluegelbreite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 1500 mm ein."
}

describe('Testing error messages - DF20 Comfort - max. finnen width 1500', () => {
    configurator.configure_NEG_roof(test)
})