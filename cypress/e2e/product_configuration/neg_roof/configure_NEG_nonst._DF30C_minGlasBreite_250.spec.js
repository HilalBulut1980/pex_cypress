var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF30C_glas_B_min",
    "product": "Syrakus 2079",
    "stoff_url": "syrakus-2079",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 30 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "200",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1500",
    "df_fluegelhoehe": "1100",
    "df_glasbreite_new": "250",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 1500 mm ein."
}

describe('Testing error messages - DF30 Comfort - min. glass width 250', () => {
    configurator.configure_NEG_roof(test)
})