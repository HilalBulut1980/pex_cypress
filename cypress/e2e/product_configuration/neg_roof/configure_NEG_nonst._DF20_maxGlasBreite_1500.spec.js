var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20_glas_B_max",
    "product": "Rom 4584",
    "stoff_url": "rom-4584",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1600",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1700",
    "df_fluegelhoehe": "1100",
    "df_fluegelbreite_new": "1500",
    "df_glasbreite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1500 mm ein."
}



describe('Testing error messages - DF20 - max. glass width 1500', () => {
    configurator.configure_NEG_roof(test)
})