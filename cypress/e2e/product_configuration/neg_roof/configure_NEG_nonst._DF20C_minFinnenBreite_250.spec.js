var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20C_fluegel_B_min",
    "product": "Luna 4177",
    "stoff_url": "luna-4177",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "100",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "100",
    "df_fluegelhoehe": "1100",
    "df_glasbreite_new": "250",
    "df_fluegelbreite_new": "250",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 1500 mm ein."
}

describe('Testing error messages - DF20 Comfort - min. finnen width 250', () => {
    configurator.configure_NEG_roof(test)
})