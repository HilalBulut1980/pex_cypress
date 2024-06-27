var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20_fluegel_B_min",
    "product": "Effecto 4316",
    "stoff_url": "effecto-4316",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "100",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "100",
    "df_fluegelhoehe": "1100",
    "df_glasbreite_new": "230",
    "df_fluegelbreite_new": "230",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1500 mm ein."
}


describe('Testing error messages - DF20 - min. finnen width 230', () => {
    configurator.configure_NEG_roof(test)
})