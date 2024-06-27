var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20C_glas_B_max",
    "product": "Tarent 1272",
    "stoff_url": "tarent-1272",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1600",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1700",
    "df_fluegelhoehe": "1100",
    "df_glasbreite_new": "1500",
    "df_fluegelbreite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 1500 mm ein."
}

describe('Testing error messages - DF20 Comfort - max. glass width 1500', () => {
    configurator.configure_NEG_roof(test)
})
